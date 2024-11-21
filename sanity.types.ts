/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type CaseStudySection = {
  _type: "caseStudySection";
  title?: string;
  description?: string;
  cta?: {
    ctaText?: string;
    ctaLink?: string;
  };
  showCta?: boolean;
};

export type CaseStudyHero = {
  _type: "caseStudyHero";
  title?: string;
  description?: string;
  project?: {
    projectText?: string;
    projectLink?: string;
  };
};

export type CaseStudyCard = {
  _type: "caseStudyCard";
  title?: string;
  description?: string;
  thumbnail?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  pageLink?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  };
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  pathname?: Slug;
  sections?: Array<
    | ({
        _key: string;
      } & CaseStudyCard)
    | ({
        _key: string;
      } & CaseStudyHero)
    | ({
        _key: string;
      } & CaseStudySection)
  >;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | CaseStudySection
  | CaseStudyHero
  | CaseStudyCard
  | Page
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/queries.ts
// Variable: PAGE_DATA_QUERY
// Query: *[pathname.current == $pathname][0] {  ...,  sections[] {    ...,    thumbnail {      asset->{        url      }    },    pageLink-> {      title, // You can specify the fields you need from the referenced page      pathname    }  }}
export type PAGE_DATA_QUERYResult =
  | {
      _id: string;
      _type: "page";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      title?: string;
      pathname?: Slug;
      sections: Array<
        | {
            _key: string;
            _type: "caseStudyCard";
            title?: string;
            description?: string;
            thumbnail: {
              asset: {
                url: string | null;
              } | null;
            } | null;
            pageLink: {
              title: string | null;
              pathname: Slug | null;
            } | null;
          }
        | {
            _key: string;
            _type: "caseStudyHero";
            title?: string;
            description?: string;
            project?: {
              projectText?: string;
              projectLink?: string;
            };
            thumbnail: null;
            pageLink: null;
          }
        | {
            _key: string;
            _type: "caseStudySection";
            title?: string;
            description?: string;
            cta?: {
              ctaText?: string;
              ctaLink?: string;
            };
            showCta?: boolean;
            thumbnail: null;
            pageLink: null;
          }
      > | null;
    }
  | {
      _id: string;
      _type: "sanity.fileAsset";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      originalFilename?: string;
      label?: string;
      title?: string;
      description?: string;
      altText?: string;
      sha1hash?: string;
      extension?: string;
      mimeType?: string;
      size?: number;
      assetId?: string;
      uploadId?: string;
      path?: string;
      url?: string;
      source?: SanityAssetSourceData;
      sections: null;
    }
  | {
      _id: string;
      _type: "sanity.imageAsset";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      originalFilename?: string;
      label?: string;
      title?: string;
      description?: string;
      altText?: string;
      sha1hash?: string;
      extension?: string;
      mimeType?: string;
      size?: number;
      assetId?: string;
      uploadId?: string;
      path?: string;
      url?: string;
      metadata?: SanityImageMetadata;
      source?: SanityAssetSourceData;
      sections: null;
    }
  | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[pathname.current == $pathname][0] {\n  ...,\n  sections[] {\n    ...,\n    thumbnail {\n      asset->{\n        url\n      }\n    },\n    pageLink-> {\n      title, // You can specify the fields you need from the referenced page\n      pathname\n    }\n  }\n}": PAGE_DATA_QUERYResult;
  }
}
