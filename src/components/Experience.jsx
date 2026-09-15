import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaBuilding,
  FaTimes,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";
import { experiences } from "../data/portfolioData";

function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setSelectedExp(null);
  };

  return (
    <section
      id="experience"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* ===== Dekorasi background parallax ===== */}
      <motion.div
        initial={{ y: -100, x: -100, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ y: 100, x: 100, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-100 rounded-full blur-3xl pointer-events-none"
      />

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        {/* ===== JUDUL — Reveal mewah ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 lg:mb-20"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm lg:text-base font-semibold text-blue-600 uppercase mb-3"
          >
            Pengalaman
          </motion.p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Perjalanan & Pengalaman
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base lg:text-lg text-slate-500 mt-6 max-w-2xl mx-auto"
          >
            Klik kartu untuk melihat detail pengalaman.
          </motion.p>
        </motion.div>

        {/* ===== Timeline ===== */}
        <div className="relative max-w-4xl mx-auto">
          {/* Garis vertikal — tumbuh dari atas ke bawah */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-transparent"
          />

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{
                  opacity: 0,
                  x: isLeft ? -100 : 100,
                  y: 60,
                  scale: 0.9,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 * idx,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex items-start mb-12 lg:mb-16 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${
                    isLeft ? "lg:pr-12" : "lg:pl-12"
                  }`}
                >
                  <motion.div
                    layoutId={`exp-card-${exp.id}`}
                    onClick={() => setSelectedExp(exp)}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-white p-6 lg:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-500 cursor-pointer overflow-hidden"
                  >
                    {/* Glow gradient di belakang */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity duration-500" />

                    {/* Shine effect saat hover */}
                    <motion.div
                      initial={{ x: "-150%" }}
                      whileHover={{ x: "150%" }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
                    />

                    {/* Sparkle stars di pojok */}
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-4 right-4 text-yellow-400 text-xs"
                    >
                      <FaStar />
                    </motion.div>

                    <div className="relative">
                      <motion.h3
                        layoutId={`exp-title-${exp.id}`}
                        className="text-lg lg:text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors"
                      >
                        {exp.title}
                      </motion.h3>

                      <motion.div
                        layoutId={`exp-meta-${exp.id}`}
                        className="flex flex-wrap gap-x-5 gap-y-2 mb-4 text-sm lg:text-base text-slate-500"
                      >
                        <span className="flex items-center gap-2">
                          <FaBuilding className="text-blue-600" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaCalendarAlt className="text-blue-600" />
                          {exp.period}
                        </span>
                      </motion.div>

                      <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.5, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.4 + idx * 0.15 + i * 0.06,
                              type: "spring",
                              stiffness: 200,
                            }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-2.5 py-1 text-xs lg:text-sm font-medium bg-blue-50 text-blue-700 rounded-md border border-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Hint klik */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="text-xs text-blue-600 font-medium mt-4 flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        Klik untuk lihat detail
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.p>
                    </div>
                  </motion.div>
                </div>

                {/* ===== Dot di tengah timeline ===== */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-6 lg:top-8">
                  {/* Pulse ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.3,
                    }}
                    className="absolute inset-0 rounded-full bg-blue-400"
                  />

                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + idx * 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="relative w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white text-lg lg:text-xl shadow-lg shadow-blue-300 border-4 border-white"
                  >
                    <FaBriefcase />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ===== MODAL ZOOM ===== */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedExp(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="fixed inset-0 z-[100] bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4 lg:p-8 cursor-pointer overflow-y-auto"
          >
            <button
              onClick={() => setSelectedExp(null)}
              className="fixed top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition-colors z-10"
              aria-label="Tutup"
            >
              <FaTimes />
            </button>

            <motion.div
              layoutId={`exp-card-${selectedExp.id}`}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full my-8 cursor-default shadow-2xl"
            >
              {/* Header Gradient */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 lg:p-10 relative overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-20 -right-20 w-64 h-64 border-2 border-dashed border-white/20 rounded-full"
                />
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-10 -right-10 w-40 h-40 border-4 border-white rounded-full" />
                  <div className="absolute -bottom-16 -left-8 w-52 h-52 border-4 border-white rounded-full" />
                </div>

                <div className="relative flex items-start gap-5">
                  <motion.div
                    layoutId={`exp-icon-${selectedExp.id}`}
                    className="w-14 h-14 lg:w-16 lg:h-16 flex-shrink-0 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-white text-2xl lg:text-3xl"
                  >
                    <FaBriefcase />
                  </motion.div>

                  <div className="flex-1">
                    <motion.h3
                      layoutId={`exp-title-${selectedExp.id}`}
                      className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight"
                    >
                      {selectedExp.title}
                    </motion.h3>

                    <motion.div
                      layoutId={`exp-meta-${selectedExp.id}`}
                      className="flex flex-wrap gap-x-6 gap-y-2 text-sm lg:text-base text-blue-100"
                    >
                      <span className="flex items-center gap-2">
                        <FaBuilding />
                        {selectedExp.company}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt />
                        {selectedExp.period}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 lg:p-10">
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
                    Tentang Pengalaman
                  </h4>
                  <p className="text-base lg:text-lg text-slate-700 leading-relaxed">
                    {selectedExp.details}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">
                    Yang Saya Kerjakan
                  </h4>
                  <ul className="space-y-3">
                    {selectedExp.responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
                        className="flex items-start gap-3 text-base lg:text-lg text-slate-700"
                      >
                        <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">
                    Teknologi & Skill
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedExp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm lg:text-base font-medium bg-blue-50 text-blue-700 rounded-lg border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Experience;