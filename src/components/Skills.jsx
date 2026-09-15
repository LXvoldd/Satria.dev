import { motion } from "framer-motion";
import {
  FaCode,
  FaLayerGroup,
  FaTools,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";
import { skills } from "../data/portfolioData";

function Skills() {
  const categories = [
    {
      title: "Bahasa Pemrograman",
      icon: <FaCode />,
      items: skills.languages,
      color: "blue",
    },
    {
      title: "Framework & Library",
      icon: <FaLayerGroup />,
      items: skills.frameworks,
      color: "purple",
    },
    {
      title: "Tools & Platform",
      icon: <FaTools />,
      items: skills.tools,
      color: "emerald",
    },
  ];

  const colorMap = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      badgeBg: "bg-blue-50",
      badgeText: "text-blue-700",
      badgeBorder: "border-blue-100",
      hoverBg: "hover:bg-blue-600",
      glow: "group-hover:shadow-blue-200",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      badgeBg: "bg-purple-50",
      badgeText: "text-purple-700",
      badgeBorder: "border-purple-100",
      hoverBg: "hover:bg-purple-600",
      glow: "group-hover:shadow-purple-200",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-700",
      badgeBorder: "border-emerald-100",
      hoverBg: "hover:bg-emerald-600",
      glow: "group-hover:shadow-emerald-200",
    },
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Dekorasi background */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"
      />
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-60 pointer-events-none"
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
            Keahlian
          </motion.p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Tech Stack yang Saya Kuasai
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* ===== Grid 3 Kolom — Flip + Glow ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {categories.map((category, idx) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 80, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 * idx,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className={`group relative bg-white p-6 lg:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl ${colors.glow} hover:border-slate-200 transition-all duration-500`}
              >
                {/* Glow effect saat hover */}
                <div
                  className={`absolute inset-0 rounded-2xl ${colors.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative">
                  {/* Icon & Judul */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl ${colors.bg} ${colors.text} text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-lg lg:text-xl font-bold text-slate-800">
                      {category.title}
                    </h3>
                  </div>

                  {/* Badge items — stagger + spring */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.3, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.4 + i * 0.08,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        whileHover={{ scale: 1.15, y: -3, rotate: -2 }}
                        className={`px-3 lg:px-4 py-1.5 lg:py-2 text-sm lg:text-base font-medium rounded-lg ${colors.badgeBg} ${colors.badgeText} border ${colors.badgeBorder} ${colors.hoverBg} hover:text-white transition-all duration-300 cursor-default`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===== Soft Skills — Reveal dari bawah + stagger ===== */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-100 relative overflow-hidden"
        >
          {/* Dekorasi */}
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            viewport={{ once: false }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-64 h-64 border-2 border-dashed border-blue-200 rounded-full opacity-40 pointer-events-none"
          />

          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 150,
                }}
                className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl bg-blue-600 text-white text-xl lg:text-2xl shadow-lg shadow-blue-200"
              >
                <FaUsers />
              </motion.div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-800">
                  Soft Skills
                </h3>
                <p className="text-sm lg:text-base text-slate-500">
                  Kemampuan interpersonal yang saya kembangkan
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.softSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -40, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ x: 8, scale: 1.03 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm lg:text-base font-medium text-slate-700 group-hover:text-blue-700 transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;