import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// IMAGE GUIDE:
// - File lives at: public/images/4.jpeg
// - To replace: swap 4.jpeg with your own photo (keep the same filename)
//   OR change the src below to your new filename e.g. "/images/my-photo.jpg"

// ── Confetti piece — one colourful falling square/circle ──────────────────
function ConfettiPiece({ style }) {
  return (
    <motion.div
      className="absolute rounded-sm pointer-events-none"
      initial={{ y: -20, opacity: 1, rotate: 0 }}
      animate={{ y: "110vh", opacity: [1, 1, 0], rotate: 360 }}
      transition={style.transition}
      style={{
        left: style.left,
        width: style.size,
        height: style.size,
        backgroundColor: style.color,
        borderRadius: style.round ? "50%" : "2px",
      }}
    />
  );
}

// ── Confetti container — generates 50 random pieces on mount ──────────────
function Confetti() {
  const colors = ["#ff6b9d", "#c44dff", "#ffd700", "#ff4757", "#eccc68", "#a29bfe", "#fd79a8"];

  const pieces = Array.from({ length: 50 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 10 + 5}px`,
    color: colors[Math.floor(Math.random() * colors.length)],
    round: Math.random() > 0.5,
    transition: {
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2.5,
      ease: "easeIn",
    },
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {pieces.map((p, i) => (
        <ConfettiPiece key={i} style={p} />
      ))}
    </div>
  );
}

function ThankYou() {
  const [showConfetti, setShowConfetti] = useState(true);

  // Stop confetti after 5 seconds so it doesn't keep re-rendering
  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">

      {/* Confetti burst when the page first loads */}
      {showConfetti && <Confetti />}

      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-12"
      >
        <p className="text-pink-400 tracking-widest uppercase text-sm mb-3">From the bottom of my heart</p>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-300 via-rose-200 to-yellow-200 text-transparent bg-clip-text">
          Thank You Mom 💖
        </h1>
      </motion.div>

      {/* Image with glow + scale-in animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        className="relative mb-12"
      >
        {/* Animated glow ring behind the image */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-pink-500/30 blur-3xl"
        />

        {/* The thank-you photo */}
        <img
          src="/images/4.jpeg"
          alt="Thank you Mom"
          // "float" CSS class defined in index.css makes it gently bob up and down
          className="float relative w-72 md:w-96 h-72 md:h-96 object-cover rounded-full shadow-2xl shadow-pink-900/60 border-4 border-pink-400/30"
        />

        {/* Decorative floating hearts around the image */}
        {["💖", "🌸", "💕", "✨"].map((emoji, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl"
            style={{
              top: `${[10, 70, 15, 65][i]}%`,
              left: `${[85, 85, 5, 5][i]}%`,
            }}
            animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>

      {/* Closing message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="text-xl text-gray-200 max-w-2xl leading-relaxed"
      >
        No matter how old I grow, I will always need your love and guidance.
        You are, and will always be, my greatest blessing. 🌸
      </motion.p>

      {/* Bottom emoji row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="mt-10 text-4xl flex gap-4"
      >
        {["💖", "🌹", "💐", "🌸", "💕"].map((e, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          >
            {e}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default ThankYou;