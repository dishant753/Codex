import SectionHeading from "../../../components/SectionHeading";
import PrimaryButton from "../../../components/PrimaryButton";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Prem Industries | Quality",
  description: "Quality systems, inspection, and compliance support.",
};

const qcCards = [
  "Incoming inspection",
  "In-process checks",
  "Dimensional inspection",
  "Traceability",
  "Final inspection + packing checks",
];

export default function QualityPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="container-base">
          <SectionHeading
            eyebrow="Quality"
            title="Quality That Scales"
            description="A disciplined quality system built for high-volume production and regulatory compliance."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base space-y-8">
          <div className="flex flex-wrap gap-3">
            {["ISO 9001", "IATF 16949", "ISO 13485"].map((badge) => (
              <span key={badge} className="rounded-full border border-ui-border px-4 py-2 text-xs text-ui-muted">
                {badge} (available on request)
              </span>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {qcCards.map((card) => (
              <div key={card} className="card-base flex items-center gap-3 p-5">
                <ShieldCheck className="h-5 w-5 text-brand-red" />
                <p className="text-sm text-ui-text">{card}</p>
              </div>
            ))}
          </div>
          <div className="card-base p-6">
            <h3 className="heading-font text-xl font-semibold text-ui-text">Process & Compliance</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ui-muted">
              <li>Documented SOPs</li>
              <li>Batch records (if applicable)</li>
              <li>Sampling plans (if applicable)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base">
          <div className="card-base gradient-border flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-red">Quality Review</p>
              <h3 className="heading-font text-2xl font-semibold text-ui-text">
                Request quality documents / audit discussion
              </h3>
            </div>
            <PrimaryButton href="/contact">Request Documents</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
