import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import { projects } from "../data/portfolioData";
import TiltCard from "./TiltCard";

function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50">
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
            Portofolio
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Proyek yang Pernah Saya Kerjakan
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-base lg:text-lg text-slate-500 mt-6 max-w-2xl mx-auto">
            Beberapa proyek yang saya kerjakan, baik secara mandiri maupun
            dalam tim.
          </p>
        </motion.div>

        {/* Grid Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 * idx }}
            >
              <TiltCard className="h-full">
                <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-300 overflow-hidden flex flex-col h-full">
                  {/* Header Card — Gradient + Icon */}
                  <div className="relative h-40 lg:h-48 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                    {/* Pattern dekorasi */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-32 h-32 border-4 border-white rounded-full" />
                      <div className="absolute -bottom-8 -left-8 w-40 h-40 border-4 border-white rounded-full" />
                    </div>

                    {/* Icon folder besar */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="text-white/90 text-6xl lg:text-7xl"
                      >
                        <FaFolder />
                      </motion.div>
                    </div>

                    {/* Badge tipe proyek */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-blue-700 text-xs lg:text-sm font-semibold rounded-full shadow-sm">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Body Card */}
                  <div className="p-6 lg:p-7 flex flex-col flex-grow">
                    {/* Judul */}
                    <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Deskripsi */}
                    <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-5 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs lg:text-sm font-medium bg-slate-100 text-slate-600 rounded-md group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Tombol Link */}
                    <div className="flex gap-3 pt-4 border-t border-slate-100">
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm lg:text-base font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-slate-200 text-slate-700 text-sm lg:text-base font-medium rounded-lg hover:border-slate-800 hover:text-slate-900 transition-colors"
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