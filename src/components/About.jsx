import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaGamepad, FaPaintBrush } from "react-icons/fa";
import { profile } from "../data/portfolioData";

function About() {
  const interestIcons = {
    "Full Stack Development": <FaCode />,
    "UI/UX Design": <FaPaintBrush />,
    "Web Development": <FaCode />,
    "Game Development (VR)": <FaGamepad />,
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Dekorasi background — parallax subtle */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none"
      />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-40 pointer-events-none"
      />

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        {/* ===== JUDUL SECTION — Reveal dari bawah + scale ===== */}
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
            Tentang Saya
          </motion.p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Kenalan Lebih Dekat
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* ===== GRID ===== */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ===== KIRI — Info Cards (slide dari kiri + stagger) ===== */}
          <div className="space-y-6">
            {/* Card Pendidikan */}
            <motion.div
              initial={{ opacity: 0, x: -80, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 text-xl lg:text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors"
                >
                  <FaGraduationCap />
                </motion.div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-1">
                    Pendidikan
                  </h3>
                  <p className="text-sm lg:text-base text-slate-600">
                    {profile.school}
                  </p>
                  <p className="text-sm lg:text-base text-slate-500 mt-1">
                    {profile.status}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card Minat */}
            <motion.div
              initial={{ opacity: 0, x: -80, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-5">
                Minat & Fokus
              </h3>
              <div className="flex flex-wrap gap-3">
                {profile.interests.map((interest, i) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-sm lg:text-base font-medium rounded-full border border-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {interestIcons[interest]}
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ===== KANAN — Teks About (slide dari kanan + stagger) ===== */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl lg:text-3xl font-bold text-slate-800 leading-snug"
            >
              Seorang <span className="text-blue-600">Full Stack Developer</span>{" "}
              yang suka membangun pengalaman digital.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base lg:text-lg text-slate-600 leading-relaxed"
            >
              {profile.about}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base lg:text-lg text-slate-600 leading-relaxed"
            >
              Saya nyaman bekerja dengan tim maupun mandiri, dan selalu antusias
              mempelajari teknologi baru untuk terus berkembang.
            </motion.p>

            {/* Stats — bounce + stagger */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { label: "Proyek", value: "5+" },
                { label: "Sertifikat", value: "4" },
                { label: "Bulan PKL", value: "4" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + i * 0.15,
                    type: "spring",
                    stiffness: 150,
                  }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="text-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-default"
                >
                  <p className="text-2xl lg:text-3xl font-bold text-blue-600">
                    {stat.value}
                  </p>
                  <p className="text-xs lg:text-sm text-slate-500 mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;