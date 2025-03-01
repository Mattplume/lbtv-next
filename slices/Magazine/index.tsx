import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Magazine`.
 */
export type MagazineProps = SliceComponentProps<Content.MagazineSlice>;

/**
 * Component for "Magazine" Slices.
 */
const Magazine: FC<MagazineProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for magazine (variation: {slice.variation}) Slices
    </section>
  );
};

export default Magazine;
