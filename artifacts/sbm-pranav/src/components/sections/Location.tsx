import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Ship, Truck, MapPin } from "lucide-react";

import airportMap  from "@assets/Airport_2_SP_1779555831216.png";
import harbourMap  from "@assets/Harbour_2_SP_1779555831220.png";
import tvlMap      from "@assets/Tvl_2_SP_(1)_1779555831219.png";

const LOCATION_CARDS = [
  {
    icon: Plane,
    title: "Airport Connectivity",
    desc: "1 KM from Tuticorin Airport. Fast access for corporate travel, logistics, and business expansion.",
  },
  {
    icon: Ship,
    title: "Harbour Connectivity",
    desc: "20 KM from Harbour. Ideal for import/export, industrial operations, and supply chain businesses.",
  },
  {
    icon: Truck,
    title: "Highway Frontage",
    desc: "400 ft road-facing visibility. Prime commercial accessibility on National Highway.",
  },
  {
    icon: MapPin,
    title: "Toll Plaza Proximity",
    desc: "Adjacent to Vagaikulam Toll. Perfect for logistics hubs, fleet movement, and transit businesses.",
  },
] as const;

const MAP_TABS = [
  { label: "Airport",     dist: "1 km",  img: airportMap,  alt: "Route map from SBM Pranav site to Tuticorin Airport — 1 km" },
  { label: "Harbour",     dist: "20 km", img: harbourMap,  alt: "Route map from SBM Pranav site to Tuticorin Harbour — 20 km" },
  { label: "Tirunelveli", dist: "30 km", img: tvlMap,       alt: "Route map from SBM Pranav site to Tirunelveli — 30 km" },
] as const;

export default function Location() {
  const [active, setActive] = useState(0);

  return (
    <section id="location" aria-labelledby="location-heading" className="py-14 md:py-20 bg-card relative">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative z-10 px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center space-x-3 mb-3" aria-hidden="true">
            <div className="h-[2px] w-8 bg-primary" />
            <span className="text-primary font-bold uppercase tracking-widest text-xs">Connectivity</span>
            <div className="h-[2px] w-8 bg-primary" />
          </div>
          <h2 id="location-heading" className="font-serif text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Unmatched Location Advantage
          </h2>
          <p className="text-muted-foreground font-light">
            The true value of commercial land is dictated by its connectivity. SBM-Pranav sits at
            the exact intersection of air, sea, and land transit routes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {LOCATION_CARDS.map(({ icon: Icon, title, desc }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-background border border-border hover:border-primary/60 p-6 transition-all duration-400 overflow-hidden"
              aria-label={title}
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full" aria-hidden="true" />
              <div className="bg-primary/10 w-14 h-14 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-400">
                <Icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">{desc}</p>
            </motion.article>
          ))}
        </div>

        {/* Map tabs + image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-background border border-border overflow-hidden"
        >
          {/* Tab bar */}
          <div className="flex border-b border-border">
            {MAP_TABS.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className={`flex-1 flex flex-col items-center gap-0.5 py-3 px-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 relative
                  ${active === i
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
              >
                {active === i && (
                  <motion.div layoutId="map-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
                <span>{tab.label}</span>
                <span className={`text-[10px] font-normal ${active === i ? "text-primary" : "text-muted-foreground/70"}`}>{tab.dist}</span>
              </button>
            ))}
          </div>

          {/* Map image */}
          <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={MAP_TABS[active].img}
                alt={MAP_TABS[active].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
