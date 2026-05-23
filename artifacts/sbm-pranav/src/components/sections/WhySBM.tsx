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
    title: "Market Expertise",
    desc: "Over a decade of real estate experience with deep understanding of market trends, investment potential, and customer expectations.",
  },
  {
    icon: Globe,
    title: "Transparent Dealings",
    desc: "Clear communication, honest pricing, and complete process transparency that build long-term customer trust and confidence.",
  },
  {
    icon: TrendingUp,
    title: "Professional Guidance",
    desc: "Dedicated support from property selection to final registration, ensuring a smooth and hassle-free buying experience.",
  },
  {
    icon: Scale,
    title: "Verified Properties",
    desc: "Every project undergoes careful verification for legal clarity, documentation accuracy, and secure ownership assurance.",
  },
  {
    icon: Activity,
    title: "Customer Commitment",
    desc: "Focused on building lasting relationships through reliable service, responsive support, and customer-first business practices.",
  },
  {
    icon: Shield,
    title: "Strong Reputation",
    desc: "Known for credibility, consistency, and delivering valuable real estate opportunities trusted by buyers and investors alike.",
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
