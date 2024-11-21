import { defineQuery } from "next-sanity";

export const PAGE_DATA_QUERY = defineQuery(`*[pathname.current == $pathname][0] {
  ...,
  sections[] {
    ...,
    thumbnail {
      asset->{
        url
      }
    }
  }
}`);
