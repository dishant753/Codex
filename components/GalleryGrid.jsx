"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import LightboxModal from "./LightboxModal";
import SecondaryButton from "./SecondaryButton";

export default function GalleryGrid({ items, filters }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const [selected, setSelected] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.industry === activeFilter);
  }, [activeFilter, items]);

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => {
              setActiveFilter(filter);
              setVisibleCount(12);
            }}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
              activeFilter === filter
                ? "border-brand-red bg-brand-red/20 text-ui-text"
                : "border-ui-border text-ui-muted hover:border-brand-navy2"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            className="group card-base overflow-hidden text-left transition hover:scale-[1.01]"
          >
            <div className="relative h-48">
              <Image src={item.images[0]} alt={item.title} fill className="object-cover" />
            </div>
            <div className="space-y-2 p-4">
              <h3 className="heading-font text-lg font-semibold text-ui-text">{item.title}</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-ui-muted">
                {item.material} · {item.finish} · {item.industry}
              </p>
            </div>
          </button>
        ))}
      </div>
      {visibleCount < filteredItems.length ? (
        <div className="flex justify-center">
          <SecondaryButton onClick={() => setVisibleCount((prev) => prev + 12)}>
            Load More
          </SecondaryButton>
        </div>
      ) : null}
      {selected ? <LightboxModal item={selected} onClose={() => setSelected(null)} /> : null}
    </div>
  );
}
