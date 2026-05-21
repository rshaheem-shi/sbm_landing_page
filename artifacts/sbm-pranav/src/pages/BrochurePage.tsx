import { useLocation } from "wouter";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { WA_LINK, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";
import sitePhoto from "@assets/magnific_vuRoQ8xa47_(1)_1779344385534.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import logoImg from "@assets/SBM_Pranav_1779330703662.png";

const LOCATION_ADVANTAGES = [
  {
    title: "Airport Access",
    desc: "1–2 KM to Tuticorin Airport — fast connectivity for business travel and air cargo logistics.",
  },
  {
    title: "Harbour Connectivity",
    desc: "20 KM to Tuticorin Harbour — ideal for import/export and industrial operations.",
  },
  {
    title: "Highway Visibility",
    desc: "400 ft national highway frontage — prime commercial branding and accessibility.",
  },
  {
    title: "Future Appreciation",
    desc: "Government-backed industrial expansion zone with high demand growth corridor.",
  },
] as const;

const COMMERCIAL_USES = [
  "Warehouse & Logistics Hub",
  "Fuel Station / EV Charging",
  "Commercial Complex",
  "Industrial Development",
  "Hotel & Hospitality",
  "Transport Hub",
] as const;

const STATS = [
  { value: "1–2 KM", label: "To Tuticorin Airport" },
  { value: "100 M",  label: "To Toll Plaza" },
  { value: "20 KM",  label: "To Tuticorin Harbour" },
  { value: "High",   label: "Commercial Potential" },
] as const;

export default function BrochurePage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          aria-label="Back to main site"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Site
        </button>
        <img src={logoImg} alt="SBM Pranav" className="h-10 w-auto object-contain" />
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-[#25D366] border border-[#25D366]/50 px-4 py-2 rounded-full hover:bg-[#25D366] hover:text-black transition-colors"
          aria-label="WhatsApp inquiry — opens in new tab"
        >
          <MessageSquare className="w-4 h-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>

      {/* ── HERO ── */}
      <section
        aria-labelledby="brochure-hero-heading"
        className="relative overflow-hidden border-b border-zinc-800 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 px-8 pt-32 pb-24 lg:px-24"
      >
        <div
          className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm tracking-wide text-yellow-400 uppercase">
              Premium Highway Facing Investment Land
            </span>

            <h1 id="brochure-hero-heading" className="mt-8 text-6xl lg:text-8xl font-black tracking-tight leading-none">
              SBM-<span className="text-yellow-400">Pranav</span>
            </h1>

            <p className="mt-8 text-xl leading-9 text-zinc-300 max-w-2xl">
              Strategically located premium commercial property near Vagaikulam Toll Plaza with
              exceptional connectivity to Tuticorin Airport and Harbour.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <div className="rounded-2xl border border-zinc-700 bg-zinc-900/70 px-6 py-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-widest text-zinc-500">Land Size</p>
                <p className="mt-2 text-3xl font-bold">2.5 Acres</p>
              </div>
              <div className="rounded-2xl border border-zinc-700 bg-zinc-900/70 px-6 py-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-widest text-zinc-500">Frontage</p>
                <p className="mt-2 text-3xl font-bold">400 Ft</p>
              </div>
              <div className="rounded-2xl border border-zinc-700 bg-zinc-900/70 px-6 py-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-widest text-zinc-500">Investment</p>
                <p className="mt-2 text-3xl font-bold">₹10Cr+</p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[36px] border border-zinc-800 bg-zinc-900 p-5 shadow-2xl shadow-yellow-500/10">
              <img
                src={sitePhoto}
                alt="SBM Pranav commercial site — aerial overview"
                className="h-[480px] w-full rounded-[28px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        aria-labelledby="brochure-about-heading"
        className="px-8 py-24 lg:px-24 border-b border-zinc-900"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <img
              src={gallery2}
              alt="National Highway access adjacent to the site"
              className="rounded-[32px] border border-zinc-800 shadow-2xl w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">About The Project</p>
            <h2 id="brochure-about-heading" className="mt-5 text-5xl font-bold leading-tight">
              Built Around Future Growth
            </h2>
            <p className="mt-8 text-lg leading-9 text-zinc-400">
              SBM-Pranav offers a rare investment opportunity positioned near key infrastructure
              developments in Tamil Nadu. Located close to the airport, harbour, and national highway
              connectivity, the property is ideal for high-value commercial and industrial development.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-5">
              {STATS.map(({ value, label }) => (
                <div key={label} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                  <dt className="mt-2 text-4xl font-bold text-yellow-400">{value}</dt>
                  <dd className="mt-2 text-zinc-400">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── LOCATION ADVANTAGES ── */}
      <section
        aria-labelledby="brochure-location-heading"
        className="bg-zinc-950 px-8 py-24 lg:px-24 border-b border-zinc-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">Location Advantages</p>
            <h2 id="brochure-location-heading" className="mt-5 text-5xl font-bold">
              Strategic Connectivity
            </h2>
          </div>

          <ul className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6" aria-label="Location advantages">
            {LOCATION_ADVANTAGES.map(({ title, desc }) => (
              <li key={title} className="rounded-[28px] border border-zinc-800 bg-black p-8">
                <div
                  className="h-14 w-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20"
                  aria-hidden="true"
                />
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-8 text-zinc-400">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section
        aria-labelledby="brochure-gallery-heading"
        className="px-8 py-24 lg:px-24 border-b border-zinc-900"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">Site Gallery</p>
          <h2 id="brochure-gallery-heading" className="mt-5 text-5xl font-bold leading-tight mb-10">
            See The Land
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: gallery1, alt: "Aerial perspective of surrounding infrastructure" },
              { src: gallery3, alt: "Proximity to Tuticorin Harbour" },
              { src: gallery4, alt: "Development-ready site layout" },
            ].map(({ src, alt }) => (
              <div key={alt} className="rounded-[24px] border border-zinc-800 overflow-hidden aspect-[4/3]">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMERCIAL USES ── */}
      <section
        aria-labelledby="brochure-uses-heading"
        className="px-8 py-24 lg:px-24 border-b border-zinc-900"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">Commercial Opportunities</p>
            <h2 id="brochure-uses-heading" className="mt-5 text-5xl font-bold leading-tight">
              Ideal For Large Scale Developments
            </h2>

            <ul className="mt-10 grid gap-5" aria-label="Commercial use cases">
              {COMMERCIAL_USES.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-5 text-lg text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <img
              src={sitePhoto}
              alt="Commercial infrastructure potential"
              className="rounded-[32px] border border-zinc-800 shadow-2xl w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section aria-label="Call to action" className="px-8 py-24 lg:px-24">
        <div className="max-w-6xl mx-auto rounded-[40px] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-zinc-950 to-black p-12 lg:p-20 text-center shadow-2xl shadow-yellow-500/10">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">Invest Today</p>
          <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">
            Premium Land. Strategic Location. Long-Term Growth.
          </h2>
          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-zinc-400">
            A rare opportunity to own premium commercial property positioned at one of the
            fastest-growing connectivity corridors in Tamil Nadu.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("SBM-Pranav Investment Inquiry")}&body=${encodeURIComponent("Hello, I am interested in knowing more about the property you posted. Could you please share the property details.")}`}
              className="rounded-2xl bg-yellow-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              Email Us Now
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-green-500 px-10 py-5 text-lg font-semibold text-green-400 transition hover:bg-green-500 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              aria-label="WhatsApp Inquiry — opens in new tab"
            >
              WhatsApp Inquiry
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-600">
            Call us: <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="hover:text-zinc-400 transition-colors">{CONTACT_PHONE}</a>
          </p>
        </div>
      </section>

    </div>
  );
}
