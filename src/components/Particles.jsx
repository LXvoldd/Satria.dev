import { motion } from "framer-motion";
import { useMemo } from "react";

function Particles() {
  // Generate posisi & delay random — pakai useMemo biar gak re-generate tiap render
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // 0-100%
      top: Math.random() * 100, // 0-100%
      size: Math.random() * 6 + 2, // 2-8px
      duration: Math.random() * 10 + 10, // 10-20 detik
      delay: Math.random() * 5, // 0-5 detik
      opacity: Math.random() * 0.4 + 0.1, // 0.1-0.5
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

export default Particles;