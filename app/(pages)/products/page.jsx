import SectionHeading from "../../../components/SectionHeading";
import GalleryGrid from "../../../components/GalleryGrid";
import ParallaxImage from "../../../components/ParallaxImage";
import { filterChips, productImages } from "../../../lib/data";

export const metadata = {
  title: "Prem Industries | Products",
  description: "Explore high-volume injection molded components across industries.",
};

export default function ProductsPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            eyebrow="Products"
            title="Products & Components"
            description="Over 50 production-proven components across regulated and high-performance sectors."
          />
          <ParallaxImage src="/images/products/product-1.jpg" alt="Product hero" height={340} priority />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base">
          <GalleryGrid items={productImages} filters={filterChips} />
        </div>
      </section>
    </div>
  );
}
