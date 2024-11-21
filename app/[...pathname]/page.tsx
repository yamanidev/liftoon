import PublicLayout from "@/components/layout/PublicLayout";
import SectionsRenderer from "@/components/layout/SectionsRenderer";
import { fetchPageData } from "@/sanity/lib/fetchers";

export default async function DynamicPage({ params }: { params: Promise<{ pathname: string[] }> }) {
  const pathname = `/${(await params).pathname.join("/")}`;
  const pageData = await fetchPageData(pathname);
  const sections = pageData?._type === "page" ? pageData.sections : null;

  return (
    <PublicLayout>
      <SectionsRenderer sections={sections} />
    </PublicLayout>
  );
}
