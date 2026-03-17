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
    tags: ["React", "Spring Boot", "Kubernetes"],
  },
  {
    slug: "euronav",
    image: "/images/euronav-card.png",
    route: "/projects/euronav",
    featured: true,
    tags: ["React", "MS Azure"],
  },
];
