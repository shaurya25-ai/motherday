import { motion } from "framer-motion";

// IMAGE GUIDE:
// - File lives at: public/images/3.jpeg
// - Each memory card shows the same photo (replace with different ones if you have more)
// - To use different images per card, add src to each memory object below

const memories = [
  { year: "2010", title: "First School Day ❤️", desc: "You held my hand and told me everything would be okay.", delay: 0 },
  { year: "2015", title: "Family Vacation 🌸", desc: "The laughs, the food, the sunset — I still remember every moment.", delay: 0.15 },
  { year: "2020", title: "You Were My Strength 💖", desc: "When the world felt heavy, your love kept me standing.", delay: 0.3 },
  { year: "2025", title: "This Website, For You ✨", desc: "A small token of my endless gratitude and love.", delay: 0.45 },
];

// A single timeline memory card with scroll-reveal animation
function MemoryCard({ year, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="flex gap-6 group"
    >
      {/* Year badge + vertical line */}
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-pink-500/30 shrink-0">
          {year}
        </div>
        <div className="w-px flex-1 bg-gradient-to-b from-pink-500/50 to-transparent mt-2" />
      </div>

      {/* Card content with image */}
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3 }}
        className="glass mb-10 rounded-2xl overflow-hidden flex-1 border border-pink-400/10 shadow-xl shadow-pink-900/20"
      >
        {/* Memory image */}
        <div className="overflow-hidden">
          <img
            src="/images/3.jpeg"
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Gradient overlay at bottom of image */}
        <div className="relative -mt-10 h-10 bg-gradient-to-t from-[#0f0f1a] to-transparent" />

        {/* Text */}
        <div className="px-6 pb-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Timeline() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-16 max-w-3xl mx-auto">

      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <p className="text-pink-400 tracking-widest uppercase text-sm mb-3">A Walk Through Time</p>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 text-transparent bg-clip-text">
          Our Journey 🌸
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          Moments that made us who we are
        </p>
      </motion.div>

      {/* Memory cards — each fades in as you scroll down */}
      <div>
        {memories.map((m, i) => (
          <MemoryCard key={i} {...m} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
