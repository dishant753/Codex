import Image from "next/image";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import SectionHeading from "../components/SectionHeading";
import StatCard from "../components/StatCard";
import FeatureCard from "../components/FeatureCard";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import ParallaxImage from "../components/ParallaxImage";
import { capabilities, facilityImages, industryList, productImages, qcPoints, stats } from "../lib/data";
import {
  Boxes,
  Factory,
  PackageCheck,
  ShieldCheck,
  Stethoscope,
  Truck,
  Wrench,
  Layers,
} from "lucide-react";

const capabilityIcons = [Wrench, Layers, Boxes, PackageCheck];

export const metadata = {
  title: "Prem Industries | Home",
  description: "Precision injection moulding for high-volume production.",
};

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden pb-16 pt-10">
        <div className="noise-overlay" />
        <div className="container-base grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">
                Premium Industrial Partner
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="heading-font text-4xl font-semibold text-ui-text md:text-5xl">
                Precision Injection Moulding for High-Volume Production
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted max-w-xl text-lg">
                Tooling, molding, assembly, and quality — under one roof.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton href="/contact">Get a Quote</PrimaryButton>
                <SecondaryButton href="/capabilities">Download Capability Deck</SecondaryButton>
              </div>
            </Reveal>
          </div>
          <div className="relative h-[320px] overflow-hidden rounded-2xl border border-ui-border bg-ui-s1 shadow-soft md:h-[420px]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/images/hero/hero-poster.jpg"
            >
              <source src="/videos/hero-loop.mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base">
          <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <StatCard value={stat.value} label={stat.label} suffix={stat.suffix} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base space-y-10">
          <SectionHeading
            eyebrow="Capabilities"
            title="Full-stack manufacturing expertise"
            description="From tooling to assembly, our teams deliver high-volume programs with traceable quality controls."
          />
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index];
              return (
                <StaggerItem key={capability.title}>
                  <FeatureCard title={capability.title} description={capability.description} icon={Icon} />
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base space-y-10">
          <SectionHeading
            eyebrow="Products"
            title="High-volume components, built for reliability"
            description="A preview of precision components produced across multiple industries."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productImages.slice(0, 12).map((item) => (
              <div key={item.id} className="card-base overflow-hidden">
                <div className="relative h-40">
                  <Image src={item.images[0]} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-ui-text">{item.title}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-ui-muted">{item.industry}</p>
                </div>
              </div>
            ))}
          </div>
          <SecondaryButton href="/products">View All Products</SecondaryButton>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base space-y-10">
          <SectionHeading
            eyebrow="Industries"
            title="Trusted across regulated and high-performance sectors"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industryList.map((industry, index) => {
              const icons = [Factory, Stethoscope, Layers, PackageCheck, Boxes, Truck];
              const Icon = icons[index];
              return (
                <div key={industry} className="card-base flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ui-s2 text-brand-red">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ui-text">{industry}</p>
                    <p className="text-xs text-ui-muted">Precision components</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base space-y-10">
          <SectionHeading
            eyebrow="Quality"
            title="Quality systems that scale with your program"
            description="Inspection and traceability built into every production run."
          />
          <div className="flex flex-wrap gap-4">
            {["ISO 9001", "IATF 16949", "ISO 13485"].map((badge) => (
              <div key={badge} className="rounded-full border border-ui-border px-4 py-2 text-xs text-ui-muted">
                {badge} (available on request)
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {qcPoints.map((point) => (
              <div key={point} className="card-base flex items-center gap-3 p-4">
                <ShieldCheck className="h-5 w-5 text-brand-red" />
                <p className="text-sm text-ui-text">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base space-y-10">
          <SectionHeading
            eyebrow="Facility"
            title="Visual proof from our production floor"
            description="A glimpse into our machining, molding, and QA environments."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {facilityImages.map((image) => (
              <ParallaxImage key={image.src} src={image.src} alt={image.alt} height={240} />
            ))}
          </div>
          <SecondaryButton href="/facility">Take a Virtual Tour</SecondaryButton>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base">
          <div className="card-base gradient-border flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-red">Ready to build</p>
              <h3 className="heading-font text-2xl font-semibold text-ui-text">
                Share your drawing — get a quote in 24–48 hours
              </h3>
            </div>
            <PrimaryButton href="/contact">Get a Quote</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
