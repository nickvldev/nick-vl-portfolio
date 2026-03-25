import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <Link
      href={link || "#"}
      className="group block w-full max-w-md mx-auto h-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 xl:p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-teal-50 text-teal-600 font-mono text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 mb-2">
          <h3 className="text-lg sm:text-xl font-medium group-hover:text-teal-600 transition-colors duration-300">
            {title}
          </h3>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 group-hover:text-teal-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>

        <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
