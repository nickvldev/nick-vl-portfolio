import { PortfolioProject } from "@/data/projects";
import ProjectCard from "@/components/global/ProjectCard";

interface ProjectsProps {
  projects: PortfolioProject[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex py-24 px-6 sm:px-11 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl items-stretch">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            imageUrl={project.image}
            tags={project.tags}
            link={project.route}
          />
        ))}
      </div>
    </div>
  );
}
