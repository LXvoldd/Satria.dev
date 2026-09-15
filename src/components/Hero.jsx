import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
  FaCircle,
  FaCode,
  FaStar,
} from "react-icons/fa";
import { profile, socials } from "../data/portfolioData";
import profileImage from "../assets/profile.jpg";
import Particles from "./Particles";

function Hero() {
  const allSocials = [
    ...socials,
    {
      name: "GitHub",
      url: "https://github.com/LXvoldd",
      icon: "github",
    },
  ];

  const iconMap = {
    whatsapp: <FaWhatsapp />,
    instagram: <FaInstagram />,
    email: <FaEnvelope />,
    github: <FaGithub />,
  };

  const stats = [
    { value: "7+", label: "Proyek" },
    { value: "4", label: "Sertifikat" },
    { value: "4", label: "Bulan PKL" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-28"
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Blob 1 — kiri atas */}
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40"
        />

        {/* Blob 2 — kanan bawah */}
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] bg-blue-100 rounded-full blur-3xl opacity-50"
        />

        {/* Blob 3 — tengah */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-100 rounded-full blur-3xl"
        />

        {/* ===== GRID PATTERN — Layer 1 (utama, lebih jelas) ===== */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1], // smooth easeInOutSine
          }}
          className="absolute -inset-[120px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37, 99, 235, 0.4) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(37, 99, 235, 0.4) 1.5px, transparent 1.5px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ===== GRID PATTERN — Layer 2 (halus, gerak kebalikan) ===== */}
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
          }}
          className="absolute -inset-[120px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37, 99, 235, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* ===== GRID PATTERN — Layer 3 (dots kecil, gerak diagonal) ===== */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
          }}
          className="absolute -inset-[120px]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(37, 99, 235, 0.35) 1.5px, transparent 1.5px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Gradient overlay — lebih soft, biar grid keliatan */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60 pointer-events-none" />
      </div>

      <Particles />

      <div className="w-full px-6 lg:px-16 xl:px-24 grid md:grid-cols-2 gap-6 lg:gap-4 items-center relative z-10">
        {/* ===== KIRI — Text ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1 text-center md:text-left md:pl-16 lg:pl-24 xl:pl-32"
        >
          {/* Badge Available */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-emerald-700">
              Available for Work
            </span>
          </motion.div>

          {/* Fullstack Developer — DIAM */}
          <motion.p
            variants={itemVariants}
            className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-500 tracking-wide mb-3"
          >
            {profile.title}
          </motion.p>

          {/* Hello, I'm */}
          <motion.p
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-light text-slate-700 leading-tight mb-2"
          >
            Hello, I'm
          </motion.p>

          {/* NAMA — Typing sekali, 2 baris */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-6xl xl:text-7xl font-bold text-[#172554] leading-[1.1] mb-6"
          >
            <TypeAnimation
              sequence={["Satria", 400, "Satria\nZjulian Rahayu"]}
              wrapper="span"
              speed={300}
              cursor={true}
              repeat={0}
              style={{ whiteSpace: "pre-line" }}
            />
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0"
          >
            {profile.tagline}
          </motion.p>

          {/* Tombol + Sosmed */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 lg:gap-5 justify-center md:justify-start mb-8"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-6 lg:px-7 py-3 lg:py-3.5 border-2 border-blue-600 text-blue-600 text-sm lg:text-base font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 tracking-widest"
            >
              LIHAT PROYEK
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex gap-3">
              {allSocials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.15, y: -5, rotate: 10 }}
                  className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  {iconMap[social.icon]}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 justify-center md:justify-start pt-6 border-t border-slate-200"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.4 + i * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center md:text-left cursor-default"
              >
                <p className="text-3xl lg:text-4xl font-bold text-blue-700">
                  {stat.value}
                </p>
                <p className="text-sm lg:text-base text-slate-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ===== KANAN — Foto ===== */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center md:justify-center md:pl-12 lg:pl-20 xl:pl-28"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1.1, 1.2, 1.1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-blue-200 blur-2xl"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 lg:-inset-6 rounded-full border-2 border-dashed border-blue-400"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 lg:-inset-12 rounded-full pointer-events-none z-20"
            >
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 shadow-lg shadow-blue-400"
              />
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2 shadow-lg shadow-blue-400"
              />
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute left-0 top-1/2 w-3 h-3 bg-blue-600 rounded-full -translate-y-1/2 shadow-lg shadow-blue-400"
              />
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                className="absolute right-0 top-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-y-1/2 shadow-lg shadow-blue-400"
              />
            </motion.div>

            {[
              { top: "10%", left: "5%", delay: 0 },
              { top: "20%", right: "5%", delay: 0.5 },
              { bottom: "15%", left: "8%", delay: 1 },
              { bottom: "10%", right: "10%", delay: 1.5 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [0.5, 1.2, 0.5],
                  opacity: [0.3, 1, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: pos.delay,
                  ease: "easeInOut",
                }}
                className="absolute text-yellow-400 text-lg pointer-events-none z-20"
                style={pos}
              >
                <FaStar />
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[34rem] lg:h-[34rem] rounded-full overflow-hidden border-4 border-white shadow-2xl cursor-pointer z-10"
            >
              <motion.img
                src={profileImage}
                alt={profile.name}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full ring-4 ring-blue-400/0 group-hover:ring-blue-400/60 transition-all duration-500 pointer-events-none" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 -left-4 lg:-left-8 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 z-30"
            >
              <FaCode className="text-blue-600" />
              <span className="text-sm font-semibold text-slate-700">
                Fullstack
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-8 -right-4 lg:-right-8 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 z-30"
            >
              <FaCircle className="text-emerald-500 text-[8px]" />
              <span className="text-sm font-semibold text-slate-700">
                Open to Work
              </span>
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
          opacity: { delay: 1.5, duration: 0.6 },
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