import { defineQuery } from "next-sanity";

const MAX_HOME_CASE_STUDIES = 6;

export const HOME_CASE_STUDIES_QUERY =
  defineQuery(`*[_type == "caseStudy"][0...${MAX_HOME_CASE_STUDIES}]{
    _id, title, description, slug, thumbnail {
      asset -> {
        url
      }
    }
  }`);

export const CASE_STUDY_QUERY = defineQuery("*[_type == 'caseStudy' && slug.current == $slug][0]");
