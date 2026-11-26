import type { Root, Element, ElementContent } from "hast";
import { visit, SKIP } from "unist-util-visit";

/*
 * Turns GFM footnotes into margin notes.
 *
 * remark-gfm renders footnotes as a numbered list at the end of the post. This
 * plugin keeps that list (it is what mobile readers and screen readers get) and
 * also copies each note's text into a <span class="sidenote"> right after its
 * reference. CSS shows the margin copy on wide screens and the end list on
 * narrow ones, so no JavaScript is needed.
 */
export default function rehypeSidenotes() {
    return (tree: Root) => {
        const notes = new Map<string, ElementContent[]>();

        visit(tree, "element", (node: Element) => {
            if (node.tagName !== "section" || !("dataFootnotes" in node.properties)) return;
            visit(node, "element", (li: Element) => {
                if (li.tagName === "li" && typeof li.properties.id === "string") {
                    notes.set(li.properties.id, li.children.map(toInline).filter(Boolean) as ElementContent[]);
                }
            });
            return SKIP;
        });
        if (notes.size === 0) return;

        visit(tree, "element", (node: Element, index, parent) => {
            if (node.tagName !== "sup" || !parent || index === undefined) return;
            const ref = node.children.find((c): c is Element => c.type === "element" && "dataFootnoteRef" in c.properties);
            if (!ref) return;
            const id = String(ref.properties.href ?? "").replace(/^#/, "");
            const body = notes.get(id);
            if (!body) return;
            const label = ref.children.map((c) => ("value" in c ? c.value : "")).join("");

            const sidenote: Element = {
                type: "element",
                tagName: "span",
                properties: { className: ["sidenote"], ariaHidden: "true" },
                children: [
                    { type: "element", tagName: "span", properties: { className: ["sidenote-number"] }, children: [{ type: "text", value: label }] },
                    ...structuredClone(body),
                ],
            };
            parent.children.splice(index + 1, 0, sidenote);
            return index + 2;
        });
    };
}

// Block elements are not allowed inside a paragraph, so each <p> becomes a block-styled <span>
// and the "back to text" arrow links are dropped from the margin copy.
function toInline(node: ElementContent): ElementContent | null {
    if (node.type !== "element") return node.type === "text" && !node.value.trim() ? null : node;
    if ("dataFootnoteBackref" in node.properties) return null;
    const children = node.children.map(toInline).filter(Boolean) as ElementContent[];
    if (node.tagName === "p") return { type: "element", tagName: "span", properties: { className: ["sidenote-p"] }, children };
    return { ...node, children };
}
