import { sanityFetch } from "./live";
import { PAGE_DATA_QUERY } from "./queries";

export async function fetchPageData(pathname: string) {
  try {
    const { data } = await sanityFetch({
      query: PAGE_DATA_QUERY,
      params: { pathname }
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch page data", error);

    return null;
  }
}
