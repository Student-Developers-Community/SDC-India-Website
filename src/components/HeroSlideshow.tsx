"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SLIDES = [
  "/assets/blog/sdc-india-logo.jpeg",
  "/assets/events/hash-it-out-2.jpg",
  "/assets/blog/community-1.jpeg",
];

const INTERVAL_MS = 6000;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${SLIDES[index]})` }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.28, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.6, ease: [0.22, 0.61, 0.36, 1] }}
        />
      </AnimatePresence>

      {/* Vignette + dark gradient for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(8,8,8,.55) 0%, rgba(8,8,8,.88) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 15% 50%, rgba(232,67,147,.13) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 85% 30%, rgba(168,85,247,.1) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 50% 85%, rgba(249,115,22,.08) 0%, transparent 60%)",
        }}
      />
      {/* Subtle grid mesh */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.024) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.024) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }}
      />
    </div>
  );
}
