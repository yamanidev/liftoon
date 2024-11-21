import { CaseStudyHero } from "@/sanity.types";
import Link from "next/link";

export default function CaseStudyHeroSection({ data }: { data: CaseStudyHero }) {
  const title = data.title;
  const description = data.description;

  return (
    <section className="py-20 text-center sm:py-32">
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && <p className="mt-2 text-gray-300">{description}</p>}
      {data.project?.projectLink && (
        <Link
          href={data.project.projectLink}
          className="mt-10 inline-block rounded-md bg-white px-4 py-1.5 text-gray-950 transition hover:bg-gray-200"
          rel="noopener"
          target="_blank">
          {data.project.projectText || "Link"}
        </Link>
      )}
    </section>
  );
}
