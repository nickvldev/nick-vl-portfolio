import { PortfolioProject } from "@/data/projects";
import ProjectCard from "@/components/global/ProjectCard";

interface ProjectsProps {
  projects: PortfolioProject[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="py-24 px-8 xs:px-11 max-w-360 mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
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
