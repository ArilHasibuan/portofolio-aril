"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const frontEnd = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

const backEnd = [
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

function SkillCard({ skill, delay }: { skill: { name: string; icon: string }; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2 group"
      initial={{ opacity: 0, y: 30, scale: 0.85 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="
          relative w-16 h-16 md:w-20 md:h-20
          rounded-2xl flex items-center justify-center
          bg-white/5 border border-white/10
          backdrop-blur-sm
          cursor-default
          overflow-hidden
        "
        whileHover={{ scale: 1.12, borderColor: "rgba(96,165,250,0.5)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "radial-gradient(circle at center, rgba(96,165,250,0.15) 0%, transparent 70%)",
          }}
        />
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-9 h-9 md:w-11 md:h-11 object-contain relative z-10 drop-shadow-md"
        />
      </motion.div>
      <span className="text-xs text-gray-400 group-hover:text-blue-300 transition-colors duration-200 font-medium tracking-wide">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-24 px-4 text-center"
      ref={ref}
    >
      {/* Label */}
      <motion.p
        className="text-blue-400 font-semibold mb-2 tracking-widest text-sm uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Tentang Saya
      </motion.p>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        About
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-400 leading-relaxed max-w-xl mb-14 text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Aku mahasiswa IT yang punya pengalaman bikin web, aplikasi desktop,
        dan sistem pendukung keputusan. Suka eksplorasi teknologi baru dan
        senang mengerjakan proyek yang memberikan dampak nyata.
      </motion.p>

      {/* Skills */}
      <div className="w-full max-w-2xl flex flex-col gap-10">
        {/* Front End */}
        <div>
          <motion.p
            className="text-xs uppercase tracking-[0.2em] text-blue-400/70 mb-5 font-semibold"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            — Front End —
          </motion.p>
          <div className="flex flex-wrap justify-center gap-6">
            {frontEnd.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} delay={0.35 + i * 0.07} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="w-px h-8 bg-white/10 mx-auto"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={inView ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.75 }}
        />

        {/* Back End */}
        <div>
          <motion.p
            className="text-xs uppercase tracking-[0.2em] text-purple-400/70 mb-5 font-semibold"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            — Back End —
          </motion.p>
          <div className="flex flex-wrap justify-center gap-6">
            {backEnd.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} delay={0.85 + i * 0.07} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}