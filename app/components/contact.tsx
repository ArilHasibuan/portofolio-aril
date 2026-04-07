"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  {
    label: "Email",
    sub: "arilhasibuan75@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=arilhasibuan75@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
    color: "from-blue-500/20 to-blue-600/5",
    border: "hover:border-blue-500/40",
    glow: "rgba(59,130,246,0.15)",
    text: "text-blue-400",
  },
  {
    label: "GitHub",
    sub: "github.com/arilhasibuan",
    href: "https://github.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    color: "from-gray-500/20 to-gray-600/5",
    border: "hover:border-gray-400/40",
    glow: "rgba(156,163,175,0.12)",
    text: "text-gray-300",
  },
  {
    label: "LinkedIn",
    sub: "Khairil Amanta Hasibuan",
    href: "https://www.linkedin.com/in/khairil-amanta-hasibuan/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "from-sky-500/20 to-sky-600/5",
    border: "hover:border-sky-500/40",
    glow: "rgba(14,165,233,0.15)",
    text: "text-sky-400",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
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
        Hubungi Saya
      </motion.p>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Contact
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-400 mb-12 max-w-md text-sm md:text-base leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Punya pertanyaan atau ingin kolaborasi? Jangan ragu untuk menghubungi aku.
      </motion.p>

      {/* Links */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              relative flex items-center gap-4
              bg-gradient-to-br ${link.color}
              border border-white/10 ${link.border}
              rounded-2xl px-5 py-4
              text-left overflow-hidden
              transition-colors duration-300 group
            `}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Glow blob */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 20% 50%, ${link.glow} 0%, transparent 70%)`,
              }}
            />

            {/* Icon */}
            <div className={`${link.text} flex-shrink-0 relative z-10`}>
              {link.icon}
            </div>

            {/* Text */}
            <div className="relative z-10 flex flex-col">
              <span className="text-white font-semibold text-sm">{link.label}</span>
              <span className="text-gray-400 text-xs mt-0.5 group-hover:text-gray-300 transition-colors">
                {link.sub}
              </span>
            </div>

            {/* Arrow */}
            <motion.div
              className="ml-auto text-gray-600 group-hover:text-gray-300 relative z-10 transition-colors"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}