import { MapPin, Phone, Mail } from "lucide-react";
import { useScrollTo } from "@/hooks/useScrollTo";
import { GOLD, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from "@/lib/constants";
import logoImg from "@assets/SBM_Pranav_1779330703662.png";

const QUICK_LINKS = [
  { id: "location",   label: "Location Advantage" },
  { id: "usecases",  label: "Commercial Uses" },
  // { id: "investment", label: "Investment Thesis" },
  { id: "gallery",   label: "Site Gallery" },
  { id: "contact",   label: "Contact Us" },
] as const;

export default function Footer() {
  const scrollTo = useScrollTo();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background pt-12 pb-8 border-t border-border" aria-label="Site footer">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">

          <div className="md:col-span-5">
            <img
              src={logoImg}
              alt="SBM Pranav Property Developers"
              className="h-16 w-auto object-contain mb-3"
            />
            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs">
              Future-ready commercial infrastructure at the intersection of airport, harbour, and
              highway growth.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer quick links">
            <h2 className="text-foreground font-bold uppercase tracking-widest text-xs mb-4">Quick Links</h2>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="text-foreground font-bold uppercase tracking-widest text-xs mb-4">Contact Us</h2>
            <address className="not-italic space-y-3">
              <div className="flex items-start text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mr-2.5 shrink-0 mt-0.5" style={{ color: GOLD }} aria-hidden="true" />
                <span>{CONTACT_ADDRESS}</span>
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Phone className="w-4 h-4 mr-2.5 shrink-0" style={{ color: GOLD }} aria-hidden="true" />
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Mail className="w-4 h-4 mr-2.5 shrink-0" style={{ color: GOLD }} aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </address>
          </div>

        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/70 gap-2">
          <p>This page is for informational purposes only. All details subject to verification.</p>
          <p>© {year} SBM Pranav Property Developers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
