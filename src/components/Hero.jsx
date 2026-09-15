import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { profile, socials } from "../data/portfolioData";
import profileImage from "../assets/profile.jpg";
import Particles from "./Particles";

function Hero() {
  const iconMap = {
    whatsapp: <FaWhatsapp />,
    instagram: <FaInstagram />,
    email: <FaEnvelope />,
    github: <FaGithub />,
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-28"
    >
      {/* ===== BACKGROUND DEKORASI ===== */}
      <div className="absolute inset-0 -z-10">
        {/* Blob 1 — kiri atas (bergerak) */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40"
        />

        {/* Blob 2 — kanan bawah (bergerak) */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] bg-blue-100 rounded-full blur-3xl opacity-50"
        />

        {/* Blob 3 — tengah (pulse) */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-100 rounded-full blur-3xl"
        />
      </div>

      {/* Particles */}
      <Particles />

      <div className="w-full px-6 lg:px-12 xl:px-20 grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* KIRI — Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          {/* Salam */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-slate-500 mb-3"
          >
            Halo, saya 👋
          </motion.p>

          {/* Nama */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight mb-4"
          >
            {profile.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-5"
          >
            {profile.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0"
          >
            {profile.tagline}
          </motion.p>

          {/* Tombol CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
          >
            <a
              href="#projects"
              className="px-6 lg:px-8 py-3 lg:py-3.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="px-6 lg:px-8 py-3 lg:py-3.5 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-0.5"
            >
              Hubungi Saya
            </a>
          </motion.div>

          {/* Sosmed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                {iconMap[social.icon]}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* KANAN — Foto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Ring gradient belakang foto */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-blue-200 blur-2xl opacity-40 scale-110" />

            {/* Foto */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={profileImage}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative dots di sekitar foto */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full"
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 shadow-lg shadow-blue-300" />
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2 shadow-lg shadow-blue-300" />
              <div className="absolute left-0 top-1/2 w-3 h-3 bg-blue-600 rounded-full -translate-y-1/2 shadow-lg shadow-blue-300" />
              <div className="absolute right-0 top-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-y-1/2 shadow-lg shadow-blue-300" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.6 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-blue-600 transition-colors z-10"
        aria-label="Scroll ke bawah"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.a>
    </section>
  );
}

export default Hero;