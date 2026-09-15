import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import { projects } from "../data/portfolioData";
import TiltCard from "./TiltCard";

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden"
    >
      {/* ===== Dekorasi background parallax ===== */}
      <motion.div
        initial={{ y: -150, opacity: 0, rotate: 0 }}
        whileInView={{ y: 0, opacity: 0.5, rotate: 45 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-20 -left-32 w-96 h-96 bg-blue-100 rounded-3xl blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ y: 150, opacity: 0, rotate: 0 }}
        whileInView={{ y: 0, opacity: 0.5, rotate: -30 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-20 -right-32 w-96 h-96 bg-indigo-100 rounded-3xl blur-3xl pointer-events-none"
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
            Portofolio
          </motion.p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Proyek yang Pernah Saya Kerjakan
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
            Beberapa proyek yang saya kerjakan, baik secara mandiri maupun
            dalam tim.
          </motion.p>
        </motion.div>

        {/* ===== Grid Projects ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 100,
                rotate: idx % 2 === 0 ? -3 : 3,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.9,
                delay: 0.08 * idx,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TiltCard className="h-full">
                <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden flex flex-col h-full">
                  {/* ===== Glow border effect ===== */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

                  {/* Header Card — Gradient + Icon */}
                  <div className="relative h-40 lg:h-48 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                    {/* Pattern dekorasi — muter saat hover */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 opacity-10"
                    >
                      <div className="absolute top-4 right-4 w-32 h-32 border-4 border-white rounded-full" />
                      <div className="absolute -bottom-8 -left-8 w-40 h-40 border-4 border-white rounded-full" />
                    </motion.div>

                    {/* Shine effect saat hover */}
                    <motion.div
                      initial={{ x: "-150%" }}
                      whileHover={{ x: "150%" }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                    />

                    {/* Icon folder besar */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -10, 10, -10, 0],
                        }}
                        transition={{ duration: 0.6 }}
                        className="text-white/90 text-6xl lg:text-7xl drop-shadow-lg"
                      >
                        <FaFolder />
                      </motion.div>
                    </div>

                    {/* Badge tipe proyek */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                      className="absolute top-4 left-4"
                    >
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-blue-700 text-xs lg:text-sm font-semibold rounded-full shadow-sm">
                        {project.type}
                      </span>
                    </motion.div>

                    {/* Corner accent */}
                    <div className="absolute bottom-0 left-0 w-24 h-1 bg-white/30" />
                  </div>

                  {/* Body Card */}
                  <div className="p-6 lg:p-7 flex flex-col flex-grow relative">
                    {/* Judul */}
                    <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Garis dekorasi — tumbuh saat hover */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: 40 }}
                      className="h-0.5 bg-blue-600 rounded-full mb-4 group-hover:w-10 transition-all duration-500"
                    />

                    {/* Deskripsi */}
                    <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-5 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack — stagger */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t, i) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, scale: 0.5, y: 10 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.5 + idx * 0.08 + i * 0.05,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-2.5 py-1 text-xs lg:text-sm font-medium bg-slate-100 text-slate-600 rounded-md group-hover:bg-blue-50 group-hover:text-blue-700 transition-all duration-300 cursor-default"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>

                    {/* Tombol Link */}
                    <div className="flex gap-3 pt-4 border-t border-slate-100">
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm lg:text-base font-medium rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-slate-200 text-slate-700 text-sm lg:text-base font-medium rounded-lg hover:border-slate-800 hover:text-slate-900 hover:shadow-md transition-all duration-300"
                      >
                        <FaGithub />
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;