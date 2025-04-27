"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroImage from "@/public/hero.jpeg";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="hero-parallax">
      <motion.div style={{ scale, y, opacity }} className="hero-bg">
        <Image
          src={HeroImage}
          alt="Hero Image"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div className="hero-content">
        <motion.h1
          style={{ y: titleY }}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-wider"
        >
          Ticket<span className="text-[hsl(var(--primary))]">Con</span>
        </motion.h1>

        <motion.div
          style={{ y: subtitleY, opacity: subtitleOpacity }}
          className="text-4xl md:text-6xl font-bold tracking-wide"
        >
          the new ticket website is out now
        </motion.div>
      </div>
    </div>
  );
}
