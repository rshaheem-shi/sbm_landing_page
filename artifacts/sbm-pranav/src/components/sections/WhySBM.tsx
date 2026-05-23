import { motion } from "framer-motion";
import { MapPin, Globe, TrendingUp, Scale, Activity, Shield } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { GOLD } from "@/lib/constants";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const FEATURES: Feature[] = [
  {
    icon: MapPin,
    title: "Strategic Location",
    desc: "Dead center between the airport, harbour, and major toll plazas.",
  },
  {
    icon: Globe,
    title: "High Visibility Frontage",
    desc: "400ft directly facing the National Highway for unmatched brand exposure.",
  },
  {
    icon: TrendingUp,
    title: "Future Growth Corridor",
    desc: "Positioned in a government-backed industrial expansion zone.",
  },
  {
    icon: Scale,
    title: "Commercial Scalability",
    desc: "2.5 contiguous acres allows for massive, multi-phase developments.",
  },
  {
    icon: Activity,
    title: "Infrastructure Connectivity",
    desc: "Instant access to power grids, heavy transit roads, and utilities.",
  },
  {
    icon: Shield,
    title: "Long-Term Value",
    desc: "A generational asset with clear title and zero encumbrances.",
  },
];

export default function WhySBM() {
  return (
    <section id="why" aria-labelledby="why-heading" className="py-14 md:py-20 bg-card">
      <div className="container px-6">
        <div className="text-center mb-10">
          <h2 id="why-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
            Why SBM-Pranav Stands Apart
          </h2>
          <div className="h-[2px] w-16 mx-auto mt-3" style={{ background: GOLD }} aria-hidden="true" />
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" aria-label="Key differentiators">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start"
            >
              <div
                className="mt-0.5 mr-3 shrink-0 p-2 rounded bg-primary/10"
                aria-hidden="true"
              >
                <Icon className="w-5 h-5" style={{ color: GOLD }} />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1 font-serif">{title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
