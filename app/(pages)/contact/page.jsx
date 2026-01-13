import SectionHeading from "../../../components/SectionHeading";
import ContactForm from "../../../components/ContactForm";
import PrimaryButton from "../../../components/PrimaryButton";

export const metadata = {
  title: "Prem Industries | Contact",
  description: "Request a quote or share project requirements.",
};

const checklist = [
  "Drawing",
  "Quantity",
  "Material",
  "Color",
  "Insert/Overmold",
  "Tolerance",
];

export default function ContactPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="container-base">
          <SectionHeading
            eyebrow="Contact"
            title="Get a Quote / Contact"
            description="Tell us about your part and expected volumes. We'll respond within 24–48 hours."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <div className="space-y-6">
            <div className="card-base space-y-4 p-6">
              <PrimaryButton className="w-full justify-center">WhatsApp</PrimaryButton>
              <div className="text-sm text-ui-muted">
                <p>Phone: +91 90000 00000</p>
                <p>Email: sales@premindustries.com</p>
                <p>Prem Industries, Industrial Zone, Pune, India</p>
              </div>
            </div>
            <div className="card-base p-6">
              <p className="text-sm font-semibold text-ui-text">Map Placeholder</p>
              <div className="mt-4 h-48 rounded-xl border border-ui-border bg-ui-s2" />
            </div>
            <div className="card-base p-6">
              <p className="text-sm font-semibold text-ui-text">RFQ Checklist</p>
              <ul className="mt-4 grid gap-2 text-sm text-ui-muted">
                {checklist.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
