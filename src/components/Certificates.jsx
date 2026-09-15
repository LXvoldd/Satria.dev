import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaTimes, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { certificates } from "../data/portfolioData";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Tutup modal dengan tombol ESC
  const handleKeyDown = (e) => {
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <section id="certificates" className="py-20 lg:py-28 bg-slate-50">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-20"
        >
          <p className="text-sm lg:text-base font-semibold text-blue-600 tracking-widest uppercase mb-3">
            Sertifikat & Penghargaan
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Pencapaian Saya
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-base lg:text-lg text-slate-500 mt-6 max-w-2xl mx-auto">
            Klik sertifikat untuk melihat detailnya.
          </p>
        </motion.div>

        {/* Grid Certificates */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 * idx }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(cert)}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
            >
              {/* Preview Gambar */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                ) : null}

                {/* Fallback kalau gambar gak ada */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-white/90"
                  style={{ display: cert.image ? "none" : "flex" }}
                >
                  <FaAward className="text-5xl lg:text-6xl mb-2 opacity-80" />
                  <span className="text-sm font-medium opacity-70">
                    Preview
                  </span>
                </div>

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/30 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-blue-900/60 backdrop-blur-sm px-4 py-2 rounded-full">
                    Lihat Sertifikat
                  </span>
                </div>

                {/* Badge tipe */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-blue-700 text-xs font-semibold rounded-full shadow-sm">
                    {cert.type}
                  </span>
                </div>
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
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
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
            className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8 cursor-pointer"
          >
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition-colors"
              aria-label="Tutup"
            >
              <FaTimes />
            </button>

            {/* Konten Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[85vh] flex flex-col cursor-default"
            >
              {/* Gambar */}
              <div className="bg-slate-100 flex items-center justify-center overflow-hidden">
                {selectedImage.image ? (
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[60vh] object-contain"
                  />
                ) : (
                  <div className="w-full py-24 flex flex-col items-center justify-center text-slate-400">
                    <FaAward className="text-7xl mb-4" />
                    <p className="text-lg font-medium">
                      Gambar sertifikat belum tersedia
                    </p>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6 lg:p-8 border-t border-slate-100">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certificates;