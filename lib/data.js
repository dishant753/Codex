export const stats = [
  { value: 38, label: "Presses", suffix: "" },
  { value: 90, label: "Ton Range", suffix: "–650" },
  { value: 24, label: "M+ Parts/Month", suffix: "" },
  { value: 120000, label: "Sq.ft Facility", suffix: "" },
];

export const capabilities = [
  {
    title: "Tooling & DFM",
    description: "Design for manufacturability support, mold flow insights, and rapid tooling iterations.",
  },
  {
    title: "Multi-cavity Production",
    description: "High-volume molding with optimized cycle times, consistent output, and reliable uptime.",
  },
  {
    title: "Insert & Overmolding",
    description: "Precision integration of metal or plastic inserts with tight tolerances.",
  },
  {
    title: "Assembly & Packaging",
    description: "Turnkey secondary operations including labeling, kitting, and line packing.",
  },
];

export const industryList = [
  "Automotive",
  "Medical",
  "Electronics",
  "Packaging",
  "Consumer",
  "Industrial",
];

export const qcPoints = [
  "Incoming material validation",
  "In-process dimensional checks",
  "Traceability and batch control",
  "Final inspection & packing audits",
];

export const facilityImages = Array.from({ length: 6 }).map((_, index) => ({
  src: `/images/facility/facility-${index + 1}.jpg`,
  alt: `Facility view ${index + 1}`,
}));

export const productImages = Array.from({ length: 60 }).map((_, index) => ({
  id: `product-${index + 1}`,
  title: `Component ${index + 1}`,
  industry: industryList[index % industryList.length],
  material: ["ABS", "PP", "PC", "Nylon", "POM"][index % 5],
  finish: ["Matte", "Texture", "Gloss", "Soft-touch"][index % 4],
  images: [
    `/images/products/product-${(index % 12) + 1}.jpg`,
    `/images/products/product-${(index % 12) + 2}.jpg`,
    `/images/products/product-${(index % 12) + 3}.jpg`,
  ],
}));

export const filterChips = ["All", ...industryList];

export const videos = [
  {
    title: "Factory overview",
    description: "A walk-through of the production floor and automation cells.",
    duration: "02:45",
    poster: "/images/hero/hero-poster.jpg",
    src: "/videos/factory-overview.mp4",
  },
  {
    title: "Molding cycle close-ups",
    description: "Precision cycles with multi-cavity tooling in action.",
    duration: "01:10",
    poster: "/images/hero/hero-poster.jpg",
    src: "/videos/molding-closeups.mp4",
  },
  {
    title: "Tool room & changeover",
    description: "Rapid mold changeovers and in-house tool maintenance.",
    duration: "01:55",
    poster: "/images/hero/hero-poster.jpg",
    src: "/videos/toolroom-changeover.mp4",
  },
  {
    title: "QC testing",
    description: "Dimensional inspection and quality assurance protocols.",
    duration: "01:30",
    poster: "/images/hero/hero-poster.jpg",
    src: "/videos/qc-testing.mp4",
  },
  {
    title: "Packing & dispatch",
    description: "Final packing, labeling, and dispatch workflows.",
    duration: "01:20",
    poster: "/images/hero/hero-poster.jpg",
    src: "/videos/packing-dispatch.mp4",
  },
];
