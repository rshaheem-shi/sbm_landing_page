import { motion } from "framer-motion";
import { Truck, Factory, Hotel, Building, BatteryCharging, Briefcase, ArrowRight, ArrowUpRight } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { useScrollTo } from "@/hooks/useScrollTo";

interface UseCase {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const USE_CASES: UseCase[] = [
  { icon: Truck,          title: "Logistics Park",      desc: "Port-to-airport transit routes" },
  { icon: Factory,        title: "Warehouse Hub",       desc: "2.5 acre storage facilities" },
  { icon: Hotel,          title: "Business Hotel",      desc: "Airport corporate transit" },
  { icon: Building,       title: "Commercial Complex",  desc: "400ft highway frontage visibility" },
  { icon: Factory,        title: "Industrial Yard",     desc: "Heavy machinery & export staging" },
  { icon: BatteryCharging, title: "EV Charging Hub",   desc: "Highway fleet charging" },
  { icon: Briefcase,      title: "Corporate Office",    desc: "Headquarters for maritime firms" },
];

export default function UseCases() {
  const scrollTo = useScrollTo();

  return (
    <section id="usecases" aria-labelledby="usecases-heading" className="py-14 md:py-20 bg-background border-y border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div className="max-w-xl">
            <div className="flex items-center space-x-3 mb-3" aria-hidden="true">
              <div className="h-[1px] w-7 bg-primary" />
              <span className="text-primary tracking-widest text-xs uppercase font-bold">Endless Potential</span>
            </div>
            <h2 id="usecases-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Ideal For High-Return Commercial Ventures
            </h2>
          </div>
          <p className="text-muted-foreground text-sm font-light max-w-xs md:text-right border-r-2 border-primary/30 pr-4">
            Zoned and positioned for massive infrastructural developments.
          </p>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" aria-label="Commercial use cases">
          {USE_CASES.map(({ icon: Icon, title, desc }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-5 bg-card border border-border hover:border-primary transition-colors cursor-default flex flex-col"
            >
              <div className="mb-4 p-3 bg-background inline-block text-primary border border-border group-hover:bg-primary group-hover:text-background transition-colors w-fit">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-serif font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground text-xs mt-auto leading-relaxed">{desc}</p>
              <div
                className="mt-4 flex items-center text-primary text-xs font-bold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                aria-hidden="true"
              >
                High ROI <ArrowUpRight className="ml-1 w-3 h-3" />
              </div>
            </motion.li>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="p-5 bg-primary text-primary-foreground flex flex-col items-center justify-center text-center cursor-pointer hover:bg-primary/90 transition-colors"
            onClick={() => scrollTo("contact")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && scrollTo("contact")}
            aria-label="Custom requirement — consult us now"
          >
            <h3 className="text-base font-serif font-bold mb-2">Custom requirement?</h3>
            <p className="text-primary-foreground/80 text-xs mb-4">Discuss zoning and build potential.</p>
            <span className="font-bold border-b border-primary-foreground/40 pb-0.5 flex items-center text-sm">
              Consult Now <ArrowRight className="ml-1.5 w-4 h-4" aria-hidden="true" />
            </span>
          </motion.div>
        </ul>
      </div>
    </section>
  );
}
