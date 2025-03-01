// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type DerbysDocumentDataSlicesSlice = DerbyMagazineSlice;

/**
 * Content for derbys documents
 */
interface DerbysDocumentData {
  /**
   * Slice Zone field in *derbys*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: derbys.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<DerbysDocumentDataSlicesSlice> /**
   * Meta Title field in *derbys*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: derbys.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *derbys*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: derbys.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *derbys*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: derbys.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * derbys document from Prismic
 *
 * - **API ID**: `derbys`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DerbysDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<DerbysDocumentData>,
    "derbys",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | NewsBlockSecondSlice
  | NewsBlockFirstSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

export type AllDocumentTypes = DerbysDocument | HomepageDocument;

/**
 * Primary content in *DerbyMagazine → Default → Primary*
 */
export interface DerbyMagazineSliceDefaultPrimary {
  /**
   * Page de couverture field in *DerbyMagazine → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: derby_magazine.default.primary.page_de_couverture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  page_de_couverture: prismic.ImageField<never>;

  /**
   * Lien du magazine field in *DerbyMagazine → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Places l'URL du magazine en ligne
   * - **API ID Path**: derby_magazine.default.primary.lien_du_magazine
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  lien_du_magazine: prismic.KeyTextField;
}

/**
 * Default variation for DerbyMagazine Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DerbyMagazineSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DerbyMagazineSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *DerbyMagazine*
 */
type DerbyMagazineSliceVariation = DerbyMagazineSliceDefault;

/**
 * DerbyMagazine Shared Slice
 *
 * - **API ID**: `derby_magazine`
 * - **Description**: DerbyMagazine
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DerbyMagazineSlice = prismic.SharedSlice<
  "derby_magazine",
  DerbyMagazineSliceVariation
>;

/**
 * Primary content in *NewsBlockFirst → Default → Primary*
 */
export interface NewsBlockFirstSliceDefaultPrimary {
  /**
   * newsBlockTitleFirst field in *NewsBlockFirst → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Renseignez le titre de votre news
   * - **API ID Path**: news_block_first.default.primary.newsblocktitlefirst
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  newsblocktitlefirst: prismic.KeyTextField;

  /**
   * newsBlockDescriptionFirst field in *NewsBlockFirst → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Renseigner la description de votre news
   * - **API ID Path**: news_block_first.default.primary.newsblockdescriptionfirst
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  newsblockdescriptionfirst: prismic.KeyTextField;

  /**
   * newsBlockVideoIframe field in *NewsBlockFirst → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Renseigner le code d'intégration de votre vidéo
   * - **API ID Path**: news_block_first.default.primary.newsblockvideoiframe
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  newsblockvideoiframe: prismic.KeyTextField;

  /**
   * newsBlockTitleFirstDemo field in *NewsBlockFirst → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_block_first.default.primary.newsblocktitlefirstdemo
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  newsblocktitlefirstdemo: prismic.RichTextField;
}

/**
 * Default variation for NewsBlockFirst Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsBlockFirstSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NewsBlockFirstSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NewsBlockFirst*
 */
type NewsBlockFirstSliceVariation = NewsBlockFirstSliceDefault;

/**
 * NewsBlockFirst Shared Slice
 *
 * - **API ID**: `news_block_first`
 * - **Description**: NewsBlockFirst
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsBlockFirstSlice = prismic.SharedSlice<
  "news_block_first",
  NewsBlockFirstSliceVariation
>;

/**
 * Primary content in *NewsBlockSecond → Default → Primary*
 */
export interface NewsBlockSecondSliceDefaultPrimary {
  /**
   * newsBlockTitleSecond field in *NewsBlockSecond → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Renseigner le titre de votre news numéro 2
   * - **API ID Path**: news_block_second.default.primary.newsblocktitlesecond
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  newsblocktitlesecond: prismic.KeyTextField;

  /**
   * newsBlockDescriptionSecond field in *NewsBlockSecond → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Renseigner la description de votre news numéro 2
   * - **API ID Path**: news_block_second.default.primary.newsblockdescriptionsecond
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  newsblockdescriptionsecond: prismic.KeyTextField;

  /**
   * newsBlockVideoIframeSecond field in *NewsBlockSecond → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Renseigner l'URL de votre news numéro 2
   * - **API ID Path**: news_block_second.default.primary.newsblockvideosecond
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  newsblockvideosecond: prismic.KeyTextField;
}

/**
 * Default variation for NewsBlockSecond Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsBlockSecondSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NewsBlockSecondSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NewsBlockSecond*
 */
type NewsBlockSecondSliceVariation = NewsBlockSecondSliceDefault;

/**
 * NewsBlockSecond Shared Slice
 *
 * - **API ID**: `news_block_second`
 * - **Description**: NewsBlockSecond
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsBlockSecondSlice = prismic.SharedSlice<
  "news_block_second",
  NewsBlockSecondSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      DerbysDocument,
      DerbysDocumentData,
      DerbysDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      AllDocumentTypes,
      DerbyMagazineSlice,
      DerbyMagazineSliceDefaultPrimary,
      DerbyMagazineSliceVariation,
      DerbyMagazineSliceDefault,
      NewsBlockFirstSlice,
      NewsBlockFirstSliceDefaultPrimary,
      NewsBlockFirstSliceVariation,
      NewsBlockFirstSliceDefault,
      NewsBlockSecondSlice,
      NewsBlockSecondSliceDefaultPrimary,
      NewsBlockSecondSliceVariation,
      NewsBlockSecondSliceDefault,
    };
  }
}
