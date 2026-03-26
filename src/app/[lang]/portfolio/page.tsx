import { getDictionary, hasLocale } from "@/utils/dictionaries";
import { notFound } from "next/navigation";
import {
  PortfolioProject,
  type Project,
  projects,
  type ProjectTranslation,
} from "@/data/projects";
import { Projects } from "@/components/portfolio/Projects";
import { Intro } from "@/components/portfolio/Intro";

export default async function Page({ params }: { params: { lang: string } }) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const portfolioProjects: PortfolioProject[] = projects.map(
    (project: Project) => ({
      ...project,
      ...(dict.portfolio.projectCards[
        project.slug as keyof typeof dict.portfolio.projectCards
      ] as ProjectTranslation),
    }),
  );

  return (
    <main className="min-h-screen bg-slate-100">
      <Intro intro={dict.portfolio.intro} />
      <Projects projects={portfolioProjects} />
    </main>
  );
}
