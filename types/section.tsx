import { PAGE_DATA_QUERYResult } from "@/sanity.types";

export type Section = NonNullable<NonNullable<PAGE_DATA_QUERYResult>["sections"]>[number];
