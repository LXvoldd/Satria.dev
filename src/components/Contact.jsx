import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { contact } from "../data/portfolioData";

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [focusedField, setFocusedField] = useState(null);

  const contactItems = [
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: contact.whatsapp,
      href: `https://wa.me/62${contact.whatsapp.slice(1)}`,
      color: "emerald",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: "blue",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      value: `@${contact.instagram}`,
      href: `https://instagram.com/${contact.instagram}`,
      color: "pink",
    },
  ];

  const colorMap = {
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      hover: "hover:border-emerald-300",
      glow: "group-hover:shadow-emerald-200",
      gradient: "from-emerald-400 to-emerald-600",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      hover: "hover:border-blue-300",
      glow: "group-hover:shadow-blue-200",
      gradient: "from-blue-400 to-blue-600",
    },
    pink: {
      bg: "bg-pink-50",
      text: "text-pink-600",
      hover: "hover:border-pink-300",
      glow: "group-hover:shadow-pink-200",
      gradient: "from-pink-400 to-pink-600",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Aurora */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 -left-32 w-[500px] h-[500px] bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 pointer-events-none"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Judul */}
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
            Kontak
          </motion.p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Mari Terhubung
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
            Punya proyek, pertanyaan, atau ingin berkolaborasi? Jangan ragu
            untuk menghubungi saya.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* KIRI — Info Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6"
            >
              Informasi Kontak
            </motion.h3>

            {contactItems.map((item, idx) => {
              const colors = colorMap[item.color];
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -60, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + idx * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`group relative flex items-center gap-5 p-5 lg:p-6 bg-white rounded-2xl border-2 border-slate-100 ${colors.hover} shadow-sm hover:shadow-2xl ${colors.glow} transition-all duration-500 overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <motion.div
                    initial={{ x: "-150%" }}
                    whileHover={{ x: "150%" }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
                  />
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    className={`relative w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 flex items-center justify-center rounded-xl ${colors.bg} ${colors.text} text-xl lg:text-2xl`}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="relative">
                    <p className="text-sm text-slate-500 mb-1">{item.label}</p>
                    <p className="text-base lg:text-lg font-semibold text-slate-800">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, x: -60, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-5 p-5 lg:p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border-2 border-slate-100"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-200 text-slate-600 text-xl lg:text-2xl"
              >
                <FaMapMarkerAlt />
              </motion.div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Lokasi</p>
                <p className="text-base lg:text-lg font-semibold text-slate-800">
                  Indonesia
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* KANAN — Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              whileHover={{ scale: 1.005 }}
              className="relative bg-white p-6 lg:p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6"
              >
                Kirim Pesan
              </motion.h3>

              {/* Nama */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-5"
              >
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nama
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Nama kamu"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 focus:border-blue-500 outline-none transition-all duration-300 relative z-10 bg-transparent"
                  />
                  {focusedField === "name" && (
                    <motion.div
                      layoutId="input-glow"
                      className="absolute inset-0 rounded-lg bg-blue-100 blur-md -z-0"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-5"
              >
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 focus:border-blue-500 outline-none transition-all duration-300 relative z-10 bg-transparent"
                  />
                  {focusedField === "email" && (
                    <motion.div
                      layoutId="input-glow"
                      className="absolute inset-0 rounded-lg bg-blue-100 blur-md -z-0"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Pesan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-6"
              >
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Pesan
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tulis pesan kamu di sini..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 focus:border-blue-500 outline-none transition-all duration-300 resize-none relative z-10 bg-transparent"
                  />
                  {focusedField === "message" && (
                    <motion.div
                      layoutId="input-glow"
                      className="absolute inset-0 rounded-lg bg-blue-100 blur-md -z-0"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Tombol Submit */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{
                  scale: status === "sending" ? 1 : 1.03,
                  y: status === "sending" ? 0 : -3,
                }}
                whileTap={{ scale: status === "sending" ? 1 : 0.97 }}
                className={`group relative w-full flex items-center justify-center gap-3 px-6 py-3.5 text-white font-medium rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${
                  status === "success"
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-emerald-200"
                    : status === "error"
                    ? "bg-gradient-to-r from-red-500 to-red-600 shadow-red-200"
                    : status === "sending"
                    ? "bg-gradient-to-r from-slate-400 to-slate-500 cursor-wait"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-300"
                }`}
              >
                <motion.div
                  initial={{ x: "-150%" }}
                  whileHover={{ x: "150%" }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
                />

                {status === "sending" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Mengirim...</span>
                  </>
                ) : status === "success" ? (
                  <>
                    <FaCheckCircle />
                    <span>Pesan Terkirim! ✅</span>
                  </>
                ) : status === "error" ? (
                  <>
                    <FaPaperPlane />
                    <span>Gagal Kirim. Coba Lagi.</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Kirim Pesan</span>
                  </>
                )}
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="text-xs text-slate-500 text-center mt-4"
              >
                Pesan akan dikirim langsung ke email saya
              </motion.p>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;