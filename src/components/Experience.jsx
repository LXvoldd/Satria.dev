import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { experiences } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-white">
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
            Pengalaman
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Perjalanan & Pengalaman
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Garis vertikal */}
          <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200" />

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0; // genap kiri, ganjil kanan (desktop)

            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
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
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                  >
                    {/* Judul */}
                    <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-2">
                      {exp.title}
                    </h3>

                    {/* Company & Period */}
                    <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4 text-sm lg:text-base text-slate-500">
                      <span className="flex items-center gap-2">
                        <FaBuilding className="text-blue-600" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt className="text-blue-600" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Deskripsi */}
                    <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs lg:text-sm font-medium bg-blue-50 text-blue-700 rounded-md border border-blue-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Dot / Icon di tengah timeline */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-6 lg:top-8">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg lg:text-xl shadow-lg shadow-blue-200 border-4 border-white"
                  >
                    <FaBriefcase />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;