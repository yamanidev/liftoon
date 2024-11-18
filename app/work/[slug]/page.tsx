import HeroSection from "@/components/layout/HeroSection";
import PublicLayout from "@/components/layout/PublicLayout";
import Section from "@/components/layout/Section";
import { CASE_STUDY_QUERYResult } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { CASE_STUDY_QUERY } from "@/sanity/lib/queries";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const caseStudyData = await client.fetch<CASE_STUDY_QUERYResult>(CASE_STUDY_QUERY, { slug });

  console.log(caseStudyData);

  return (
    <PublicLayout>
      <div className="mx-auto w-full max-w-5xl px-2">
        <HeroSection data={caseStudyData} />
        {caseStudyData?.sections?.map((section) => <Section key={section._key} data={section} />)}
      </div>
    </PublicLayout>
  );
}
