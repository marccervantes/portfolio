import Image from "next/image";
import { useI18n } from "@/i18n/i18nContext";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  repoUrl?: string;
  demoUrl: string;
  demoName?: string;
  secondDemoUrl?: string;
  secondDemoName?: string;
};

export default function ProjectCardExtensions({
  title,
  description,
  image,
  repoUrl,
  demoUrl,
  demoName,
  secondDemoUrl,
  secondDemoName,
}: ProjectCardProps) {

  const { t } = useI18n();

  return (
    <div className="block md:flex flex-row items-center justify-center gap-8">
      <a href={repoUrl} target="_blank" rel="nofollow">
        {/* <img src={image} alt={title} className="w-full h-auto rounded-[0.8rem] object-cover transition duration-300 ease-in-out" /> */}
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="w-full h-auto rounded-[0.8rem] object-cover transition duration-300 ease-in-out"
        />
      </a>

      <div className="w-full mt-8 md:w-[80%] text-center md:text-start flex flex-col items-start justify-center leading-[1.8rem] gap-[1.2rem]">
        <p className="text-[2.8rem] w-full font-bold text-black leading-12">
          {title}
        </p>
        <p className="font-medium text-[var(--font-color-2)] [text-wrap:pretty]">
          {description}
        </p>

        <div className="w-full flex flex-wrap items-center justify-center md:justify-start gap-4">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center min-w-[110px] px-5 py-3 rounded-[0.5rem] bg-[color:var(--button-color)] text-white text-sm sm:text-base font-semibold text-center transition-all duration-300 ease-in-out gap-2"
            >
              {t("code")}
            </a>
          )}
        </div>

        <div className="w-full flex flex-wrap items-center justify-center md:justify-start gap-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center min-w-[110px] px-5 py-3 rounded-[0.5rem] bg-[color:var(--button-color)] text-white text-sm sm:text-base font-semibold text-center transition-all duration-300 ease-in-out gap-2"
            >
              {demoName || "Demo"}
            </a>
          )}

          {secondDemoUrl && (
            <a
              href={secondDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center min-w-[110px] px-5 py-3 rounded-[0.5rem] bg-[color:var(--button-color)] text-white text-sm sm:text-base font-semibold text-center transition-all duration-300 ease-in-out gap-2"
            >
              {secondDemoName || "Demo 2"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
