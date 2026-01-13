import SectionHeading from "../../../components/SectionHeading";
import PrimaryButton from "../../../components/PrimaryButton";
import ParallaxImage from "../../../components/ParallaxImage";
import TimelineProcess from "../../../components/TimelineProcess";
import { capabilities } from "../../../lib/data";

export const metadata = {
  title: "Prem Industries | Capabilities",
  description: "Tooling, injection molding, insert molding, and secondary operations.",
};

const materials = ["ABS", "PP", "PC", "Nylon", "POM", "TPE", "HDPE", "PVC"];

export default function CapabilitiesPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Capabilities"
              title="Manufacturing depth across the molding lifecycle"
              description="Engineering support, production scale, and post-mold services delivered under one roof."
            />
          </div>
          <ParallaxImage src="/images/hero/hero-poster.jpg" alt="Capabilities hero" height={360} priority />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base space-y-8">
          {capabilities.concat([
            { title: "Secondary Ops", description: "Welding, printing, and assembly for ready-to-ship parts." },
            { title: "Packaging & Dispatch", description: "Labeling, kitting, and dispatch aligned with your line-side needs." },
          ]).map((capability) => (
            <div key={capability.title} className="card-base p-6">
              <h3 className="heading-font text-xl font-semibold text-ui-text">{capability.title}</h3>
              <p className="text-muted mt-2 text-sm">{capability.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base space-y-6">
          <SectionHeading
            eyebrow="How it Works"
            title="Clamp → Inject → Cool → Eject"
            description="A consistent process flow optimized for reliability and throughput."
          />
          <TimelineProcess />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base space-y-6">
          <SectionHeading
            eyebrow="Materials"
            title="Engineering-grade resins"
            description="Common thermoplastics available on request."
          />
          <div className="flex flex-wrap gap-3">
            {materials.map((material) => (
              <span key={material} className="rounded-full border border-ui-border px-4 py-2 text-xs text-ui-muted">
                {material}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base">
          <div className="card-base gradient-border flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-red">Next Step</p>
              <h3 className="heading-font text-2xl font-semibold text-ui-text">
                Request a manufacturing review
              </h3>
            </div>
            <PrimaryButton href="/contact">Request Review</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
