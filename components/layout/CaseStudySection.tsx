import Link from "next/link";

// @TODO: figure out a way to extract the exact type of a section
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CaseStudySection({ data }: { data: any }) {
  return (
    <section className="py-10 sm:py-20">
      <h2 className="text-xl font-bold">{data.sectionTitle}</h2>
      <p className="mt-2 text-gray-300">{data.sectionDescription}</p>
      {data.cta && (
        <Link
          href={data.cta.ctaLink}
          className="mt-4 inline-block rounded-md bg-white px-4 py-1.5 text-gray-950 transition hover:bg-gray-200">
          {data.cta.ctaText}
        </Link>
      )}
    </section>
  );
}
