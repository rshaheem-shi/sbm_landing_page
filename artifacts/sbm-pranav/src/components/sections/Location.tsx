import { motion } from "framer-motion";
import { Plane, Ship, Truck, MapPin } from "lucide-react";
import { GOLD, MAROON } from "@/lib/constants";

const LOCATION_CARDS = [
  {
    icon: Plane,
    title: "Airport Connectivity",
    desc: "1–2 KM from Tuticorin Airport. Fast access for corporate travel, logistics, and business expansion.",
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

export default function Location() {
  return (
    <section id="location" aria-labelledby="location-heading" className="py-14 md:py-20 bg-card relative">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative z-10 px-6">
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
              <div
                className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full"
                aria-hidden="true"
              />
              <div className="bg-primary/10 w-14 h-14 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-400">
                <Icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">{desc}</p>
            </motion.article>
          ))}
        </div>

        {/* Schematic map visualisation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full h-64 md:h-80 bg-background border border-border relative overflow-hidden flex items-center justify-center"
          aria-label="Schematic connectivity map showing SBM Pranav site in relation to Airport, Harbour, and Vagaikulam Toll"
          role="img"
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
            aria-hidden="true"
          />
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              d="M 200 160 Q 360 60 500 160 T 800 100"
              fill="transparent"
              stroke={GOLD}
              strokeWidth="2"
              strokeDasharray="8,5"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
              d="M 500 160 Q 620 260 800 220"
              fill="transparent"
              stroke={GOLD}
              strokeWidth="2"
              strokeDasharray="8,5"
            />
          </svg>

          <div className="absolute left-[20%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div
              className="w-3.5 h-3.5 rounded-full animate-pulse"
              style={{ background: GOLD, boxShadow: `0 0 14px ${GOLD}` }}
            />
            <span
              className="mt-1.5 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 bg-background border border-border"
              style={{ color: GOLD }}
            >
              Airport
            </span>
          </div>

          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
            <div
              className="w-5 h-5 border-2 flex items-center justify-center shadow-md"
              style={{ borderColor: GOLD, background: "white" }}
            >
              <div className="w-2 h-2" style={{ background: GOLD }} />
            </div>
            <span className="mt-2 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 bg-background border border-border text-foreground">
              SBM PRANAV
            </span>
          </div>

          <div className="absolute left-[80%] top-[32%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div
              className="w-3 h-3 border"
              style={{ borderColor: GOLD, background: "rgba(201,162,39,0.2)" }}
            />
            <span className="mt-1.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase px-1 bg-background">
              Harbour 20km
            </span>
          </div>

          <div className="absolute left-[80%] top-[68%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div
              className="w-3 h-3 border"
              style={{ borderColor: MAROON, background: "rgba(115,28,28,0.15)" }}
            />
            <span className="mt-1.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase px-1 bg-background">
              Vagaikulam Toll
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
