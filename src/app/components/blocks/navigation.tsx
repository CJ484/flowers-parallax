"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const LINKS = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Weddings",
      href: "/weddings",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Our Team",
      href: "/our-team",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ]

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 8);
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="w-full bg-white dark:bg-neutral-950">
      <div
        ref={scrollRef}
        className="w-full overflow-y-auto pt-4"
      >
        <div className="sticky top-4 z-40 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1400px]">
            <motion.nav
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`relative py-1.5 pr-0 pl-0 flex items-center justify-between transition-[background-color,backdrop-filter,border-color,box-shadow,border-radius,padding-left,padding-right] duration-300 ease-out ${
                scrolled
                  ? "rounded-2xl bg-white/70 dark:bg-neutral-950/60 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] pl-4! pr-1.5!"
                  : "rounded-none bg-transparent border border-transparent"
              }`}
            >
              <a href="#" className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold">
                <Image src="/FBB_logo.png" alt="Flowers by Brian Logo" width={100} height={100} />
              </a>

              <div className="hidden md:flex items-center gap-8 px-4">
                {LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 hover:translate-y-[-3px] dark:hover:text-white transition-colors transition-transform"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <button className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-[10px] bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Get Started
                </button>
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="md:hidden grid place-items-center h-10 w-10 rounded-[10px] border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white cursor-pointer"
                  aria-label="Toggle menu"
                >
                  {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </button>
              </div>
            </motion.nav>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="md:hidden mt-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl p-4 flex flex-col gap-1"
                >
                  {LINKS.map((link) => (
                    <a key={link.label} href={link.href} className="text-sm text-neutral-800 dark:text-neutral-200 py-2">
                      {link.label}
                    </a>
                  ))}
                  <Button variant="default" size="default">
                    Schedule a Consultation
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
