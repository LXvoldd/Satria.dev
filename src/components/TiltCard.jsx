import { useRef, useState } from "react";
import { motion } from "framer-motion";

function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
  });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  // Handle gerakan mouse di atas card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // posisi X relatif ke card
    const y = e.clientY - rect.top; // posisi Y relatif ke card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Hitung rotasi — max 10 derajat
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransform({ rotateX, rotateY });

    // Posisi glare (efek kilau) — dalam persen
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  // Reset saat cursor keluar
  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        rotateX: transform.rotateX,
        rotateY: transform.rotateY,
        scale: isHovering ? 1.02 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.5,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`relative ${className}`}
    >
      {children}

      {/* Glare / efek kilau */}
      {isHovering && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-none rounded-2xl z-20"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, white, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}

export default TiltCard;