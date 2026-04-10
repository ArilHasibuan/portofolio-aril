"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Sistem Pendukung Keputusan Pemilihan Mahasiswa Berprestasi Berbasis Metode MOORA",
    desc: "Aplikasi ini merupakan Sistem Pendukung Keputusan (SPK) berbasis Android yang dirancang untuk membantu proses seleksi mahasiswa berprestasi secara objektif, transparan, dan efisien dengan menerapkan metode MOORA (Multi-Objective Optimization on the Basis of Ratio Analysis). Sistem ini mengolah berbagai kriteria penting seperti IPK, kehadiran, nilai tugas, partisipasi diskusi, dan status pernikahan menggunakan pendekatan pembobotan dan normalisasi data untuk menghasilkan peringkat mahasiswa terbaik secara akurat. Dengan dukungan database SQLite dan antarmuka yang interaktif, aplikasi ini memungkinkan pengguna untuk mengelola data alternatif, kriteria, serta melakukan perhitungan otomatis hingga menghasilkan rekomendasi keputusan yang terukur dan berbasis data.",
    image: "/moora.jpeg",
    tech: ["Java", "Android Studio", "SQLite"],
    link: "#",
    type: "Mobile App",
  },
  {
    title: "Web Gudang",
    desc: "Sistem manajemen barang masuk dan keluar untuk gudang dengan fitur laporan dan tracking stok real-time.",
    image: "/projects/web-gudang.png",
    tech: ["Laravel", "MySQL"],
    link: "#",
    type: "Web App",
  },
  {
    title: "Sistem Informasi Manajemen Rental Mobil (Easy Rent Car Company)",
    desc: "Aplikasi ini merupakan sistem informasi berbasis desktop yang dirancang untuk mengelola proses bisnis rental mobil secara terintegrasi, mulai dari pengolahan data kendaraan, pelanggan, hingga transaksi penyewaan dan pengembalian. Sistem dibangun menggunakan Java dengan konsep Pemrograman Berorientasi Objek (OOP) serta didukung oleh database MySQL untuk memastikan pengelolaan data yang terstruktur dan efisien. Fitur utama meliputi pencatatan transaksi sewa, perhitungan otomatis total biaya dan denda keterlambatan, serta pembuatan laporan yang membantu meningkatkan efisiensi operasional dan akurasi data dalam perusahaan rental mobil.",
    image: "/rental.png",
    tech: ["Java", "NetBeans,", "MySQL"],
    link: "#",
    type: "Desktop App",
  },
];

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-colors duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.2 + index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
    >
      {/* Gambar */}
      <div className="relative w-full h-48 overflow-hidden bg-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement?.classList.add(
              "flex",
              "items-center",
              "justify-center"
            );
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-bold select-none pointer-events-none">
          {project.title[0]}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-3 left-3">
          <span className="text-xs bg-blue-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-full font-medium">
            {project.type}
          </span>
        </div>
      </div>

      {/* Konten */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-white text-xl mb-2">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {project.desc}
        </p>

        {/* BAGIAN BAWAH (FIXED) */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium group/link"
          >
            Lihat Project
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center py-24 px-4"
    >
      <motion.p
        className="text-blue-400 font-semibold mb-2 tracking-widest text-sm uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        Yang Pernah Kubuat
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        Projects
      </motion.h2>

      <motion.p
        className="text-gray-400 text-sm md:text-base mb-14 text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        Beberapa project yang pernah aku kerjakan selama kuliah dan belajar mandiri.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl items-stretch">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
}