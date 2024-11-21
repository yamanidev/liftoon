import { CaseStudyHero } from "@/sanity.types";

export default function CaseStudyHeroSection({ data }: { data: CaseStudyHero }) {
  const title = data.title;
  const description = data.description;

  return (
    <section className="py-20 text-center sm:py-32">
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && <p className="mt-2 text-gray-300">{description}</p>}
    </section>
  );
}
