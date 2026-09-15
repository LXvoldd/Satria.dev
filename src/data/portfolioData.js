// ============================================
// PORTOFOLIO DATA — Satria Zjulian Rahayu
// ============================================

// ============ PROFILE ============
export const profile = {
  name: "Satria Zjulian Rahayu",
  nickname: "Satria",
  title: "Full Stack Developer",
  tagline: "Membangun antarmuka web yang cepat, responsif, dan berkesan.",
  school: "SMK MEDIKACOM",
  status: "Siswa Kelas 12 • PKL Bidang RPL",
  about:
    "Saya adalah siswa SMK MEDIKACOM kelas 12 yang sedang menjalani PKL selama 4 bulan (20 Juli – 20 November). Saya memiliki minat besar di bidang Full Stack Development dan berpengalaman membangun website berbasis database seperti web psychotest dan CMS admin. Saya juga pernah terlibat dalam pengembangan game VR berbasis Unity. Saya senang berkolaborasi dalam tim maupun bekerja mandiri.",
  interests: [
    "Full Stack Development",
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
    title: "Manhwa Go",
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
    id: "pkl-medikacom",
    title: "Praktik Kerja Lapangan (PKL)",
    company: "SMK MEDIKACOM",
    period: "20 Juli 2026 – 20 November 2026",
    description:
      "Menjalani PKL di bidang RPL (Rekayasa Perangkat Lunak). Mengembangkan website CMS admin sekolah/kampus/perusahaan dan web psychotest. Selain belajar pengembangan software, juga mempelajari dasar bisnis seperti membuat business plan dan mengelola bisnis.",
    details:
      "Selama 4 bulan PKL, saya terlibat langsung dalam pengembangan beberapa website production yang digunakan oleh klien. Saya bekerja dalam tim yang terdiri dari frontend & backend developer, di mana saya fokus pada sisi antarmuka pengguna menggunakan React JS. Selain itu, saya juga dibekali pembelajaran tentang dunia bisnis — mulai dari menyusun business plan, memahami kebutuhan klien, hingga mengelola produk digital secara end-to-end.",
    responsibilities: [
      "Mengembangkan website CMS admin sekolah, kampus, dan perusahaan",
      "Mengembangkan website psychotest dengan 2 role (admin & peserta)",
      "Membangun antarmuka pengguna menggunakan React JS & Tailwind CSS",
      "Berkolaborasi dengan backend developer (Laravel) dalam integrasi API",
      "Menyusun business plan & mempelajari manajemen bisnis digital",
    ],
    tags: ["Frontend", "React JS", "Laravel", "Bisnis"],
  },
  {
    id: "mylifegarden",
    title: "Programmer — My Life Garden (VR Game)",
    company: "Project Tim Sekolah",
    period: "2026",
    description:
      "Berperan sebagai programmer dalam pengembangan game simulasi bertani berbasis VR dengan storyline. Bertanggung jawab atas implementasi gameplay dan sistem cerita menggunakan Unity dan C#.",
    details:
      "My Life Garden adalah game simulasi bertani berbasis Virtual Reality yang tidak hanya berfokus pada mekanik bertani, tetapi juga menyajikan storyline mendalam dari karakter utama. Saya berperan sebagai programmer dalam tim, bertanggung jawab menerjemahkan desain game menjadi kode yang berjalan di Unity. Proyek ini mengasah kemampuan saya dalam problem solving, kolaborasi tim, serta pengembangan software di luar web.",
    responsibilities: [
      "Implementasi mekanik gameplay simulasi bertani di Unity",
      "Mengembangkan sistem cerita (storyline) & dialog karakter",
      "Integrasi aset 3D & environment VR",
      "Kolaborasi dengan tim desainer & artist",
      "Debugging & optimasi performa game",
    ],
    tags: ["Unity", "C#", "Game Dev", "VR"],
  },
];

// ============ CERTIFICATES ============
export const certificates = [
  {
    title: "Full Stack Development — Beginner",
    issuer: "Educourse",
    year: "2026",
    type: "Course",
    image: "/certificates/Sertifikat-Coding-SMK-Medikacom-RPL-(Beginner).png",
  },
  {
    title: "Full Stack Development — Starter",
    issuer: "Educourse",
    year: "2026",
    type: "Course",
    image: "/certificates/Sertifikat-Coding-SMK-Medikacom-RPL-(Starter).png",
  },
  {
    title: "Full Stack Development — Advanced",
    issuer: "Educourse",
    year: "2026",
    type: "Course",
    image: "/certificates/Sertifikat-Coding-SMK-Medikacom-RPL-(Advance).png",
  },
  {
    title: "Pelatihan AI — Google ASEAN",
    issuer: "Google ASEAN",
    year: "2026",
    type: "Course",
    image: "/certificates/asean.png",
  },
];

// ============ NAVIGATION ============
export const navLinks = [
  { name: "Tentang", href: "#about" },
  { name: "Sertifikat", href: "#certificates" },
  { name: "Kontak", href: "#contact" },
];