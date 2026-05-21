import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/useScrollTo";
import logoImg from "@assets/SBM_Pranav_1779330703662.png";

const NAV_LINKS = [
  { id: "location", label: "Location" },
  { id: "usecases", label: "Opportunities" },
  { id: "investment", label: "Investment" },
  { id: "gallery", label: "Gallery" },
] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const scrollTo = useScrollTo(closeMobileMenu);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/96 backdrop-blur-md border-b border-border py-2 shadow-sm"
            : "bg-transparent py-3"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <img
            src={logoImg}
            alt="SBM Pranav Property Developers — Home"
            className="h-14 w-auto object-contain cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          <div className="hidden md:flex items-center space-x-7">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium tracking-wide"
                aria-label={`Go to ${label} section`}
              >
                {label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5 rounded-none text-sm h-9"
            >
              Schedule Visit
            </Button>
          </div>

          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden flex flex-col space-y-5"
          >
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-base text-left text-muted-foreground hover:text-primary py-2 border-b border-border/50 transition-colors"
              >
                {label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground font-semibold py-5 w-full rounded-none mt-3"
            >
              Schedule Site Visit
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
