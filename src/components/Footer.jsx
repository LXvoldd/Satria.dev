import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
  FaStar,
} from "react-icons/fa";
import { profile, socials, navLinks, contact } from "../data/portfolioData";

function Footer() {
  const iconMap = {
    whatsapp: <FaWhatsapp />,
    instagram: <FaInstagram />,
    email: <FaEnvelope />,
    github: <FaGithub />,
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Confetti effect
  const celebrate = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#fbbf24", "#10b981"];

    // Confetti dari kiri
    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      // Confetti dari kanan
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const mainNavLinks = navLinks.slice(0, 5);

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      {/* ===== Dekorasi Aurora ===== */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Sparkle stars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
          className="absolute text-yellow-400/50 text-sm pointer-events-none"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        >
          <FaStar />
        </motion.div>
      ))}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative w-full px-6 lg:px-12 xl:px-20 pt-16 lg:pt-20 pb-8">
        {/* ===== GRID UTAMA ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Kolom 1 — Brand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="inline-block text-3xl lg:text-4xl font-bold text-white mb-5"
            >
              Satria
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                .dev
              </span>
            </motion.a>
            <p className="text-sm lg:text-base leading-relaxed text-slate-400 mb-6 max-w-md">
              {profile.tagline}
            </p>

            {/* Sosmed */}
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.1,
                    type: "spring",
                    stiffness: 150,
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -6,
                    rotate: [0, -10, 10, 0],
                  }}
                  className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 overflow-hidden"
                >
                  {/* Shine */}
                  <div className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                  {iconMap[social.icon]}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Kolom 2 — Navigasi */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-3"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
              Navigasi
            </h4>
            <ul className="space-y-3.5">
              {mainNavLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-sm lg:text-base text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Kolom 3 — Kontak */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-4"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
              Hubungi Saya
            </h4>
            <p className="text-sm lg:text-base text-slate-400 mb-6 leading-relaxed">
              Terbuka untuk peluang kerja, kolaborasi, atau sekadar berdiskusi
              soal teknologi.
            </p>

            <div className="space-y-3">
              <motion.a
                href={`mailto:${contact.email}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm lg:text-base text-slate-400 hover:text-blue-400 transition-colors duration-300 group"
              >
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white transition-colors duration-300"
                >
                  <FaEnvelope className="text-sm" />
                </motion.span>
                <span className="break-all">{contact.email}</span>
              </motion.a>
              <motion.a
                href={`https://wa.me/62${contact.whatsapp.slice(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm lg:text-base text-slate-400 hover:text-blue-400 transition-colors duration-300 group"
              >
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white transition-colors duration-300"
                >
                  <FaWhatsapp className="text-sm" />
                </motion.span>
                <span>{contact.whatsapp}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* ===== DIVIDER dengan gradient ===== */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"
        />

        {/* ===== BOTTOM BAR ===== */}
<div className="pt-8 flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-4">
  {/* Copyright — kiri */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="text-xs sm:text-sm font-medium tracking-widest uppercase text-slate-500 text-center lg:text-left lg:flex-1"
  >
    © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
  </motion.p>

  {/* Tombol Celebrate 🎉 — tengah */}
  <motion.button
    onClick={celebrate}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: 0.4,
      type: "spring",
      stiffness: 200,
    }}
    whileHover={{ scale: 1.1, y: -4, rotate: [0, -5, 5, 0] }}
    whileTap={{ scale: 0.95 }}
    className="group relative flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium shadow-lg shadow-blue-900/50 hover:shadow-xl hover:shadow-purple-900/50 transition-all duration-500 overflow-hidden"
  >
    <div className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
    <span className="relative">🎉</span>
    <span className="relative">Celebrate</span>
  </motion.button>

  {/* Tombol Back to Top — kanan */}
  <motion.button
    onClick={scrollToTop}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: 0.5,
      type: "spring",
      stiffness: 200,
    }}
    whileHover={{ scale: 1.08, y: -4 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Kembali ke atas"
    className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white text-sm font-medium transition-colors duration-300 lg:flex-1 lg:justify-end lg:max-w-fit"
  >
    <span className="text-xs">Kembali ke atas</span>
    <FaArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform duration-300" />
  </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;