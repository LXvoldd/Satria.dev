import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { contact } from "../data/portfolioData";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Data kontak
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

  // Warna per item
  const colorMap = {
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      hover: "hover:border-emerald-200",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      hover: "hover:border-blue-200",
    },
    pink: {
      bg: "bg-pink-50",
      text: "text-pink-600",
      hover: "hover:border-pink-200",
    },
  };

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Format pesan WhatsApp
    const text = `Halo Satria!%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0A%0APesan:%0A${formData.message}`;
    const waLink = `https://wa.me/62${contact.whatsapp.slice(1)}?text=${text}`;

    window.open(waLink, "_blank");

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
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
            Kontak
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Mari Terhubung
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-base lg:text-lg text-slate-500 mt-6 max-w-2xl mx-auto">
            Punya proyek, pertanyaan, atau ingin berkolaborasi? Jangan ragu
            untuk menghubungi saya.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* KIRI — Info Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
              Informasi Kontak
            </h3>

            {contactItems.map((item, idx) => {
              const colors = colorMap[item.color];
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  whileHover={{ x: 6 }}
                  className={`flex items-center gap-5 p-5 lg:p-6 bg-white rounded-2xl border-2 border-slate-100 ${colors.hover} shadow-sm hover:shadow-lg transition-all duration-300`}
                >
                  <div
                    className={`w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 flex items-center justify-center rounded-xl ${colors.bg} ${colors.text} text-xl lg:text-2xl`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">{item.label}</p>
                    <p className="text-base lg:text-lg font-semibold text-slate-800">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Card Lokasi */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-5 p-5 lg:p-6 bg-slate-50 rounded-2xl border-2 border-slate-100"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-200 text-slate-600 text-xl lg:text-2xl">
                <FaMapMarkerAlt />
              </div>
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-50 p-6 lg:p-8 rounded-2xl border border-slate-100"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
                Kirim Pesan
              </h3>

              {/* Nama */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Nama kamu"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              {/* Pesan */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Pesan
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tulis pesan kamu di sini..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                />
              </div>

              {/* Tombol Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 transition-all duration-300"
              >
                <FaPaperPlane />
                {submitted ? "Pesan Terkirim!" : "Kirim via WhatsApp"}
              </motion.button>

              <p className="text-xs text-slate-500 text-center mt-4">
                Pesan akan diteruskan ke WhatsApp saya
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;