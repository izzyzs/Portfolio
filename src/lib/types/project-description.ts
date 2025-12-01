import { StaticImageData } from "next/image";

type Project = { image: StaticImageData; title: string; summary: string; technologies: string[]; link: string };

export default Project;
