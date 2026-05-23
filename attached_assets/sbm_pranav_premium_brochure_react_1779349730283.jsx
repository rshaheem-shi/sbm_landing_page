export default function SBMPranavBrochure() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 px-8 py-24 lg:px-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm tracking-wide text-yellow-400 uppercase">
              Premium Highway Facing Investment Land
            </span>

            <h1 className="mt-8 text-6xl lg:text-8xl font-black tracking-tight leading-none">
              SBM-
              <span className="text-yellow-400">Pranav</span>
            </h1>

            <p className="mt-8 text-xl leading-9 text-zinc-300 max-w-2xl">
              Strategically located premium commercial property near
              Vagaikulam Toll Plaza with exceptional connectivity to Tuticorin
              Airport and Harbour.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <div className="rounded-2xl border border-zinc-700 bg-zinc-900/70 px-6 py-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  Land Size
                </p>
                <p className="mt-2 text-3xl font-bold">2.5 Acres</p>
              </div>

              <div className="rounded-2xl border border-zinc-700 bg-zinc-900/70 px-6 py-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  Frontage
                </p>
                <p className="mt-2 text-3xl font-bold">400 Ft</p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[36px] border border-zinc-800 bg-zinc-900 p-5 shadow-2xl shadow-yellow-500/10">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
                alt="Premium commercial land"
                className="h-[500px] w-full rounded-[28px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-8 py-24 lg:px-24 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
              alt="Land aerial view"
              className="rounded-[32px] border border-zinc-800 shadow-2xl"
            />
          </div>

          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
              About The Project
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-tight">
              Built Around Future Growth
            </h2>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              SBM-Pranav offers a rare investment opportunity positioned near
              key infrastructure developments in Tamil Nadu. Located close to
              the airport, harbour, and national highway connectivity, the
              property is ideal for high-value commercial and industrial
              development.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                <h3 className="text-4xl font-bold text-yellow-400">1 KM</h3>
                <p className="mt-2 text-zinc-400">To Tuticorin Airport</p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                <h3 className="text-4xl font-bold text-yellow-400">100 M</h3>
                <p className="mt-2 text-zinc-400">To Toll Plaza</p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                <h3 className="text-4xl font-bold text-yellow-400">21 KM</h3>
                <p className="mt-2 text-zinc-400">To Tuticorin Harbour</p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                <h3 className="text-4xl font-bold text-yellow-400">High</h3>
                <p className="mt-2 text-zinc-400">Commercial Potential</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION ADVANTAGES */}
      <section className="bg-zinc-950 px-8 py-24 lg:px-24 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
              Location Advantages
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              Strategic Connectivity
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Airport Access",
                desc: "Fast connectivity for business and logistics movement.",
              },
              {
                title: "Harbour Connectivity",
                desc: "Ideal for export and industrial opportunities.",
              },
              {
                title: "Highway Visibility",
                desc: "Prime frontage for commercial branding.",
              },
              {
                title: "Future Appreciation",
                desc: "High growth corridor with increasing demand.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-zinc-800 bg-black p-8"
              >
                <div className="h-14 w-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20" />

                <h3 className="mt-8 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL USES */}
      <section className="px-8 py-24 lg:px-24 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
              Commercial Opportunities
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-tight">
              Ideal For Large Scale Developments
            </h2>

            <div className="mt-10 grid gap-5">
              {[
                "Warehouse & Logistics Hub",
                "Fuel Station / EV Charging",
                "Commercial Complex",
                "Industrial Development",
                "Hotel & Hospitality",
                "Transport Hub",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-5 text-lg text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop"
              alt="Commercial infrastructure"
              className="rounded-[32px] border border-zinc-800 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-8 py-24 lg:px-24">
        <div className="max-w-6xl mx-auto rounded-[40px] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-zinc-950 to-black p-12 lg:p-20 text-center shadow-2xl shadow-yellow-500/10">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
            Invest Today
          </p>

          <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">
            Premium Land. Strategic Location. Long-Term Growth.
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-zinc-400">
            A rare opportunity to own premium commercial property positioned at
            one of the fastest-growing connectivity corridors in Tamil Nadu.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <button className="rounded-2xl bg-yellow-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-yellow-400">
              Download Brochure
            </button>

            <button className="rounded-2xl border border-green-500 px-10 py-5 text-lg font-semibold text-green-400 transition hover:bg-green-500 hover:text-black">
              WhatsApp Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
