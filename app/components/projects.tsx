"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "SPK MOORA",
    desc: "Sistem pendukung keputusan menggunakan metode MOORA berbasis web.",
    tech: ["PHP", "MySQL"],
  },
  {
    title: "Web Gudang",
    desc: "Sistem manajemen barang masuk dan keluar untuk gudang.",
    tech: ["Laravel", "MySQL"],
  },
  {
    title: "Aplikasi Sewa Mobil",
    desc: "Aplikasi desktop untuk manajemen penyewaan mobil.",
    tech: ["Java", "NetBeans"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-24" ref={ref}>
      <motion.p
        className="text-blue-400 font-semibold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Yang Pernah Kubuat
      </motion.p>

      <motion.h2
        className="text-4xl font-bold text-white mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-200 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0, delay: 0 + i * 0.15 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="font-bold text-white text-lg mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}