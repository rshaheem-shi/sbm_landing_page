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
  TrendingUp, Activity, BarChart3, Users, Globe, Shield, Scale, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Images
import sitePhoto from "@assets/magnific_vuRoQ8xa47_(1)_1779327684220.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

// --- ANIMATION VARIANTS ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

// --- COMPONENTS ---

const AnimatedCounter = ({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const step = end / (duration * 60); // Assuming 60fps
      
      const updateCounter = () => {
        start += step;
        if (start < end) {
          setCount(Math.ceil(start));
          requestAnimationFrame(updateCounter);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(updateCounter);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// --- MAIN PAGE ---

export default function LandingPage() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Valid email is required"),
    company: z.string().optional(),
    interest: z.string().min(1, "Please select an interest"),
    message: z.string().optional()
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      interest: "",
      message: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Request Received",
      description: "Our investment team will contact you shortly.",
    });
    form.reset();
  };

  const chartData = [
    { year: "2019", value: 100 },
    { year: "2020", value: 115 },
    { year: "2021", value: 140 },
    { year: "2022", value: 180 },
    { year: "2023", value: 240 },
    { year: "2024", value: 310 },
    { year: "2025", value: 420 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex flex-col items-start cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className="font-serif text-2xl font-bold tracking-wider text-white">SBM PRANAV</span>
            <div className="h-[2px] w-12 bg-primary mt-1"></div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo("location")} className="text-sm text-gray-300 hover:text-primary transition-colors font-medium">Location</button>
            <button onClick={() => scrollTo("usecases")} className="text-sm text-gray-300 hover:text-primary transition-colors font-medium">Opportunities</button>
            <button onClick={() => scrollTo("investment")} className="text-sm text-gray-300 hover:text-primary transition-colors font-medium">Investment</button>
            <button onClick={() => scrollTo("gallery")} className="text-sm text-gray-300 hover:text-primary transition-colors font-medium">Gallery</button>
            <Button onClick={() => scrollTo("contact")} className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 rounded-none">
              Schedule Visit
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden flex flex-col space-y-6 border-b border-white/10"
          >
            <button onClick={() => scrollTo("location")} className="text-lg text-left text-gray-300 hover:text-primary py-2 border-b border-white/5">Location Advantage</button>
            <button onClick={() => scrollTo("usecases")} className="text-lg text-left text-gray-300 hover:text-primary py-2 border-b border-white/5">Commercial Use Cases</button>
            <button onClick={() => scrollTo("investment")} className="text-lg text-left text-gray-300 hover:text-primary py-2 border-b border-white/5">Investment Potential</button>
            <button onClick={() => scrollTo("gallery")} className="text-lg text-left text-gray-300 hover:text-primary py-2 border-b border-white/5">Site Gallery</button>
            <Button onClick={() => scrollTo("contact")} className="bg-primary text-primary-foreground font-semibold py-6 w-full rounded-none mt-4">
              Schedule Site Visit
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
          <img 
            src={sitePhoto} 
            alt="SBM Pranav Commercial Land" 
            className="w-full h-full object-cover object-center scale-105"
          />
        </motion.div>

        <div className="container relative z-20 px-6 pt-20">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="flex items-center space-x-4 mb-6">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Prime Commercial Asset</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 text-white text-balance">
              Premium Commercial Infrastructure <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Investment Opportunity</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-2xl leading-relaxed border-l-2 border-primary/50 pl-6">
              Strategically positioned near Tuticorin Airport, Harbour Connectivity & National Highway Access. A ₹10Cr+ asset built for exponential appreciation.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
              {[
                { icon: <Map className="w-4 h-4"/>, text: "2.5 Acre Land" },
                { icon: <Globe className="w-4 h-4"/>, text: "400 Ft Highway Frontage" },
                { icon: <Plane className="w-4 h-4"/>, text: "1-2 KM Airport" },
                { icon: <Ship className="w-4 h-4"/>, text: "20 KM Harbour" },
                { icon: <MapPin className="w-4 h-4"/>, text: "Vagaikulam Toll Plaza" },
                { icon: <TrendingUp className="w-4 h-4"/>, text: "High Appreciation Corridor" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                  <span className="text-primary">{stat.icon}</span>
                  <span className="text-xs font-medium text-white/90 uppercase tracking-wider">{stat.text}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollTo("contact")} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-semibold rounded-none shadow-[0_0_30px_rgba(226,185,59,0.3)] transition-all hover:shadow-[0_0_50px_rgba(226,185,59,0.5)]">
                Schedule Site Visit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-14 px-8 text-base font-semibold rounded-none bg-transparent" onClick={() => window.open('https://wa.me/919876543210', '_blank')}>
                <MessageSquare className="mr-2 w-5 h-5" /> WhatsApp Consultation
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 h-14 px-8 text-base font-semibold rounded-none">
                <Download className="mr-2 w-5 h-5" /> Download Brochure
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 cursor-pointer"
          onClick={() => scrollTo("location")}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* SECTION 2 - LOCATION */}
      <section id="location" className="py-24 md:py-32 bg-card relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
        <div className="container relative z-10 px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Unmatched Location Advantage</h2>
            <div className="h-[2px] w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg font-light">The true value of commercial land is dictated by its connectivity. SBM-Pranav sits at the exact intersection of air, sea, and land transit routes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {[
              {
                icon: <Plane className="w-8 h-8"/>,
                title: "Airport Connectivity",
                desc: "1–2 KM from Tuticorin Airport. Fast access for corporate travel, logistics, and business expansion.",
                delay: 0.1
              },
              {
                icon: <Ship className="w-8 h-8"/>,
                title: "Harbour Connectivity",
                desc: "20 KM from Harbour. Ideal for import/export, industrial operations, and supply chain businesses.",
                delay: 0.2
              },
              {
                icon: <Truck className="w-8 h-8"/>,
                title: "Highway Frontage",
                desc: "400 ft road-facing visibility. Prime commercial accessibility on National Highway.",
                delay: 0.3
              },
              {
                icon: <MapPin className="w-8 h-8"/>,
                title: "Toll Plaza Proximity",
                desc: "Adjacent to Vagaikulam Toll. Perfect for logistics hubs, fleet movement, and transit businesses.",
                delay: 0.4
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: item.delay, duration: 0.6 }}
                className="group relative bg-background border border-white/5 hover:border-primary/50 p-8 md:p-10 transition-all duration-500 overflow-hidden rounded-none"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full"></div>
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-none mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Abstract Map Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-80 md:h-[400px] bg-background border border-white/10 relative overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M 200 200 Q 400 80 500 200 T 800 120" 
                fill="transparent" 
                stroke="#c9a227"
                strokeWidth="2"
                strokeDasharray="8,5"
              />
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                d="M 500 200 Q 600 320 800 280" 
                fill="transparent" 
                stroke="#c9a227"
                strokeWidth="2"
                strokeDasharray="8,5"
              />
            </svg>

            {/* Nodes */}
            <div className="absolute left-[20%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(226,185,59,0.8)]"></div>
              <span className="mt-2 text-xs font-bold tracking-widest text-primary uppercase bg-background px-2">Tuticorin Airport</span>
            </div>

            <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
              <div className="w-6 h-6 bg-white border-2 border-primary rounded-none shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center">
                <div className="w-2 h-2 bg-primary"></div>
              </div>
              <span className="mt-3 text-sm font-bold tracking-widest text-white uppercase bg-background/80 backdrop-blur px-3 py-1 border border-white/10">SBM PRANAV SITE</span>
              <span className="text-xs text-gray-400 mt-1">400ft Highway Frontage</span>
            </div>

            <div className="absolute left-[80%] top-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-4 h-4 bg-primary/50 border border-primary rounded-none"></div>
              <span className="mt-2 text-xs font-bold tracking-widest text-gray-300 uppercase bg-background px-2">Harbour (20km)</span>
            </div>

            <div className="absolute left-[80%] top-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-4 h-4 bg-primary/50 border border-primary rounded-none"></div>
              <span className="mt-2 text-xs font-bold tracking-widest text-gray-300 uppercase bg-background px-2">Vagaikulam Toll</span>
            </div>

          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - USE CASES */}
      <section id="usecases" className="py-24 md:py-32 bg-background border-y border-white/5">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-[1px] w-8 bg-primary"></div>
                <span className="text-primary tracking-widest text-xs uppercase font-bold">Endless Potential</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Ideal For High-Return Commercial Ventures</h2>
            </div>
            <p className="text-gray-400 text-lg font-light max-w-md md:text-right border-l-2 md:border-l-0 md:border-r-2 border-primary/30 pl-4 md:pl-0 md:pr-4">
              Zoned and positioned for massive infrastructural developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: <Truck />, title: "Logistics Park", desc: "Capitalize on port-to-airport transit routes" },
              { icon: <Factory />, title: "Warehouse Hub", desc: "Massive 2.5 acre footprint for storage facilities" },
              { icon: <Hotel />, title: "Premium Business Hotel", desc: "Serve airport corporate transit and layovers" },
              { icon: <Building />, title: "Commercial Complex", desc: "High-visibility 400ft frontage on the highway" },
              { icon: <Scale />, title: "Industrial Yard", desc: "Heavy machinery and export staging ground" },
              { icon: <BatteryCharging />, title: "EV Charging Hub", desc: "Highway rest stop and massive fleet charging" },
              { icon: <Briefcase />, title: "Corporate Office Space", desc: "Headquarters for supply chain and maritime firms" }
            ].map((useCase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-card border border-white/5 hover:border-primary transition-colors cursor-pointer flex flex-col h-full"
              >
                <div className="mb-6 p-4 bg-background inline-block text-primary border border-white/10 group-hover:bg-primary group-hover:text-background transition-colors">
                  {React.cloneElement(useCase.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-primary transition-colors">{useCase.title}</h3>
                <p className="text-gray-400 font-light text-sm mt-auto">{useCase.desc}</p>
                <div className="mt-6 flex items-center text-primary text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  High ROI Potential <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </motion.div>
            ))}
            
            {/* CTA Cell */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="p-8 bg-primary text-primary-foreground flex flex-col items-center justify-center text-center cursor-pointer hover:bg-primary/90 transition-colors"
              onClick={() => scrollTo("contact")}
            >
              <h3 className="text-2xl font-serif font-bold mb-4">Have a custom requirement?</h3>
              <p className="text-primary-foreground/80 mb-6 text-sm">Speak with our investment advisors to discuss zoning and build potential.</p>
              <span className="font-bold border-b border-primary-foreground/30 pb-1 flex items-center">
                Consult Now <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - INVESTMENT */}
      <section id="investment" className="py-24 md:py-32 bg-card relative overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none"></div>
        <div className="container relative z-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">Built for Long-Term Commercial Appreciation</h2>
              <p className="text-gray-400 text-lg font-light mb-10 leading-relaxed">
                Land in this specific corridor has seen unprecedented value growth. The convergence of national highways, a major port, and an expanding airport creates a scarcity of prime large-acreage plots.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  "Airport-driven commercial demand growth",
                  "Harbour expansion & import/export logistics surge",
                  "High-visibility National Highway frontage",
                  "Emerging industrial & tech corridor",
                  "Future-proof infrastructure connectivity"
                ].map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mr-4 mt-0.5" />
                    <span className="text-gray-300 font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Counters */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="bg-background border border-white/5 p-6 text-center border-t-2 border-t-primary">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                    <AnimatedCounter end={400} />
                  </div>
                  <div className="text-xs text-primary uppercase tracking-widest font-bold">FT Frontage</div>
                </div>
                <div className="bg-background border border-white/5 p-6 text-center border-t-2 border-t-primary">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                    <AnimatedCounter end={20} />
                  </div>
                  <div className="text-xs text-primary uppercase tracking-widest font-bold">KM to Port</div>
                </div>
                <div className="bg-background border border-white/5 p-6 text-center border-t-2 border-t-primary">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                    <AnimatedCounter end={2.5} duration={1} />
                  </div>
                  <div className="text-xs text-primary uppercase tracking-widest font-bold">Acres</div>
                </div>
              </div>

              {/* Chart */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-background border border-white/10 p-6 md:p-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-white font-serif font-bold text-xl">Land Appreciation Trend</h4>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">Projected Model</span>
                </div>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis dataKey="year" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `+${val}%`} />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                        itemStyle={{ color: 'hsl(var(--primary))' }}
                      />
                      <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 - INVESTORS */}
      <section id="investors" className="py-24 bg-background border-y border-white/5">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Who This Is Built For</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Strategic buyers seeking high-leverage positions in Tamil Nadu's industrial growth corridor.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
            {[
              { title: "Industrial Investors", icon: <Factory />, desc: "Seeking large footprint land for heavy setup." },
              { title: "Logistics Companies", icon: <Truck />, desc: "Requiring highway and port proximity." },
              { title: "Corporate Developers", icon: <Building />, desc: "Building grade-A office or retail complexes." },
              { title: "NRIs", icon: <Globe />, desc: "Looking for secure, high-appreciation home assets." },
              { title: "Commercial Builders", icon: <Hotel />, desc: "Developing hospitality or transit infrastructure." },
              { title: "Supply Chain Firms", icon: <Anchor />, desc: "Needing staging areas near the harbour." }
            ].map((persona, i) => (
              <div key={i} className="bg-card p-6 border border-white/5 hover:border-primary/50 transition-all group text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  {React.cloneElement(persona.icon as React.ReactElement, { className: "w-5 h-5" })}
                </div>
                <h4 className="text-white font-bold mb-2">{persona.title}</h4>
                <p className="text-xs text-gray-400">{persona.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - WHY SBM */}
      <section id="why" className="py-24 md:py-32 bg-card">
        <div className="container px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-16 text-center">Why SBM-Pranav Stands Apart</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <MapPin />, title: "Strategic Location", desc: "Dead center between the airport, harbour, and major toll plazas." },
              { icon: <Globe />, title: "High Visibility Frontage", desc: "400ft directly facing the National Highway for unmatched brand exposure." },
              { icon: <TrendingUp />, title: "Future Growth Corridor", desc: "Positioned in a government-backed industrial expansion zone." },
              { icon: <Scale />, title: "Commercial Scalability", desc: "2.5 contiguous acres allows for massive, multi-phase developments." },
              { icon: <Activity />, title: "Infrastructure Connectivity", desc: "Instant access to power grids, heavy transit roads, and utilities." },
              { icon: <Shield />, title: "Long-Term Value", desc: "A generational asset with clear title and zero encumbrances." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start"
              >
                <div className="mt-1 mr-4 text-primary">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-serif">{feature.title}</h4>
                  <p className="text-gray-400 font-light leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - GALLERY */}
      <section id="gallery" className="py-24 bg-background">
        <div className="container px-6 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">See The Site</h2>
          <div className="h-[2px] w-24 bg-primary mb-6"></div>
          <p className="text-gray-400 text-lg font-light max-w-2xl">Premium commercial infrastructure set against the backdrop of rapid regional development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1">
          <div className="relative group aspect-[4/3] overflow-hidden lg:col-span-2">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
            <img src={sitePhoto} alt="Site Hero View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-background/80 backdrop-blur px-4 py-2 text-white text-sm font-bold tracking-widest border border-white/20">SITE OVERVIEW</span>
            </div>
          </div>
          <div className="relative group aspect-[4/3] overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
            <img src={gallery2} alt="Highway Access" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-background/80 backdrop-blur px-4 py-2 text-white text-sm font-bold tracking-widest border border-white/20">HIGHWAY ACCESS</span>
            </div>
          </div>
          <div className="relative group aspect-[4/3] overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
            <img src={gallery3} alt="Harbour Proximity" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-background/80 backdrop-blur px-4 py-2 text-white text-sm font-bold tracking-widest border border-white/20">HARBOUR PROXIMITY</span>
            </div>
          </div>
          <div className="relative group aspect-[4/3] overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
            <img src={gallery4} alt="Development Potential" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-background/80 backdrop-blur px-4 py-2 text-white text-sm font-bold tracking-widest border border-white/20">DEVELOPMENT SITE</span>
            </div>
          </div>
          <div className="relative group aspect-[4/3] overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
            <img src={gallery1} alt="Aerial Drone View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-background/80 backdrop-blur px-4 py-2 text-white text-sm font-bold tracking-widest border border-white/20">AERIAL PERSPECTIVE</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-card relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="container relative z-10 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
            
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-sm mb-6">
                <div className="w-2 h-2 bg-primary"></div>
                <span>Limited Opportunity</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Request Your Investor Consultation</h2>
              <p className="text-gray-400 font-light text-lg mb-10">
                Discuss acquisition, zoning details, and regional development plans directly with our executive team.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-background border border-white/10 flex items-center justify-center mr-4 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Direct Line</div>
                    <div className="text-white font-serif text-xl">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-background border border-white/10 flex items-center justify-center mr-4 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email inquiries</div>
                    <div className="text-white font-serif text-xl">invest@sbm-pranav.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-background border border-white/10 p-8 md:p-10 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-yellow-600"></div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-400 uppercase tracking-widest text-xs">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-transparent border-white/10 focus-visible:border-primary text-white h-12 rounded-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-400 uppercase tracking-widest text-xs">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91" {...field} className="bg-transparent border-white/10 focus-visible:border-primary text-white h-12 rounded-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-400 uppercase tracking-widest text-xs">Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@company.com" {...field} className="bg-transparent border-white/10 focus-visible:border-primary text-white h-12 rounded-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-400 uppercase tracking-widest text-xs">Company Name (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corp" {...field} className="bg-transparent border-white/10 focus-visible:border-primary text-white h-12 rounded-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 uppercase tracking-widest text-xs">Investment Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-transparent border-white/10 focus:ring-primary text-white h-12 rounded-none">
                              <SelectValue placeholder="Select primary use case" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-white/10 text-white rounded-none">
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
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 uppercase tracking-widest text-xs">Additional Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your requirements..." 
                            className="bg-transparent border-white/10 focus-visible:border-primary text-white min-h-[100px] rounded-none resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-base font-bold rounded-none">
                      Request Consultation
                    </Button>
                    <Button type="button" variant="outline" className="flex-1 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white h-14 text-base font-bold rounded-none bg-transparent transition-colors" onClick={() => window.open('https://wa.me/919876543210', '_blank')}>
                      <MessageSquare className="mr-2 w-5 h-5" /> Connect on WhatsApp
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background pt-20 pb-10 border-t border-white/5 relative z-10">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            <div className="md:col-span-5">
              <div className="flex flex-col items-start mb-6">
                <span className="font-serif text-3xl font-bold tracking-wider text-white">SBM PRANAV</span>
                <div className="h-[2px] w-12 bg-primary mt-2"></div>
              </div>
              <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                Future-ready commercial infrastructure at the intersection of airport, harbour, and highway growth.
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><button onClick={() => scrollTo("location")} className="text-gray-400 hover:text-primary transition-colors text-sm">Location Advantage</button></li>
                <li><button onClick={() => scrollTo("usecases")} className="text-gray-400 hover:text-primary transition-colors text-sm">Commercial Uses</button></li>
                <li><button onClick={() => scrollTo("investment")} className="text-gray-400 hover:text-primary transition-colors text-sm">Investment Thesis</button></li>
                <li><button onClick={() => scrollTo("gallery")} className="text-gray-400 hover:text-primary transition-colors text-sm">Site Gallery</button></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 text-primary mr-3 shrink-0" />
                  <span>Tuticorin Airport Road, Vagaikulam Toll Plaza, Tamil Nadu, India</span>
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <Phone className="w-5 h-5 text-primary mr-3 shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <Mail className="w-5 h-5 text-primary mr-3 shrink-0" />
                  <span>invest@sbm-pranav.com</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p className="mb-4 md:mb-0">This landing page is for informational purposes only. All details subject to verification.</p>
            <p>&copy; {new Date().getFullYear()} SBM Pranav. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING ELEMENTS */}
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
      >
        <MessageSquare className="w-6 h-6" />
      </a>

      {/* Mobile Sticky CTA */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-primary/20 p-4 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
          >
            <Button onClick={() => scrollTo("contact")} className="w-full bg-primary text-primary-foreground font-bold h-12 text-base rounded-none">
              Schedule Your Site Visit <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
