import PublicLayout from "@/components/layout/PublicLayout";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_CASE_STUDIES_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { data: caseStudies } = await sanityFetch({
    query: HOME_CASE_STUDIES_QUERY
  });

  return (
    <PublicLayout>
      <section>
        <div className="mx-auto w-full max-w-7xl space-y-10 px-2 py-20">
          {caseStudies.map((caseStudy) => (
            <Link key={caseStudy._id} href={`/work/${caseStudy.slug?.current}`} className="block">
              <article>
                <Image
                  width="1264"
                  height="400"
                  src={caseStudy.thumbnail?.asset?.url as string}
                  alt=""
                  className="h-[37.5rem] rounded-md object-cover"
                />
                <h2 className="mb-1 mt-2 font-bold">{caseStudy.title}</h2>
                <p className="text-sm text-gray-300">{caseStudy.description}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
