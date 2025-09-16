import { useI18n } from "@/i18n/i18nContext";

type Tech = {
  name: string;
  icon: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  repoUrl?: string;
  demoUrl: string;
  techs: Tech[];
};

export default function ProjectCard({
  title,
  description,
  image,
  repoUrl,
  demoUrl,
  techs,
}: ProjectCardProps) {
  const { t } = useI18n();

  return (
    <div className="block md:flex flex-row items-center justify-center gap-8">
      <a href={repoUrl} target="_blank" rel="nofollow">
        <img src={image} alt={title} className="w-full h-auto rounded-[0.8rem] object-cover transition duration-300 ease-in-out" />
      </a>

      <div className="w-full mt-8 md:w-[80%] text-center md:text-start flex flex-col items-start justify-center leading-[1.8rem] gap-[1.2rem]">
        <p className="text-[2.8rem] w-full font-bold text-black">{title}</p>
        <p className="font-medium text-[var(--font-color-2)] [text-wrap:pretty]">
          {description}
        </p>

        <div className="flex flex-row items-center justify-start gap-4">
          {techs.map((tech) => (
            <div key={tech.name} className="relative group inline-block">
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 flex-shrink-0 rounded-[0.8rem] object-cover" />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center justify-start gap-4">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              className="flex items-center justify-center px-4 py-3 rounded-[0.5rem] bg-[color:var(--button-color)] text-white font-semibold transition-all duration-300 ease-in-out gap-2"
            >
              {t("code")}
            </a>
          )}
          <a
            href={demoUrl}
            target="_blank"
            className="flex items-center justify-center px-4 py-3 rounded-[0.5rem] bg-[color:var(--button-color)] text-white font-semibold transition-all duration-300 ease-in-out gap-2"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
