import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer
} from "recharts";
import {
  Menu, X, MapPin, Phone, Mail, ArrowRight, Download, MessageSquare,
  Plane, Ship, Truck, Map, Briefcase, Factory, BatteryCharging,
  Building, Hotel, Anchor, ArrowUpRight, CheckCircle2,
  TrendingUp, Activity, Users, Globe, Shield, Scale, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

import sitePhoto from "@assets/magnific_vuRoQ8xa47_(1)_1779327684220.png";
import logoImg from "@assets/SBM_Pranav_1779330703662.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.13 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 16 } }
};

const AnimatedCounter = ({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const step = end / (duration * 60);
      const update = () => {
        start += step;
        if (start < end) { setCount(Math.ceil(start)); requestAnimationFrame(update); }
        else setCount(end);
      };
      requestAnimationFrame(update);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const GOLD = "#C9A227";
const MAROON = "#731C1C";
const WA_LINK = `https://wa.me/918940089888?text=${encodeURIComponent("Hello, I am interested in knowing more about the property you posted. Could you please share the property details.")}`;

export default function LandingPage() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0]);

  useEffect(() => {
    const h = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Valid email is required"),
    company: z.string().optional(),
    interest: z.string().min(1, "Please select an interest"),
    message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", email: "", company: "", interest: "", message: "" },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const subject = encodeURIComponent(`SBM-Pranav Investment Inquiry — ${values.name}`);
    const body = encodeURIComponent(
      `New investor inquiry from the SBM-Pranav landing page:\n\n` +
      `Name: ${values.name}\n` +
      `Phone: ${values.phone}\n` +
      `Email: ${values.email}\n` +
      `Company: ${values.company || "—"}\n` +
      `Investment Interest: ${values.interest}\n\n` +
      `Message:\n${values.message || "—"}`
    );
    window.open(`mailto:rshaheem311@gmail.com?subject=${subject}&body=${body}`, "_blank");
    toast({ title: "Opening Email Client", description: "Your details are pre-filled — just hit Send." });
    form.reset();
  };

  const chartData = [
    { year: "2019", value: 100 },
    { year: "2020", value: 118 },
    { year: "2021", value: 145 },
    { year: "2022", value: 188 },
    { year: "2023", value: 248 },
    { year: "2024", value: 318 },
    { year: "2025", value: 425 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">

      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/96 backdrop-blur-md border-b border-border py-2 shadow-sm"
          : "bg-transparent py-3"
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <img
            src={logoImg}
            alt="SBM Pranav Property Developers"
            className="h-14 w-auto object-contain cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="logo"
          />

          <div className="hidden md:flex items-center space-x-7">
            {[["location","Location"],["usecases","Opportunities"],["investment","Investment"],["gallery","Gallery"]].map(([id,label]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium tracking-wide">
                {label}
              </button>
            ))}
            <Button onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5 rounded-none text-sm h-9">
              Schedule Visit
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} data-testid="mobile-menu-toggle">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden flex flex-col space-y-5 border-b border-border"
          >
            {[["location","Location Advantage"],["usecases","Commercial Use Cases"],["investment","Investment Potential"],["gallery","Site Gallery"]].map(([id,label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-base text-left text-muted-foreground hover:text-primary py-2 border-b border-border/50">{label}</button>
            ))}
            <Button onClick={() => scrollTo("contact")} className="bg-primary text-primary-foreground font-semibold py-5 w-full rounded-none mt-3">
              Schedule Site Visit
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section className="relative h-[100dvh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          <img src={sitePhoto} alt="SBM Pranav Commercial Land" className="w-full h-full object-cover object-center scale-105" />
        </motion.div>

        <div className="container relative z-20 px-6 pt-24">
          <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeUp} className="flex items-center space-x-3 mb-4">
              <div className="h-[2px] w-8 bg-primary" />
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Prime Commercial Asset · Tuticorin</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 text-white">
              Premium Commercial Infrastructure{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">Investment Opportunity</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base text-white/80 font-light mb-6 max-w-xl leading-relaxed border-l-2 border-primary/60 pl-4">
              Strategically positioned near Tuticorin Airport, Harbour Connectivity & National Highway Access. A ₹10Cr+ asset built for exponential appreciation.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
              {[
                { icon: <Map className="w-3 h-3"/>, text: "2.5 Acre Land" },
                { icon: <Globe className="w-3 h-3"/>, text: "400 Ft Frontage" },
                { icon: <Plane className="w-3 h-3"/>, text: "1–2 KM Airport" },
                { icon: <Ship className="w-3 h-3"/>, text: "20 KM Harbour" },
                { icon: <MapPin className="w-3 h-3"/>, text: "Vagaikulam Toll" },
                { icon: <TrendingUp className="w-3 h-3"/>, text: "High Appreciation" },
              ].map((s, i) => (
                <div key={i} className="flex items-center space-x-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
                  <span className="text-primary">{s.icon}</span>
                  <span className="text-[11px] font-medium text-white uppercase tracking-wider whitespace-nowrap">{s.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <Button onClick={() => scrollTo("contact")} size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 text-sm font-semibold rounded-none shadow-[0_0_28px_rgba(201,162,39,0.35)]">
                Schedule Site Visit <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline"
                className="border-white/50 text-white hover:bg-white/10 h-12 px-7 text-sm font-semibold rounded-none bg-transparent"
                onClick={() => window.open(WA_LINK, "_blank")}>
                <MessageSquare className="mr-2 w-4 h-4" /> WhatsApp
              </Button>
              <Button size="lg" variant="ghost"
                className="text-white/80 hover:bg-white/10 h-12 px-7 text-sm font-semibold rounded-none">
                <Download className="mr-2 w-4 h-4" /> Brochure
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/40 cursor-pointer"
          onClick={() => scrollTo("location")}
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </section>

      {/* ── SECTION 2 — LOCATION ── */}
      <section id="location" className="py-14 md:py-20 bg-card relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent pointer-events-none" />
        <div className="container relative z-10 px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <div className="h-[2px] w-8 bg-primary" />
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Connectivity</span>
              <div className="h-[2px] w-8 bg-primary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-foreground">Unmatched Location Advantage</h2>
            <p className="text-muted-foreground font-light">The true value of commercial land is dictated by its connectivity. SBM-Pranav sits at the exact intersection of air, sea, and land transit routes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {[
              { icon: <Plane className="w-7 h-7"/>, title: "Airport Connectivity", desc: "1–2 KM from Tuticorin Airport. Fast access for corporate travel, logistics, and business expansion." },
              { icon: <Ship className="w-7 h-7"/>, title: "Harbour Connectivity", desc: "20 KM from Harbour. Ideal for import/export, industrial operations, and supply chain businesses." },
              { icon: <Truck className="w-7 h-7"/>, title: "Highway Frontage", desc: "400 ft road-facing visibility. Prime commercial accessibility on National Highway." },
              { icon: <MapPin className="w-7 h-7"/>, title: "Toll Plaza Proximity", desc: "Adjacent to Vagaikulam Toll. Perfect for logistics hubs, fleet movement, and transit businesses." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-background border border-border hover:border-primary/60 p-6 transition-all duration-400 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full" />
                <div className="bg-primary/10 w-14 h-14 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Map Visualisation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-64 md:h-80 bg-background border border-border relative overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2 }}
                d="M 200 160 Q 360 60 500 160 T 800 100" fill="transparent" stroke={GOLD} strokeWidth="2" strokeDasharray="8,5" />
              <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5 }}
                d="M 500 160 Q 620 260 800 220" fill="transparent" stroke={GOLD} strokeWidth="2" strokeDasharray="8,5" />
            </svg>

            <div className="absolute left-[20%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-3.5 h-3.5 rounded-full animate-pulse" style={{ background: GOLD, boxShadow: `0 0 14px ${GOLD}` }} />
              <span className="mt-1.5 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 bg-background border border-border" style={{ color: GOLD }}>Airport</span>
            </div>

            <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
              <div className="w-5 h-5 border-2 flex items-center justify-center shadow-md" style={{ borderColor: GOLD, background: "white" }}>
                <div className="w-2 h-2" style={{ background: GOLD }} />
              </div>
              <span className="mt-2 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 bg-background border border-border text-foreground">SBM PRANAV</span>
            </div>

            <div className="absolute left-[80%] top-[32%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-3 h-3 border" style={{ borderColor: GOLD, background: "rgba(201,162,39,0.2)" }} />
              <span className="mt-1.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase px-1 bg-background">Harbour 20km</span>
            </div>

            <div className="absolute left-[80%] top-[68%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-3 h-3 border" style={{ borderColor: MAROON, background: "rgba(115,28,28,0.15)" }} />
              <span className="mt-1.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase px-1 bg-background">Vagaikulam Toll</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3 — USE CASES ── */}
      <section id="usecases" className="py-14 md:py-20 bg-background border-y border-border">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div className="max-w-xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-[1px] w-7 bg-primary" />
                <span className="text-primary tracking-widest text-xs uppercase font-bold">Endless Potential</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Ideal For High-Return Commercial Ventures</h2>
            </div>
            <p className="text-muted-foreground text-sm font-light max-w-xs md:text-right border-r-2 border-primary/30 pr-4">
              Zoned and positioned for massive infrastructural developments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: <Truck />, title: "Logistics Park", desc: "Port-to-airport transit routes" },
              { icon: <Factory />, title: "Warehouse Hub", desc: "2.5 acre storage facilities" },
              { icon: <Hotel />, title: "Business Hotel", desc: "Airport corporate transit" },
              { icon: <Building />, title: "Commercial Complex", desc: "400ft highway frontage visibility" },
              { icon: <Scale />, title: "Industrial Yard", desc: "Heavy machinery & export staging" },
              { icon: <BatteryCharging />, title: "EV Charging Hub", desc: "Highway fleet charging" },
              { icon: <Briefcase />, title: "Corporate Office", desc: "Headquarters for maritime firms" },
            ].map((u, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-5 bg-card border border-border hover:border-primary transition-colors cursor-pointer flex flex-col"
                data-testid={`usecase-card-${i}`}
              >
                <div className="mb-4 p-3 bg-background inline-block text-primary border border-border group-hover:bg-primary group-hover:text-background transition-colors w-fit">
                  {React.cloneElement(u.icon as React.ReactElement, { className: "w-5 h-5" })}
                </div>
                <h3 className="text-base font-serif font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">{u.title}</h3>
                <p className="text-muted-foreground text-xs mt-auto leading-relaxed">{u.desc}</p>
                <div className="mt-4 flex items-center text-primary text-xs font-bold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  High ROI <ArrowUpRight className="ml-1 w-3 h-3" />
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-5 bg-primary text-primary-foreground flex flex-col items-center justify-center text-center cursor-pointer hover:bg-primary/90 transition-colors"
              onClick={() => scrollTo("contact")}
            >
              <h3 className="text-base font-serif font-bold mb-2">Custom requirement?</h3>
              <p className="text-primary-foreground/80 text-xs mb-4">Discuss zoning and build potential.</p>
              <span className="font-bold border-b border-primary-foreground/40 pb-0.5 flex items-center text-sm">
                Consult Now <ArrowRight className="ml-1.5 w-4 h-4" />
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — INVESTMENT ── */}
      <section id="investment" className="py-14 md:py-20 bg-card relative overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-primary/6 blur-[100px] pointer-events-none" />
        <div className="container relative z-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-[2px] w-8 bg-primary" />
                <span className="text-primary font-bold uppercase tracking-widest text-xs">Investment Case</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5">Built for Long-Term Commercial Appreciation</h2>
              <p className="text-muted-foreground text-sm font-light mb-7 leading-relaxed">
                Land in this corridor has seen unprecedented value growth. The convergence of national highways, a major port, and an expanding airport creates a scarcity of prime large-acreage plots.
              </p>

              <div className="space-y-4">
                {[
                  "Airport-driven commercial demand growth",
                  "Harbour expansion & import/export logistics surge",
                  "High-visibility National Highway frontage",
                  "Emerging industrial & tech corridor",
                  "Future-proof infrastructure connectivity",
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 mr-3 mt-0.5" style={{ color: GOLD }} />
                    <span className="text-foreground/80 text-sm font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: 400, label: "FT Frontage" },
                  { val: 20, label: "KM to Port" },
                  { val: 2.5, label: "Acres" },
                ].map((c, i) => (
                  <div key={i} className="bg-background border border-border border-t-2 p-5 text-center" style={{ borderTopColor: GOLD }}>
                    <div className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-1">
                      <AnimatedCounter end={c.val} duration={i === 2 ? 1 : 2} />
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: GOLD }}>{c.label}</div>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-background border border-border p-5"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-foreground font-serif font-bold text-lg">Land Appreciation Trend</h4>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Projected</span>
                </div>
                <div className="h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 8, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={GOLD} stopOpacity={0.25} />
                          <stop offset="95%" stopColor={GOLD} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false} />
                      <XAxis dataKey="year" stroke="rgba(0,0,0,0.3)" fontSize={11} tickLine={false} axisLine={false} />
                      <YAxis stroke="rgba(0,0,0,0.3)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `+${v}%`} />
                      <RechartsTooltip
                        contentStyle={{ backgroundColor: "hsl(var(--background))", borderColor: "hsl(var(--border))", color: "hsl(var(--foreground))" }}
                        itemStyle={{ color: GOLD }}
                      />
                      <Area type="monotone" dataKey="value" stroke={GOLD} strokeWidth={2.5} fillOpacity={1} fill="url(#goldGrad)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5 — TARGET INVESTORS ── */}
      <section id="investors" className="py-14 bg-background border-y border-border">
        <div className="container px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Who This Is Built For</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">Strategic buyers seeking high-leverage positions in Tamil Nadu's industrial growth corridor.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Industrial Investors", icon: <Factory />, desc: "Large footprint for heavy setup." },
              { title: "Logistics Companies", icon: <Truck />, desc: "Highway and port proximity." },
              { title: "Corporate Developers", icon: <Building />, desc: "Grade-A office or retail." },
              { title: "NRIs", icon: <Globe />, desc: "High-appreciation Indian assets." },
              { title: "Commercial Builders", icon: <Hotel />, desc: "Hospitality & transit infrastructure." },
              { title: "Supply Chain Firms", icon: <Anchor />, desc: "Staging areas near the harbour." },
            ].map((p, i) => (
              <div key={i} className="bg-card p-5 border border-border hover:border-primary/50 transition-all group text-center flex flex-col items-center" data-testid={`investor-card-${i}`}>
                <div className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center mb-3 text-primary group-hover:scale-110 transition-transform">
                  {React.cloneElement(p.icon as React.ReactElement, { className: "w-5 h-5" })}
                </div>
                <h4 className="text-foreground font-bold text-sm mb-1">{p.title}</h4>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — WHY SBM ── */}
      <section id="why" className="py-14 md:py-20 bg-card">
        <div className="container px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Why SBM-Pranav Stands Apart</h2>
            <div className="h-[2px] w-16 mx-auto mt-3" style={{ background: GOLD }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              { icon: <MapPin />, title: "Strategic Location", desc: "Dead center between the airport, harbour, and major toll plazas." },
              { icon: <Globe />, title: "High Visibility Frontage", desc: "400ft directly facing the National Highway for unmatched brand exposure." },
              { icon: <TrendingUp />, title: "Future Growth Corridor", desc: "Positioned in a government-backed industrial expansion zone." },
              { icon: <Scale />, title: "Commercial Scalability", desc: "2.5 contiguous acres allows for massive, multi-phase developments." },
              { icon: <Activity />, title: "Infrastructure Connectivity", desc: "Instant access to power grids, heavy transit roads, and utilities." },
              { icon: <Shield />, title: "Long-Term Value", desc: "A generational asset with clear title and zero encumbrances." },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start"
              >
                <div className="mt-0.5 mr-3 shrink-0 p-2 rounded bg-primary/10">
                  {React.cloneElement(f.icon as React.ReactElement, { className: "w-5 h-5", style: { color: GOLD } })}
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground mb-1 font-serif">{f.title}</h4>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — GALLERY ── */}
      <section id="gallery" className="py-14 bg-background">
        <div className="container px-6 mb-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">See The Site</h2>
          <div className="h-[2px] w-16 mb-4" style={{ background: GOLD }} />
          <p className="text-muted-foreground text-sm font-light max-w-xl">Premium commercial infrastructure set against the backdrop of rapid regional development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1">
          {[
            { src: sitePhoto, label: "SITE OVERVIEW", span: "lg:col-span-2" },
            { src: gallery2, label: "HIGHWAY ACCESS", span: "" },
            { src: gallery3, label: "HARBOUR PROXIMITY", span: "" },
            { src: gallery4, label: "DEVELOPMENT SITE", span: "" },
            { src: gallery1, label: "AERIAL PERSPECTIVE", span: "" },
          ].map((img, i) => (
            <div key={i} className={`relative group aspect-[4/3] overflow-hidden ${img.span}`} data-testid={`gallery-img-${i}`}>
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors z-10" />
              <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white/90 backdrop-blur px-3 py-1 text-foreground text-xs font-bold tracking-widest border border-border/40">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 8 — CONTACT ── */}
      <section id="contact" className="py-14 md:py-20 bg-card relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/6 blur-[80px] pointer-events-none" />
        <div className="container relative z-10 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20">

            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 font-bold uppercase tracking-widest text-xs mb-4" style={{ color: GOLD }}>
                <div className="w-2 h-2" style={{ background: GOLD }} />
                <span>Limited Opportunity</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Request Your Investor Consultation</h2>
              <p className="text-muted-foreground font-light text-sm mb-7 leading-relaxed">
                Discuss acquisition, zoning details, and regional development plans directly with our executive team.
              </p>

              <div className="space-y-5">
                {[
                  { icon: <Phone className="w-4 h-4" />, label: "Direct Line", value: "+91 89400 89888" },
                  { icon: <Mail className="w-4 h-4" />, label: "Email Inquiries", value: "rshaheem311@gmail.com" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-10 h-10 bg-background border border-border flex items-center justify-center mr-3 shrink-0" style={{ color: GOLD }}>
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{c.label}</div>
                      <div className="text-foreground font-serif text-base">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 bg-background border border-border p-7 shadow-md relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-yellow-500" />

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase tracking-widest text-[10px]">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-transparent border-border focus-visible:border-primary h-10 rounded-none text-foreground" data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase tracking-widest text-[10px]">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91" {...field} className="bg-transparent border-border focus-visible:border-primary h-10 rounded-none text-foreground" data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase tracking-widest text-[10px]">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@company.com" {...field} className="bg-transparent border-border focus-visible:border-primary h-10 rounded-none text-foreground" data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="company" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase tracking-widest text-[10px]">Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Corp" {...field} className="bg-transparent border-border focus-visible:border-primary h-10 rounded-none text-foreground" data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="interest" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground uppercase tracking-widest text-[10px]">Investment Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-transparent border-border focus:ring-primary h-10 rounded-none text-foreground" data-testid="select-interest">
                            <SelectValue placeholder="Select primary use case" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-background border-border text-foreground rounded-none">
                          <SelectItem value="logistics">Logistics & Warehousing</SelectItem>
                          <SelectItem value="hotel">Premium Business Hotel</SelectItem>
                          <SelectItem value="commercial">Commercial Complex</SelectItem>
                          <SelectItem value="industrial">Industrial Yard</SelectItem>
                          <SelectItem value="ev">EV Charging Hub</SelectItem>
                          <SelectItem value="office">Corporate Office Space</SelectItem>
                          <SelectItem value="other">Other / Mixed Use</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground uppercase tracking-widest text-[10px]">Additional Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your requirements..."
                          className="bg-transparent border-border focus-visible:border-primary text-foreground min-h-[80px] rounded-none resize-none"
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-sm font-bold rounded-none" data-testid="button-submit">
                      Request Consultation
                    </Button>
                    <Button type="button" variant="outline"
                      className="flex-1 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white h-11 text-sm font-bold rounded-none bg-transparent transition-colors"
                      onClick={() => window.open(WA_LINK, "_blank")}
                      data-testid="button-whatsapp">
                      <MessageSquare className="mr-2 w-4 h-4" /> WhatsApp
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-background pt-12 pb-8 border-t border-border relative z-10">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">

            <div className="md:col-span-5">
              <img src={logoImg} alt="SBM Pranav" className="h-16 w-auto object-contain mb-3" />
              <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs">
                Future-ready commercial infrastructure at the intersection of airport, harbour, and highway growth.
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-foreground font-bold uppercase tracking-widest text-xs mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[["location","Location Advantage"],["usecases","Commercial Uses"],["investment","Investment Thesis"],["gallery","Site Gallery"]].map(([id,label]) => (
                  <li key={id}><button onClick={() => scrollTo(id)} className="text-muted-foreground hover:text-primary transition-colors text-sm">{label}</button></li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-foreground font-bold uppercase tracking-widest text-xs mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 mr-2.5 shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <span>Tuticorin Airport Road, Vagaikulam Toll Plaza, Tamil Nadu, India</span>
                </li>
                <li className="flex items-center text-muted-foreground text-sm">
                  <Phone className="w-4 h-4 mr-2.5 shrink-0" style={{ color: GOLD }} />
                  <span>+91 89400 89888</span>
                </li>
                <li className="flex items-center text-muted-foreground text-sm">
                  <Mail className="w-4 h-4 mr-2.5 shrink-0" style={{ color: GOLD }} />
                  <span>rshaheem311@gmail.com</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/70 gap-2">
            <p>This landing page is for informational purposes only. All details subject to verification.</p>
            <p>&copy; {new Date().getFullYear()} SBM Pranav Property Developers. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-13 h-13 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        data-testid="whatsapp-float"
        style={{ width: 52, height: 52 }}
      >
        <MessageSquare className="w-6 h-6" />
      </a>

      {/* ── MOBILE STICKY CTA ── */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border p-3 shadow-lg"
          >
            <Button onClick={() => scrollTo("contact")} className="w-full bg-primary text-primary-foreground font-bold h-11 text-sm rounded-none">
              Schedule Your Site Visit <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
