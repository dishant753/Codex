import SectionHeading from "../../../components/SectionHeading";
import PrimaryButton from "../../../components/PrimaryButton";
import ParallaxImage from "../../../components/ParallaxImage";
import StatCard from "../../../components/StatCard";
import { facilityImages } from "../../../lib/data";

export const metadata = {
  title: "Prem Industries | Facility",
  description: "Facility, machine park, and production flow.",
};

const facilityStats = [
  { value: 38, label: "Presses" },
  { value: 90, label: "Tonnage Range", suffix: "–650" },
  { value: 3, label: "Shifts" },
  { value: 120000, label: "Floor Area", suffix: " sq.ft" },
];

const processFlow = ["Raw material", "Molding", "QC", "Assembly", "Packing", "Dispatch"];

export default function FacilityPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            eyebrow="Facility"
            title="Facility & Machine Park"
            description="Production, tooling, and QC zones designed for scale and compliance."
          />
          <ParallaxImage src="/images/facility/facility-1.jpg" alt="Facility hero" height={360} priority />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {facilityStats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base space-y-8">
          <SectionHeading
            eyebrow="Gallery"
            title="Inside the production floor"
            description="Shopfloor, mold storage, QC labs, and packing lines."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {facilityImages.concat(facilityImages.slice(0, 3)).map((image, index) => (
              <ParallaxImage key={`${image.src}-${index}`} src={image.src} alt={image.alt} height={240} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base space-y-4">
          <SectionHeading
            eyebrow="Process Flow"
            title="Raw → Molding → QC → Assembly → Packing → Dispatch"
          />
          <div className="flex flex-wrap gap-3">
            {processFlow.map((step, index) => (
              <div key={step} className="card-base px-4 py-2 text-sm text-ui-text">
                {index + 1}. {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base">
          <div className="card-base gradient-border flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-red">Schedule</p>
              <h3 className="heading-font text-2xl font-semibold text-ui-text">Schedule a visit</h3>
            </div>
            <PrimaryButton href="/contact">Book a Visit</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
