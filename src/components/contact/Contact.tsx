import SectionHeader from "../section-header";

const field =
    "w-full px-4 py-2 rounded-sm bg-surface text-ink border border-rule focus:border-sage focus:outline-2 focus:outline-sage focus:outline-offset-1 transition-colors";

export default function Contact() {
    return (
        <section aria-labelledby="contact" className="scroll-mt-20 py-12 lg:py-16">
            <SectionHeader id="contact">Contact Me</SectionHeader>
            <form className="max-w-2xl space-y-5" action={process.env.FORM_API} method="POST">
                <div>
                    <label htmlFor="name" className="block mb-2 font-mono text-sm text-muted">
                        Name
                    </label>
                    <input type="text" id="name" name="name" autoComplete="name" className={field} required />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 font-mono text-sm text-muted">
                        Email
                    </label>
                    <input type="email" id="email" name="email" autoComplete="email" className={field} required />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-2 font-mono text-sm text-muted">
                        Message
                    </label>
                    <textarea id="message" name="message" rows={5} className={field} required></textarea>
                </div>
                <button type="submit" className="font-mono text-sm px-6 py-3 rounded-sm bg-gold text-ground border border-gold hover:opacity-90 transition-opacity">
                    Send message
                </button>
            </form>
        </section>
    );
}
