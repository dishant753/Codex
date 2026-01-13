import { ArrowUpRight } from "lucide-react";

export default function FeatureCard({ title, description, icon }) {
  const Icon = icon;
  return (
    <div className="card-base gradient-border flex h-full flex-col gap-4 p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ui-s2 text-brand-red">
        {Icon ? <Icon className="h-6 w-6" aria-hidden /> : null}
      </div>
      <div className="space-y-2">
        <h3 className="heading-font text-xl font-semibold text-ui-text">{title}</h3>
        {description ? <p className="text-muted text-sm leading-relaxed">{description}</p> : null}
      </div>
      <div className="mt-auto flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ui-muted">
        Explore <ArrowUpRight className="h-4 w-4" aria-hidden />
      </div>
    </div>
  );
}
