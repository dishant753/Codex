import SectionHeading from "../../../components/SectionHeading";
import VideoCard from "../../../components/VideoCard";
import ParallaxImage from "../../../components/ParallaxImage";
import { videos } from "../../../lib/data";

export const metadata = {
  title: "Prem Industries | Videos",
  description: "Production floor videos and proof of capability.",
};

export default function VideosPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            eyebrow="Videos"
            title="Inside the Production Floor"
            description="A short library of manufacturing proof points."
          />
          <ParallaxImage src="/images/hero/hero-poster.jpg" alt="Video hero" height={340} priority />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </div>
      </section>
    </div>
  );
}
