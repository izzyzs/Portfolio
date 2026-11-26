import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px 96px",
                    background: "#0b1324",
                    color: "#e8e2d4",
                    fontFamily: "serif",
                }}
            >
                <div style={{ fontSize: 96, lineHeight: 1 }}>Ismael</div>
                <div style={{ fontSize: 112, lineHeight: 1, color: "#cba65e", letterSpacing: 4, alignSelf: "flex-end" }}>SOUMAHORO</div>
                <div style={{ marginTop: 56, fontSize: 32, color: "#98a0b3", borderTop: "2px solid #26324d", paddingTop: 28 }}>
                    Software engineer · Full-stack and systems
                </div>
            </div>
        ),
        size,
    );
}
