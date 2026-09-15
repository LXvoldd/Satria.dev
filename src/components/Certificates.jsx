import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAward,
  FaTimes,
  FaCalendarAlt,
  FaBuilding,
  FaFilePdf,
  FaExternalLinkAlt,
  FaStar,
  FaTrophy,
} from "react-icons/fa";
import { certificates } from "../data/portfolioData";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const isPdf = (path) => path?.toLowerCase().endsWith(".pdf");

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <section
      id="certificates"
      className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden"
    >
      {/* ===== Dekorasi Aurora Background ===== */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 pointer-events-none"
      />

      {/* Floating sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          className="absolute text-yellow-400 text-sm pointer-events-none"
          style={{
            left: `${10 + i * 11}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        >
          <FaStar />
        </motion.div>
      ))}

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        {/* ===== JUDUL — Reveal mewah ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 lg:mb-20"
        >
          {/* Trophy icon bounce */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              type: "spring",
              stiffness: 150,
            }}
            className="inline-flex w-16 h-16 lg:w-20 lg:h-20 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-white text-3xl lg:text-4xl shadow-lg shadow-yellow-300 mb-6"
          >
            <FaTrophy />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sm lg:text-base font-semibold text-blue-600 uppercase mb-3"
          >
            Sertifikat & Penghargaan
          </motion.p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Pencapaian Saya
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base lg:text-lg text-slate-500 mt-6 max-w-2xl mx-auto"
          >
            Klik sertifikat untuk melihat detailnya.
          </motion.p>
        </motion.div>

        {/* ===== Grid Certificates ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => {
            const certIsPdf = isPdf(cert.image);

            return (
              <motion.div
                key={cert.title}
                initial={{
                  opacity: 0,
                  y: 100,
                  rotateY: -90,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 1,
                  delay: 0.15 * idx,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                whileHover={{ y: -12, scale: 1.04, rotateY: 5 }}
                onClick={() => setSelectedImage(cert)}
                className="group relative cursor-pointer"
              >
                {/* Glow gradient belakang */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-70 -z-10 blur-2xl transition-opacity duration-500" />

                <div className="relative bg-white rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-2xl group-hover:border-blue-200 transition-all duration-500 overflow-hidden flex flex-col h-full">
                  {/* Shine effect */}
                  <motion.div
                    initial={{ x: "-150%" }}
                    whileHover={{ x: "150%" }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none z-20"
                  />

                  {/* Preview */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                    {cert.image && !certIsPdf ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : certIsPdf ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: -5 }}
                          transition={{ duration: 0.3 }}
                          className="text-6xl lg:text-7xl mb-3"
                        >
                          <FaFilePdf />
                        </motion.div>
                        <span className="text-xs font-bold bg-red-500 px-3 py-1 rounded-full tracking-widest">
                          PDF
                        </span>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90">
                        <FaAward className="text-5xl lg:text-6xl mb-2 opacity-80" />
                        <span className="text-sm font-medium opacity-70">
                          Preview
                        </span>
                      </div>
                    )}

                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-all duration-300 flex items-center justify-center z-10">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 1 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-blue-900/70 backdrop-blur-sm px-4 py-2 rounded-full"
                      >
                        {certIsPdf ? "Lihat PDF" : "Lihat Sertifikat"}
                      </motion.span>
                    </div>

                    {/* Badge tipe */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-blue-700 text-xs font-semibold rounded-full shadow-sm">
                        {cert.type}
                      </span>
                    </div>

                    {/* Sparkle di pojok */}
                    <motion.div
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 1, 0.5],
                        rotate: [0, 20, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: idx * 0.3,
                      }}
                      className="absolute top-3 right-3 text-yellow-300 text-lg z-10 drop-shadow-lg"
                    >
                      <FaStar />
                    </motion.div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-base lg:text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    <div className="mt-auto space-y-2 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-blue-600 flex-shrink-0" />
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-blue-600 flex-shrink-0" />
                        <span>{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 lg:p-8 cursor-pointer"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition-colors z-10"
              aria-label="Tutup"
            >
              <FaTimes />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col cursor-default shadow-2xl"
            >
              <div className="bg-slate-100 flex items-center justify-center overflow-auto">
                {selectedImage.image ? (
                  isPdf(selectedImage.image) ? (
                    <iframe
                      src={selectedImage.image}
                      title={selectedImage.title}
                      className="w-full h-[70vh]"
                    />
                  ) : (
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                  )
                ) : (
                  <div className="w-full py-24 flex flex-col items-center justify-center text-slate-400">
                    <FaAward className="text-7xl mb-4" />
                    <p className="text-lg font-medium">
                      File sertifikat belum tersedia
                    </p>
                  </div>
                )}
              </div>

              <div className="p-6 lg:p-8 border-t border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-3">
                    {selectedImage.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm lg:text-base text-slate-500">
                    <span className="flex items-center gap-2">
                      <FaBuilding className="text-blue-600" />
                      {selectedImage.issuer}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-600" />
                      {selectedImage.year}
                    </span>
                  </div>
                </div>

                {isPdf(selectedImage.image) && (
                  <a
                    href={selectedImage.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Buka di Tab Baru
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certificates;