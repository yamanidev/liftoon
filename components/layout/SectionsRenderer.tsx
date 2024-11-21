import { Section } from "@/types/section";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyHeroSection from "./CaseStudyHeroSection";
import CaseStudySection from "./CaseStudySection";

type Props = {
  sections: Section[] | null;
};

export default function SectionsRenderer({ sections }: Props) {
  if (!sections || sections.length === 0) return null;

  const renderSection = (section: Section) => {
    if (section._type === "caseStudyCard") {
      return <CaseStudyCard key={section._key} data={section} />;
    }

    if (section._type === "caseStudyHero") {
      return <CaseStudyHeroSection key={section._key} data={section} />;
    }

    if (section._type === "caseStudySection") {
      return <CaseStudySection key={section._key} data={section} />;
    }

    return null;
  };

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl space-y-10 px-2 py-20">
        {sections.map(renderSection)}
      </div>
    </section>
  );
}
