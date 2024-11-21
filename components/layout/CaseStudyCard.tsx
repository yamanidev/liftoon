import { Section } from "@/types/section";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CaseStudyCard({ data }: { data: Section }) {
  return (
    <Link href={data.pageLink?.pathname?.current ?? "#"} className="block">
      <article>
        <Image
          width="1264"
          height="400"
          src={data.thumbnail?.asset?.url as string}
          alt={data.title as string} // @TODO change the schema of the thumbnail to support alt text
          className="h-[37.5rem] rounded-md object-cover" // @TODO: apply proper aspect ratio (check Next.js' warnings in the browser console)
          priority
        />
        <h2 className="mb-1 mt-2 text-lg font-bold">{data.title}</h2>
        <p className="text-sm text-gray-300">{data.description}</p>
      </article>
    </Link>
  );
}
