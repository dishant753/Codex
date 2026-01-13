"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function LightboxModal({ item, onClose }) {
  const [index, setIndex] = useState(0);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "Tab") {
        const focusable = modalRef.current.querySelectorAll(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const images = item?.images || [];
  const current = images[index] || images[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-ui-border bg-ui-s1 shadow-soft"
        role="dialog"
        aria-modal="true"
        aria-label={`${item.title} details`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-ui-border bg-ui-bg/80 p-2 text-ui-text"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[320px]">
            {current ? (
              <Image src={current} alt={item.title} fill className="object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center bg-ui-s2 text-ui-muted">
                Image placeholder
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-between px-3">
              <button
                type="button"
                onClick={() => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                className="rounded-full border border-ui-border bg-ui-bg/80 p-2 text-ui-text"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                className="rounded-full border border-ui-border bg-ui-bg/80 p-2 text-ui-text"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="space-y-4 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ui-muted">Component</p>
              <h3 className="heading-font text-2xl font-semibold text-ui-text">{item.title}</h3>
            </div>
            <ul className="space-y-2 text-sm text-ui-muted">
              <li>Material: {item.material}</li>
              <li>Finish: {item.finish}</li>
              <li>Industry: {item.industry}</li>
            </ul>
            <PrimaryButton href="/contact" className="w-full justify-center">
              Request Similar Part
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
