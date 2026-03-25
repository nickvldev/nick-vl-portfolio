export interface Project {
  slug: string;
  image: string;
  route: string;
  featured: boolean;
  tags: string[];
}

export interface ProjectTranslation {
  title: string;
  description: string;
}

export interface PortfolioProject extends Project, ProjectTranslation {}

export const projects: Project[] = [
  {
    slug: "brabo",
    image: "/images/brabo-card.png",
    route: "/projects/brabo",
    featured: true,
    tags: ["React", "Spring Boot"],
  },
  {
    slug: "euronav",
    image: "/images/euronav-card.png",
    route: "/projects/euronav",
    featured: true,
    tags: ["React", "MS Azure"],
  },
  {
    slug: "frontforce",
    image: "/images/frontforce-card.png",
    route: "/projects/frontforce",
    featured: false,
    tags: ["Angular", "Three.js"],
  },
  {
    slug: "duxxit",
    image: "/images/duxxit-card.png",
    route: "/projects/duxxit",
    featured: true,
    tags: ["Next.js", "Spring Boot"],
  },
  {
    slug: "henconnect",
    image: "/images/henconnect-card.png",
    route: "/projects/henconnect",
    featured: false,
    tags: ["React Native", "Expo"],
  },
];
