import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DerbyMagazine`.
 */
export type DerbyMagazineProps =
  SliceComponentProps<Content.DerbyMagazineSlice>;

/**
 * Component for "DerbyMagazine" Slices.
 */
const DerbyMagazine: FC<DerbyMagazineProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for derby_magazine (variation: {slice.variation})
      Slices
    </section>
  );
};

export default DerbyMagazine;
