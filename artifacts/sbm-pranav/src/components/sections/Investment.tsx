import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip as RechartsTooltip, ResponsiveContainer,
} from "recharts";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { GOLD, CHART_DATA } from "@/lib/constants";

const INVESTMENT_POINTS = [
  "Airport-driven commercial demand growth",
  "Harbour expansion & import/export logistics surge",
  "High-visibility National Highway frontage",
  "Emerging industrial & tech corridor",
  "Future-proof infrastructure connectivity",
] as const;

const STAT_CARDS = [
  { end: 400,  label: "FT Frontage", duration: 2   },
  { end: 20,   label: "KM to Port",  duration: 2   },
  { end: 2.5,  label: "Acres",       duration: 1.5 },
] as const;

function StatCard({ end, label, duration }: { end: number; label: string; duration: number }) {
  const { ref, count } = useAnimatedCounter(end, duration);
  const isFloat = !Number.isInteger(end);

  return (
    <div
      className="bg-background border border-border border-t-2 p-5 text-center"
      style={{ borderTopColor: GOLD }}
      aria-label={`${end} ${label}`}
    >
      <span
        ref={ref}
        className="text-2xl md:text-3xl font-serif font-bold text-foreground block mb-1"
        aria-hidden="true"
      >
        {isFloat ? count.toFixed(1) : count}
      </span>
      <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: GOLD }}>
        {label}
      </div>
    </div>
  );
}

export default function Investment() {
  return (
    <section id="investment" aria-labelledby="investment-heading" className="py-14 md:py-20 bg-card relative overflow-hidden">
      <div
        className="absolute -left-1/4 top-0 w-1/2 h-full bg-primary/6 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className="flex items-center space-x-3 mb-4" aria-hidden="true">
              <div className="h-[2px] w-8 bg-primary" />
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Investment Case</span>
            </div>
            <h2 id="investment-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5">
              Built for Long-Term Commercial Appreciation
            </h2>
            <p className="text-muted-foreground text-sm font-light mb-7 leading-relaxed">
              Land in this corridor has seen unprecedented value growth. The convergence of national
              highways, a major port, and an expanding airport creates a scarcity of prime
              large-acreage plots.
            </p>

            <ul className="space-y-4" aria-label="Investment highlights">
              {INVESTMENT_POINTS.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle2
                    className="w-5 h-5 shrink-0 mr-3 mt-0.5"
                    style={{ color: GOLD }}
                    aria-hidden="true"
                  />
                  <span className="text-foreground/80 text-sm font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div
              className="grid grid-cols-3 gap-3"
              aria-label="Key property statistics"
            >
              {STAT_CARDS.map((c) => (
                <StatCard key={c.label} {...c} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-background border border-border p-5"
              aria-label="Land appreciation trend chart — projected model"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-foreground font-serif font-bold text-lg">Land Appreciation Trend</h3>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Projected</span>
              </div>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={CHART_DATA as unknown as { year: string; value: number }[]}
                    margin={{ top: 8, right: 0, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={GOLD} stopOpacity={0.25} />
                        <stop offset="95%" stopColor={GOLD} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false} />
                    <XAxis
                      dataKey="year"
                      stroke="rgba(0,0,0,0.3)"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="rgba(0,0,0,0.3)"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(v: number) => `+${v}%`}
                    />
                    <RechartsTooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        borderColor: "hsl(var(--border))",
                        color: "hsl(var(--foreground))",
                      }}
                      itemStyle={{ color: GOLD }}
                      formatter={(v: number) => [`+${v}%`, "Appreciation"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={GOLD}
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#goldGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
