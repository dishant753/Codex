import Image from "next/image";
import SectionHeading from "../../../components/SectionHeading";
import PrimaryButton from "../../../components/PrimaryButton";

export const metadata = {
  title: "Prem Industries | Industries",
  description: "Industries supported with injection molding expertise.",
};

const industries = [
  {
    title: "Automotive",
    bullets: ["Clips, housings, brackets", "Heat and vibration resistance", "High-volume PPAP workflows"],
    image: "/images/products/product-2.jpg",
  },
  {
    title: "Medical",
    bullets: ["Device housings and disposables", "Clean room compatible practices", "Traceability & documentation"],
    image: "/images/products/product-3.jpg",
  },
  {
    title: "Electronics",
    bullets: ["Enclosures and connectors", "EMI considerations", "Tight tolerance fits"],
    image: "/images/products/product-4.jpg",
  },
  {
    title: "Packaging",
    bullets: ["Caps, closures, dispensers", "Food-grade materials", "High-cavitation tooling"],
    image: "/images/products/product-5.jpg",
  },
  {
    title: "Consumer",
    bullets: ["Handles, knobs, accessories", "Soft-touch overmolds", "Color consistency"],
    image: "/images/products/product-6.jpg",
  },
  {
    title: "Industrial",
    bullets: ["Functional parts", "Impact and chemical resistance", "Low-maintenance tooling"],
    image: "/images/products/product-7.jpg",
  },
];

export default function IndustriesPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="container-base">
          <SectionHeading
            eyebrow="Industries"
            title="Industries We Support"
            description="Application expertise across regulated and high-volume manufacturing sectors."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base space-y-10">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={`grid gap-6 rounded-2xl border border-ui-border bg-ui-s1 p-6 md:grid-cols-2 md:items-center ${
                index % 2 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-56 overflow-hidden rounded-xl">
                <Image src={industry.image} alt={industry.title} fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <h3 className="heading-font text-2xl font-semibold text-ui-text">{industry.title}</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm text-ui-muted">
                  {industry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base">
          <div className="card-base gradient-border flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-red">Tell us more</p>
              <h3 className="heading-font text-2xl font-semibold text-ui-text">
                Tell us your requirement
              </h3>
            </div>
            <PrimaryButton href="/contact">Share Requirements</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
