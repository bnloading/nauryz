// src/components/bottom-bar/BottomBar.jsx
import React from "react";
import { motion } from "framer-motion";
import { Home, CalendarHeart, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { id: "home", icon: Home, label: "Басты бет", href: "#home" },
  { id: "event", icon: CalendarHeart, label: "Іс-шара", href: "#event" },
  { id: "location", icon: MapPin, label: "Мекенжай", href: "#location" },
];

/**
 * BottomBar - төменгі навигациялық панельді көрсететін React функционалдық компоненті.
 *
 * Бұл компонент кіру анимациясы үшін Framer Motion қолданады, мөлдірлік және
 * тік қозғалыс үшін біркелкі өтулерді қамтамасыз етеді. Ол белсенді күйге байланысты
 * көрінісін өзгертетін навигациялық мәзір элементтерін көрсетеді.
 *
 * @component
 * @example
 * // Қолдану үлгісі:
 * <BottomBar />
 *
 * @returns {JSX.Element} Анимацияланған төменгі навигациялық панельді қамтитын JSX элементі.
 */
const BottomBar = () => {
  const [active, setActive] = React.useState("home");

  React.useEffect(() => {
    const onScroll = () => {
      const current = [...menuItems].reverse().find((item) => {
        const section = document.querySelector(item.href);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 140;
      });

      if (current?.id && current.id !== active) {
        setActive(current.id);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  return (
    <motion.div
      className="fixed bottom-4 transform -translate-x-1/2 z-50 w-full px-4 max-w-[430px]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 90, damping: 16 }}
    >
      <div className="relative overflow-hidden rounded-[28px] border border-white/45 bg-white/20 px-3 py-2.5 shadow-[0_8px_32px_rgba(17,24,39,0.22)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/15">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/45 via-white/15 to-white/5" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-y-3 -left-1/3 w-1/3 rounded-full bg-white/35 blur-xl"
          animate={{ x: [0, 420, 0] }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        />

        <nav className="relative flex items-center justify-between gap-1">
          {menuItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.id)}
              className={cn(
                "relative flex flex-1 flex-col items-center justify-center rounded-2xl px-2 py-2 transition-all duration-300",
                active === item.id ? "text-gray-800" : "text-gray-600",
              )}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              {active === item.id && (
                <motion.span
                  layoutId="iphone-active-pill"
                  className="absolute inset-0 rounded-2xl border border-white/70 bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_6px_18px_rgba(15,23,42,0.12)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <item.icon
                className={cn(
                  "relative z-10 mb-0.5 h-[18px] w-[18px] transition-all duration-300 sm:mb-1 sm:h-5 sm:w-5",
                  active === item.id
                    ? "stroke-gray-800 drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
                    : "stroke-gray-600",
                )}
              />
              <span
                className={cn(
                  "relative z-10 line-clamp-1 text-[10px] font-body font-medium tracking-wide transition-all duration-300 sm:text-xs",
                  active === item.id
                    ? "scale-105 font-semibold text-gray-800"
                    : "scale-100",
                )}
              >
                {item.label}
              </span>
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default BottomBar;
