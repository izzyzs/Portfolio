import { StaticImageData } from "next/image";

type Project = { image: StaticImageData; title: string; summary: string; technologies: string[]; demo?: string; link?: string; inProgress?: boolean };

export default Project;
