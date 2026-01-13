"use client";

import { PlayCircle } from "lucide-react";

export default function VideoCard({ title, description, duration, poster, src }) {
  return (
    <div className="card-base overflow-hidden">
      <div className="relative">
        <video
          className="h-48 w-full object-cover"
          poster={poster}
          preload="metadata"
          muted
          playsInline
        >
          {src ? <source src={src} /> : null}
        </video>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <PlayCircle className="h-10 w-10 text-ui-text" aria-hidden />
        </div>
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-ui-muted">
          <span>{duration}</span>
        </div>
        <h3 className="heading-font text-lg font-semibold text-ui-text">{title}</h3>
        {description ? <p className="text-muted text-sm leading-relaxed">{description}</p> : null}
      </div>
    </div>
  );
}
