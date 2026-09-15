import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    // Deteksi hover di elemen interaktif
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Pasang listener ke elemen interaktif
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [data-cursor-hover]"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  // Cek device — kalau touch, jangan tampilkan cursor
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* Cursor utama (bulat biru) */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isClicking ? 0.8 : isHovering ? 2 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Cursor ring (outline yang ngikutin dengan delay) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-600 rounded-full pointer-events-none z-[99]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isClicking ? 1.2 : isHovering ? 1.5 : 1,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  );
}

export default CustomCursor;