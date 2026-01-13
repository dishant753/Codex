import Link from "next/link";

const baseClasses =
  "inline-flex items-center justify-center rounded-full border border-ui-border px-5 py-2.5 text-sm font-semibold tracking-wide text-ui-text transition hover:border-brand-navy2 hover:bg-ui-s1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy2";

export default function SecondaryButton({ href, children, className = "", type = "button", onClick }) {
  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}
