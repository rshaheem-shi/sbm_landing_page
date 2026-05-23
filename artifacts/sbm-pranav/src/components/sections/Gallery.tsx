import { motion } from "framer-motion";
import { GOLD } from "@/lib/constants";
import sitePhoto from "@assets/magnific_vuRoQ8xa47_(1)_1779344385534.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

interface GalleryImage {
  src: string;
  alt: string;
  label: string;
  span?: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  { src: sitePhoto, alt: "Aerial overview of the SBM Pranav commercial site", label: "SITE OVERVIEW",      span: "lg:col-span-2" },
  { src: gallery2,  alt: "National Highway access adjacent to the site",       label: "HIGHWAY ACCESS",    span: "" },
  { src: gallery3,  alt: "Proximity to Tuticorin Harbour",                     label: "HARBOUR PROXIMITY", span: "" },
  { src: gallery4,  alt: "Development-ready site layout",                      label: "DEVELOPMENT SITE",  span: "" },
  { src: gallery1,  alt: "Aerial perspective of surrounding infrastructure",   label: "AERIAL PERSPECTIVE",span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="py-14 bg-background">
      <div className="container px-6 mb-8">
        <h2 id="gallery-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
          See The Site
        </h2>
        <div className="h-[2px] w-16 mb-4" style={{ background: GOLD }} aria-hidden="true" />
        <p className="text-muted-foreground text-sm font-light max-w-xl">
          Premium commercial infrastructure set against the backdrop of rapid regional development.
        </p>
      </div>

      <ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1"
        aria-label="Site gallery"
      >
        {GALLERY_IMAGES.map(({ src, alt, label, span }, i) => (
          <motion.li
            key={label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative group aspect-[4/3] overflow-hidden ${span ?? ""}`}
          >
            <div
              className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors z-10"
              aria-hidden="true"
            />
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
              <span className="bg-white/90 backdrop-blur px-3 py-1 text-foreground text-xs font-bold tracking-widest border border-border/40">
                {label}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
