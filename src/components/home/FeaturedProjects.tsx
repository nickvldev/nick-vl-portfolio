import { toUpperCase } from "uri-js/dist/esnext/util";
import ProjectCard from "@/components/global/ProjectCard";
import type { PortfolioProject } from "@/data/projects";
import { Projects } from "@/components/portfolio/Projects";

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
    <section className="pt-32 flex flex-col pb-8">
      <div className="flex flex-col gap-4 px-4 items-center justify-center">
        <span className="text-sm font-bold tracking-widest text-red-400 font-jetbrains-mono">
          {toUpperCase(label)}
        </span>
        <span className="text-2xl md:text-3xl lg:text-4xl">{title}</span>
        <p className="text-base md:text-lg">{subtitle}</p>
      </div>
      <Projects projects={featuredProjects} />
    </section>
  );
}
