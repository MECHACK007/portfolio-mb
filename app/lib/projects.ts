export type Project = {
    slug: string;
    title: string;
    description: string;
    image: string;
    url?: string;
    tags: string[];
};

export const projects: Project[] = [
    {
        slug: "projet-1",
        title: "Nom du projet 1",
        description: "Courte description du projet et du problème qu'il résout.",
        image: "/images/projects/projet-1.webp",
        url: "https://exemple.com",
        tags: ["Next.js", "Tailwind"],
    },
    {
        slug: "projet-2",
        title: "Nom du projet 2",
        description: "Courte description du projet et du problème qu'il résout.",
        image: "/images/projects/projet-2.webp",
        url: "https://exemple.com",
        tags: ["Flutter", "API REST"],
    },
    {
        slug: "projet-3",
        title: "Nom du projet 3",
        description: "Courte description du projet et du problème qu'il résout.",
        image: "/images/projects/projet-3.webp",
        tags: ["Laravel", "MySQL"],
    },
];