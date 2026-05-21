import { Factory, Truck, Building, Globe, Hotel, Anchor } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface InvestorType {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const INVESTOR_TYPES: InvestorType[] = [
  { icon: Factory,  title: "Industrial Investors", desc: "Large footprint for heavy setup." },
  { icon: Truck,    title: "Logistics Companies",  desc: "Highway and port proximity." },
  { icon: Building, title: "Corporate Developers", desc: "Grade-A office or retail." },
  { icon: Globe,    title: "NRIs",                 desc: "High-appreciation Indian assets." },
  { icon: Hotel,    title: "Commercial Builders",  desc: "Hospitality & transit infrastructure." },
  { icon: Anchor,   title: "Supply Chain Firms",   desc: "Staging areas near the harbour." },
];

export default function Investors() {
  return (
    <section id="investors" aria-labelledby="investors-heading" className="py-14 bg-background border-y border-border">
      <div className="container px-6">
        <div className="text-center mb-10">
          <h2 id="investors-heading" className="font-serif text-3xl font-bold text-foreground mb-2">
            Who This Is Built For
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Strategic buyers seeking high-leverage positions in Tamil Nadu's industrial growth corridor.
          </p>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4" aria-label="Target investor profiles">
          {INVESTOR_TYPES.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="bg-card p-5 border border-border hover:border-primary/50 transition-all group text-center flex flex-col items-center"
            >
              <div className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center mb-3 text-primary group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-foreground font-bold text-sm mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
