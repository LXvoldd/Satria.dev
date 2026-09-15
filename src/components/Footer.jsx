import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
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

  const mainNavLinks = navLinks.slice(0, 5);

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      {/* Dekorasi background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-6 lg:px-12 xl:px-20 pt-16 lg:pt-20 pb-8">
        {/* ===== GRID UTAMA ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Kolom 1 — Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <a
              href="#home"
              className="inline-block text-3xl lg:text-4xl font-bold text-white mb-5"
            >
              Satria<span className="text-blue-500">.dev</span>
            </a>
            <p className="text-sm lg:text-base leading-relaxed text-slate-400 mb-6 max-w-md">
              {profile.tagline}
            </p>

            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  {iconMap[social.icon]}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Kolom 2 — Navigasi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
              Navigasi
            </h4>
            <ul className="space-y-3.5">
              {mainNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-sm lg:text-base text-slate-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-blue-500 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kolom 3 — Kontak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-sm lg:text-base text-slate-400 hover:text-blue-500 transition-colors duration-300 group"
              >
                <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-800 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <FaEnvelope className="text-sm" />
                </span>
                <span className="break-all">{contact.email}</span>
              </a>
              <a
                href={`https://wa.me/62${contact.whatsapp.slice(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm lg:text-base text-slate-400 hover:text-blue-500 transition-colors duration-300 group"
              >
                <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-800 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <FaWhatsapp className="text-sm" />
                </span>
                <span>{contact.whatsapp}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="border-t border-slate-800" />

        {/* ===== BOTTOM BAR ===== */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
          {/* Copyright — SIMPLE 1 BARIS */}
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
          </p>

          {/* Tombol Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Kembali ke atas"
            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white text-sm font-medium transition-colors duration-300"
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