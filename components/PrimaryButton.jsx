import Link from "next/link";

const baseClasses =
  "inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold tracking-wide text-ui-text transition hover:bg-brand-red2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red2";

export default function PrimaryButton({ href, children, className = "", type = "button", onClick }) {
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
