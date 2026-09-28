import { FunctionComponent, useState, useEffect } from "react";

const ScrollToTopButton: FunctionComponent = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-8 right-8 z-50 bg-[#dc143c] text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(220,20,60,0.4)] hover:bg-[#ff0044] hover:shadow-[0_6px_20px_rgba(220,20,60,0.6)] hover:-translate-y-1 transition-all duration-300 border-none cursor-pointer ${
        showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
