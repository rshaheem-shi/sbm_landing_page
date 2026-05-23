import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/useScrollTo";
import { WA_LINK } from "@/lib/constants";

export default function FloatingWidgets() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        style={{ width: 52, height: 52, boxShadow: "0 4px 16px rgba(37,211,102,0.45)" }}
        aria-label="Chat on WhatsApp — opens in new tab"
      >
        <MessageSquare className="w-6 h-6" aria-hidden="true" />
      </a>

      {/* Mobile sticky CTA — shown after scrolling past hero */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border p-3 shadow-lg"
            role="complementary"
            aria-label="Quick action bar"
          >
            <Button
              onClick={() => scrollTo("contact")}
              className="w-full bg-primary text-primary-foreground font-bold h-11 text-sm rounded-none"
            >
              Schedule Your Site Visit <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
