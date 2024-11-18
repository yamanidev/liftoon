import HeroSection from "@/components/layout/HeroSection";
import PublicLayout from "@/components/layout/PublicLayout";
import Section from "@/components/layout/Section";
import { sanityFetch } from "@/sanity/lib/live";
import { CASE_STUDY_QUERY } from "@/sanity/lib/queries";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const { data: caseStudyData } = await sanityFetch({
    query: CASE_STUDY_QUERY,
    params: { slug }
  });

  return (
    <PublicLayout>
      <div className="mx-auto w-full max-w-5xl px-2">
        <HeroSection data={caseStudyData} />
        {caseStudyData?.sections?.map((section) => <Section key={section._key} data={section} />)}
      </div>
    </PublicLayout>
  );
}
