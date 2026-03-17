import { toUpperCase } from "uri-js/dist/esnext/util";
import ProjectCard from "@/components/global/ProjectCard";
import type { PortfolioProject } from "@/data/projects";

interface FeaturedProjectsProps {
  featuredProjectsText: {
    title: string;
    subtitle: string;
    label: string;
  };
  featuredProjects: PortfolioProject[];
}

export function FeaturedProjects({
  featuredProjectsText,
  featuredProjects,
}: FeaturedProjectsProps) {
  const { title, subtitle, label } = featuredProjectsText;
  return (
    <section className="pt-32 flex flex-col pb-">
      <div className="flex flex-col gap-4 items-center justify-center">
        <span className="text-sm font-bold tracking-widest text-red-400 font-jetbrains-mono">
          {toUpperCase(label)}
        </span>
        <span className="text-2xl md:text-3xl lg:text-4xl">{title}</span>
        <p className="text-base md:text-lg pb-16">{subtitle}</p>
      </div>
      <div className="pb-24">
        <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {featuredProjects.map((project) => (
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
    </section>
  );
}
