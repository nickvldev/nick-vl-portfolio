import { getDictionary, hasLocale } from "@/utils/dictionaries";
import { notFound } from "next/navigation";
import Hero from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import {
  projects,
  type PortfolioProject,
  type Project,
  type ProjectTranslation,
} from "@/data/projects";
import { AboutMeCTA } from "@/components/home/AboutMeCTA";

export default async function Page({ params }: { params: { lang: string } }) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const featuredProjects: PortfolioProject[] = projects
    .filter((project: Project) => project.featured)
    .map((project: Project) => ({
      ...project,
      ...(dict.portfolio.projectCards[
        project.slug as keyof typeof dict.portfolio.projectCards
      ] as ProjectTranslation),
    }));

  return (
    <main className="min-h-screen bg-slate-100">
      <Hero heroText={dict.home.hero} />
      <FeaturedProjects
        featuredProjectsText={dict.home.featuredProjects}
        featuredProjects={featuredProjects}
      />
      <AboutMeCTA aboutMeCTAText={dict.home.aboutMeCTA} />
    </main>
  );
}
