import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaGamepad, FaPaintBrush } from "react-icons/fa";
import { profile } from "../data/portfolioData";

function About() {
  // Icon untuk interests
  const interestIcons = {
    "Frontend Development": <FaCode />,
    "UI/UX Design": <FaPaintBrush />,
    "Web Development": <FaCode />,
    "Game Development (VR)": <FaGamepad />,
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50">
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
            Tentang Saya
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Kenalan Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Grid: Kiri foto, Kanan text */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* KIRI — Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Card Sekolah */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 text-xl lg:text-2xl">
                  <FaGraduationCap />
                </div>
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
            </div>

            {/* Card Minat */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-5">
                Minat & Fokus
              </h3>
              <div className="flex flex-wrap gap-3">
                {profile.interests.map((interest) => (
                  <motion.span
                    key={interest}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-sm lg:text-base font-medium rounded-full border border-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {interestIcons[interest]}
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* KANAN — Teks About */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-snug">
              Seorang <span className="text-blue-600">Frontend Developer</span>{" "}
              yang suka membangun pengalaman digital.
            </h3>

            <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
              {profile.about}
            </p>

            <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
              Saya nyaman bekerja dengan tim maupun mandiri, dan selalu antusias
              mempelajari teknologi baru untuk terus berkembang.
            </p>

            {/* Stats mini */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { label: "Proyek", value: "5+" },
                { label: "Sertifikat", value: "4" },
                { label: "Bulan PKL", value: "4" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="text-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm"
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