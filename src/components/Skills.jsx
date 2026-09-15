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
  // Data kategori skill
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

  // Warna dinamis per kategori
  const colorMap = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      badgeBg: "bg-blue-50",
      badgeText: "text-blue-700",
      badgeBorder: "border-blue-100",
      hoverBg: "hover:bg-blue-600",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      badgeBg: "bg-purple-50",
      badgeText: "text-purple-700",
      badgeBorder: "border-purple-100",
      hoverBg: "hover:bg-purple-600",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-700",
      badgeBorder: "border-emerald-100",
      hoverBg: "hover:bg-emerald-600",
    },
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-white">
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
            Keahlian
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Tech Stack yang Saya Kuasai
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Grid 3 kolom */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {categories.map((category, idx) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                whileHover={{ y: -8 }}
                className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300"
              >
                {/* Icon & Judul */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl ${colors.bg} ${colors.text} text-xl lg:text-2xl`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-slate-800">
                    {category.title}
                  </h3>
                </div>

                {/* List item */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * i }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 lg:px-4 py-1.5 lg:py-2 text-sm lg:text-base font-medium rounded-lg ${colors.badgeBg} ${colors.badgeText} border ${colors.badgeBorder} ${colors.hoverBg} hover:text-white transition-all duration-300 cursor-default`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl bg-blue-600 text-white text-xl lg:text-2xl">
              <FaUsers />
            </div>
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                <span className="text-sm lg:text-base font-medium text-slate-700">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;