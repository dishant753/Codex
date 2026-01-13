export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`space-y-3 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="heading-font text-3xl font-semibold text-ui-text md:text-4xl">
        {title}
      </h2>
      {description ? <p className="text-muted max-w-2xl text-base md:text-lg">{description}</p> : null}
    </div>
  );
}
