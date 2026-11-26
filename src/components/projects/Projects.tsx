import Image from "next/image";
import SectionHeader from "../section-header";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

const buttonBase = "inline-block font-mono text-sm px-4 py-2 rounded-sm border border-gold transition-colors";

export default function Projects() {
    return (
        <section aria-labelledby="projects" className="scroll-mt-20 py-12 lg:py-16">
            <SectionHeader id="projects">Projects</SectionHeader>
            <ol className="space-y-20">
                {projects.map((project, idx) => (
                    <li key={project.title} className="grid gap-8 md:grid-cols-2 md:items-center">
                        <Image
                            src={project.image}
                            alt={project.imageAlt}
                            sizes="(min-width: 768px) 50vw, 100vw"
                            placeholder="blur"
                            className={`rounded-sm border border-rule shadow-sm ${project.image.width < project.image.height ? "max-h-96 w-auto mx-auto" : "w-full h-auto"}`}
                        />
                        <div className="min-w-0 space-y-4">
                            <p className="font-heading italic text-gold text-lg">No. {idx + 1}</p>
                            <h3 className="text-2xl md:text-3xl font-medium">
                                {project.title}
                                {project.inProgress && <span className="ml-3 align-middle font-mono text-xs uppercase tracking-wider text-muted">In progress</span>}
                            </h3>
                            <p>{project.summary}</p>
                            <ul aria-label="Technologies" className="flex flex-wrap gap-2 font-mono text-xs">
                                {project.technologies.map((tech) => (
                                    <li key={tech} className="border border-rule rounded-sm px-2 py-0.5 text-muted">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                            {(project.demo || project.link) && (
                                <div className="flex flex-wrap gap-3 pt-1">
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`${buttonBase} bg-gold text-ground hover:opacity-90`}>
                                            View the live demo
                                        </a>
                                    )}
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${buttonBase} text-gold hover:bg-surface`}>
                                            Source on GitHub
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ol>

            <div className="mt-24 grid gap-10 md:grid-cols-2 border-t border-rule pt-12">
                <div className="space-y-4">
                    <h3 className="text-2xl font-medium">YouTube</h3>
                    <p>
                        I&apos;m documenting my process of growing as not only a developer but as a <em>computer scientist</em>.
                    </p>
                    <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className={`${buttonBase} text-gold hover:bg-surface`}>
                        Visit the channel
                    </a>
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-medium">Résumé</h3>
                    <p>Want more detail? My résumé covers my experience, education and skills.</p>
                    <a href={site.resume} target="_blank" rel="noopener noreferrer" className={`${buttonBase} text-gold hover:bg-surface`}>
                        Open the résumé (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
}
