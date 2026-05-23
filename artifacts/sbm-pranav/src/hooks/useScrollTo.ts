import { useCallback, useRef } from "react";
import { NAV_OFFSET_PX } from "@/lib/constants";

/**
 * Returns a stable callback that smoothly scrolls to a section by id,
 * then calls an optional completion handler (e.g. close mobile menu).
 * Uses a ref pattern so `onComplete` changes never invalidate the callback.
 */
export function useScrollTo(onComplete?: () => void) {
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  return useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      window.scrollTo({ top: el.offsetTop - NAV_OFFSET_PX, behavior: "smooth" });
    }
    onCompleteRef.current?.();
  }, []);
}
