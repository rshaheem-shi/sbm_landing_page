import { useLocation } from "wouter";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Download, MessageSquare, Map, Globe, TrendingUp, ChevronDown, Plane, Ship, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/useScrollTo";
import { WA_LINK } from "@/lib/constants";
import sitePhoto from "@assets/magnific_vuRoQ8xa47_(1)_1779344385534.png";

const PILLS = [
  { icon: Map,        label: "2.5 Acre Land" },
  { icon: Globe,      label: "400 Ft Frontage" },
  { icon: Plane,      label: "1–2 KM Airport" },
  { icon: Ship,       label: "20 KM Harbour" },
  { icon: MapPin,     label: "Vagaikulam Toll" },
  { icon: TrendingUp, label: "High Appreciation" },
] as const;

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.13 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 16 } },
};

export default function Hero() {
  const [, navigate] = useLocation();
  const { scrollY } = useScroll();
  const scrollTo = useScrollTo();

  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0]);

  return (
    <section
      aria-label="Hero — Premium Commercial Infrastructure Investment"
      className="relative h-[100dvh] flex items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: heroY, opacity: heroOpacity }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <img
          src={sitePhoto}
          alt="SBM Pranav commercial land aerial view"
          className="w-full h-full object-cover object-center scale-105"
          fetchPriority="high"
          loading="eager"
        />
      </motion.div>

      <div className="container relative z-20 px-6 pt-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="flex items-center space-x-3 mb-4">
            <div className="h-[2px] w-8 bg-primary" aria-hidden="true" />
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              Prime Commercial Asset · Tuticorin
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 text-white"
          >
            Premium Commercial Infrastructure{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">
              Investment Opportunity
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base text-white/80 font-light mb-6 max-w-xl leading-relaxed border-l-2 border-primary/60 pl-4"
          >
           Strategically located 400 ft frontage property beside Vagaikulam Toll Plaza, offering excellent connectivity to Tuticorin Airport and VOC Port.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8" role="list" aria-label="Key property highlights">
            {PILLS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                role="listitem"
                className="flex items-center space-x-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full"
              >
                <Icon className="w-3 h-3 text-primary" aria-hidden="true" />
                <span className="text-[11px] font-medium text-white uppercase tracking-wider whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => scrollTo("contact")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 text-sm font-semibold rounded-none shadow-[0_0_28px_rgba(201,162,39,0.35)]"
            >
              Schedule Site Visit <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 h-12 px-7 text-sm font-semibold rounded-none bg-transparent"
              onClick={() => window.open(WA_LINK, "_blank", "noopener,noreferrer")}
              aria-label="WhatsApp consultation — opens in new tab"
            >
              <MessageSquare className="mr-2 w-4 h-4" aria-hidden="true" /> WhatsApp
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white/80 hover:bg-white/10 h-12 px-7 text-sm font-semibold rounded-none"
              onClick={() => navigate("/brochure")}
              aria-label="View investment brochure"
            >
              <Download className="mr-2 w-4 h-4" aria-hidden="true" /> Brochure
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/40 cursor-pointer hover:text-white/70 transition-colors"
        onClick={() => scrollTo("location")}
        aria-label="Scroll to Location section"
      >
        <ChevronDown className="w-7 h-7" aria-hidden="true" />
      </motion.button>
    </section>
  );
}
