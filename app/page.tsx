import PublicLayout from "@/components/layout/PublicLayout";
import SectionsRenderer from "@/components/layout/SectionsRenderer";
import { fetchPageData } from "@/sanity/lib/fetchers";

export default async function Home() {
  const pageData = await fetchPageData("/");
  const sections = pageData?._type === "page" ? pageData.sections : null;

  return (
    <PublicLayout>
      <SectionsRenderer sections={sections} />
    </PublicLayout>
  );
}
