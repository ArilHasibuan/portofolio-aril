"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > 50);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/30 backdrop-blur-md border-b border-white/10"
          : "bg-blue-900/80"
      }`}
    >
      {/*
        ┌─────────────────────────────────────────────────┐
        │  PADDING NAVBAR (tinggi navbar)                 │
        │  Ganti py-6 → lebih tinggi, py-4 → lebih kecil │
        └─────────────────────────────────────────────────┘
        px-8 md:px-20 → jarak kiri/kanan
      */}
      <div className="flex justify-between items-center px-8 md:px-20 py-6 w-full">

        {/*
          ┌────────────────────────────────────────┐
          │  UKURAN NAMA / LOGO (kiri)             │
          │  text-lg  = 18px                       │
          │  text-xl  = 20px  ← sekarang           │
          │  text-2xl = 24px                       │
          └────────────────────────────────────────┘
        */}
        <a href="#home" className="font-bold text-white text-xl tracking-tight">
          Khairil Amanta Hasibuan
        </a>

        {/*
          ┌────────────────────────────────────────┐
          │  UKURAN LINK MENU (kanan)              │
          │  text-sm  = 14px                       │
          │  text-base= 16px  ← sekarang           │
          │  text-lg  = 18px                       │
          │                                        │
          │  gap-8 → jarak antar menu item         │
          │  gap-10 → lebih renggang               │
          └────────────────────────────────────────┘
        */}
        <div className="flex gap-10 text-base text-gray-300">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="hover:text-white transition"
            >
              {item}
            </motion.a>
          ))}
        </div>

      </div>
    </motion.nav>
  );
}