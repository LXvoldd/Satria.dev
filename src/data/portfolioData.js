// ============================================
// PORTOFOLIO DATA — Satria Zjulian Rahayu
// ============================================

// ============ PROFILE ============
export const profile = {
  name: "Satria Zjulian Rahayu",
  nickname: "Satria",
  title: "Frontend Developer",
  tagline: "Membangun antarmuka web yang cepat, responsif, dan berkesan.",
  school: "SMK MEDIKACOM",
  status: "Siswa Kelas 12 • PKL Bidang RPL",
  about:
    "Saya adalah siswa SMK MEDIKACOM kelas 12 yang sedang menjalani PKL selama 4 bulan (20 Juli – 20 November). Saya memiliki minat besar di bidang Frontend Development dan berpengalaman membangun website berbasis database seperti web psychotest dan CMS admin. Saya juga pernah terlibat dalam pengembangan game VR berbasis Unity. Saya senang berkolaborasi dalam tim maupun bekerja mandiri.",
  interests: [
    "Frontend Development",
    "UI/UX Design",
    "Web Development",
    "Game Development (VR)",
  ],
};

// ============ CONTACT ============
export const contact = {
  whatsapp: "085773491523",
  email: "satriarahayu19@gmail.com",
  instagram: "satria_zjulian",
};

// ============ SOCIALS ============
export const socials = [
  { name: "WhatsApp", url: "https://wa.me/6285773491523", icon: "whatsapp" },
  {
    name: "Instagram",
    url: "https://instagram.com/satria_zjulian",
    icon: "instagram",
  },
  { name: "Email", url: "mailto:satriarahayu13@gmail.com", icon: "email" },
];

// ============ SKILLS ============
export const skills = {
  languages: ["JavaScript", "PHP", "Python", "C#", "Java", "HTML", "CSS"],
  frameworks: ["React JS", "Laravel", "Unity", "Supabase", "Tailwind CSS"],
  tools: ["VS Code", "Git", "GitHub", "Figma", "Postman", "Vercel"],
  softSkills: [
    "Kolaborasi Tim",
    "Komunikasi",
    "Problem Solving",
    "Manajemen Waktu",
    "Adaptif & Cepat Belajar",
    "Berpikir Kritis",
  ],
};

// ============ PROJECTS ============
export const projects = [
  {
    title: "Website Baca Manhwa",
    description:
      "Website untuk membaca manhwa dengan tampilan modern dan responsif. Data manhwa disimpan secara online menggunakan Supabase.",
    tech: ["React JS", "Supabase", "Tailwind CSS"],
    type: "Mandiri",
    demo: "#",
    github: "#",
  },
  {
    title: "Wishlist App",
    description:
      "Aplikasi untuk mencatat dan mengelola daftar keinginan (wishlist). Data tersimpan secara online menggunakan Supabase.",
    tech: ["React JS", "Supabase", "Tailwind CSS"],
    type: "Mandiri",
    demo: "#",
    github: "#",
  },
  {
    title: "My Life Garden",
    description:
      "Game simulasi bertani berbasis VR dengan storyline. Pemain tidak hanya bertani, tetapi juga mengikuti cerita dari karakter utama. Dikembangkan bersama tim, saya berperan sebagai programmer.",
    tech: ["Unity", "C#", "VR"],
    type: "Tim — Programmer",
    demo: "#",
    github: "#",
  },
  {
    title: "Web Psychotest",
    description:
      "Website psychotest dengan 2 tampilan: untuk admin (mengelola soal & hasil) dan untuk peserta (mengerjakan tes). Dikembangkan saat PKL. Saya mengerjakan bagian frontend, backend dikerjakan rekan tim.",
    tech: ["React JS", "Laravel", "Tailwind CSS"],
    type: "PKL — Frontend",
    demo: "#",
    github: "#",
  },
  {
    title: "CMS Admin Sekolah",
    description:
      "Content Management System untuk mengelola konten website sekolah secara dinamis — mulai dari berita, galeri, profil guru, hingga pengumuman. Dikembangkan saat PKL. Saya mengerjakan bagian frontend, backend dikerjakan rekan tim.",
    tech: ["React JS", "Laravel", "Tailwind CSS"],
    type: "PKL — Frontend",
    demo: "#",
    github: "#",
  },
  {
    title: "CMS Admin Kampus",
    description:
      "Content Management System untuk mengelola konten website kampus — meliputi program studi, berita akademik, agenda, dan informasi mahasiswa. Dikembangkan saat PKL. Saya mengerjakan bagian frontend, backend dikerjakan rekan tim.",
    tech: ["React JS", "Laravel", "Tailwind CSS"],
    type: "PKL — Frontend",
    demo: "#",
    github: "#",
  },
];

// ============ EXPERIENCE ============
export const experiences = [
  {
    title: "Praktik Kerja Lapangan (PKL)",
    company: "SMK MEDIKACOM",
    period: "20 Juli 2026 – 20 November 2026",
    description:
      "Menjalani PKL di bidang RPL (Rekayasa Perangkat Lunak). Mengembangkan website CMS admin sekolah/kampus/perusahaan dan web psychotest. Selain belajar pengembangan software, juga mempelajari dasar bisnis seperti membuat business plan dan mengelola bisnis.",
    tags: ["Frontend", "React JS", "Laravel", "Bisnis"],
  },
  {
    title: "Programmer — My Life Garden (VR Game)",
    company: "Project Tim Sekolah",
    period: "2026",
    description:
      "Berperan sebagai programmer dalam pengembangan game simulasi bertani berbasis VR dengan storyline. Bertanggung jawab atas implementasi gameplay dan sistem cerita menggunakan Unity dan C#.",
    tags: ["Unity", "C#", "Game Dev", "VR"],
  },
];

// ============ CERTIFICATES ============
export const certificates = [
  {
    title: "Frontend Development — Beginner",
    issuer: "Educourse",
    year: "2026",
    type: "Course",
    image: "/certificates/educourse-beginner.jpg",
  },
  {
    title: "Frontend Development — Intermediate",
    issuer: "Educourse",
    year: "2026",
    type: "Course",
    image: "/certificates/educourse-intermediate.jpg",
  },
  {
    title: "Frontend Development — Advanced",
    issuer: "Educourse",
    year: "2026",
    type: "Course",
    image: "/certificates/educourse-advanced.jpg",
  },
  {
    title: "Pelatihan AI — Google ASEAN",
    issuer: "Google ASEAN",
    year: "2026",
    type: "Course",
    image: "/certificates/google-asean-ai.jpg",
  },
];

// ============ NAVIGATION ============
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Keahlian", href: "#skills" },
  { name: "Proyek", href: "#projects" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Sertifikat", href: "#certificates" },
  { name: "Kontak", href: "#contact" },
];