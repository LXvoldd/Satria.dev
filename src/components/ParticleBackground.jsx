import { useEffect, useRef, useState } from "react";

function ParticleBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  // Delay start biar web load dulu
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    // Device pixel ratio untuk performa
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // ===== CONFIG =====
    const PARTICLE_COLOR = "37, 99, 235";
    const LINE_COLOR = "59, 130, 246";
    const MOUSE_RADIUS = 150;
    const CONNECT_DISTANCE = 120;

    // Jumlah particle dikurangi
    const getParticleCount = () => {
      const w = window.innerWidth;
      if (w < 640) return 12;
      if (w < 1024) return 20;
      return 35;
    };

    const createParticles = () => {
      const count = getParticleCount();
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
      }));
    };

    createParticles();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      createParticles();
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    // Pause saat tab gak aktif — hemat CPU
    let isPaused = false;
    const handleVisibilityChange = () => {
      isPaused = document.hidden;
    };

    let isScrolling = false;
    let scrollTimeout;

    // Pause animasi saat scroll (optional)
    const handleScroll = () => {
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 100);
    };

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Skip frame kalau tab gak aktif
      if (isPaused) return;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const particleCount = particles.length;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interaksi cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx * dx + dy * dy;
          const radiusSq = MOUSE_RADIUS * MOUSE_RADIUS;

          if (distSq < radiusSq) {
            const dist = Math.sqrt(distSq);
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
            p.x += (dx / dist) * force * 1;
            p.y += (dy / dist) * force * 1;
          }
        }

        // Gambar particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${PARTICLE_COLOR}, 0.5)`;
        ctx.fill();

        // Garis antar particle
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONNECT_DISTANCE * CONNECT_DISTANCE) {
            const dist = Math.sqrt(distSq);
            const opacity = (1 - dist / CONNECT_DISTANCE) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${LINE_COLOR}, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Garis ke cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          const radiusSq = MOUSE_RADIUS * MOUSE_RADIUS;

          if (distSq < radiusSq) {
            const dist = Math.sqrt(distSq);
            const opacity = (1 - dist / MOUSE_RADIUS) * 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
    };

    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(scrollTimeout);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isReady]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-1000 ${
        isReady ? "opacity-100" : "opacity-0"
      }`}
      style={{ background: "transparent" }}
    />
  );
}

export default ParticleBackground;