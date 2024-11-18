import { CASE_STUDY_QUERYResult } from "@/sanity.types";

export default function HeroSection({ data }: { data: CASE_STUDY_QUERYResult }) {
  const title = data?.heroSection?.heroTitle || data?.title;
  const description = data?.heroSection?.heroDescription || data?.description;

  return (
    <section className="py-20 text-center sm:py-32">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-gray-300">{description}</p>
    </section>
  );
}
