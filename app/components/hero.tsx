"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-8 px-6 md:px-20 pt-28 md:pt-20 pb-16 md:pb-0"
    >
      {/* KIRI - TEXT */}
      <motion.div
        className="relative z-10 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.p
          className="text-blue-400 font-semibold mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Halo Semua, Saya
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-5 text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Khairil Amanta<br />Hasibuan
        </motion.h1>

        <motion.p
          className="text-gray-300 mb-8 leading-relaxed max-w-md mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Mahasiswa IT yang suka bikin web, aplikasi desktop,
          dan sistem berbasis teknologi.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full transition-all duration-200 shadow-lg shadow-blue-500/30 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hubungi Saya
        </motion.a>
      </motion.div>

      {/* KANAN - FOTO */}
      <motion.div
        className="flex items-center justify-center md:justify-end md:pr-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <div className="relative w-56 h-56 md:w-96 md:h-96">
          <motion.div
            className="absolute inset-4 bg-purple-600 rounded-full blur-2xl opacity-40 -z-10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <img
            src="/profile.jpeg"
            alt="Khairil Amanta Hasibuan"
            className="w-full h-full object-cover object-top rounded-full border-2 border-white/20 shadow-xl"
          />
        </div>
      </motion.div>
    </section>
  );
}