import { motion } from "framer-motion";

// IMAGE GUIDE:
// - Files live at: public/images/1.jpeg, 2.jpeg, 3.jpeg, 4.jpeg
// - To add more: drop photos into public/images/ and add them to the array below
// - Common error: wrong filename casing (1.JPEG vs 1.jpeg) — use lowercase

const galleryImages = [
  { src: "/images/1.jpeg", caption: "Always Smiling 😊" },
  { src: "/images/2.jpeg", caption: "Her Warm Heart 💕" },
  { src: "/images/3.jpeg", caption: "Unconditional Love 🌸" },
  { src: "/images/4.jpeg", caption: "My Forever Hero ✨" },
];

// Reusable card component - each image becomes a hoverable glassmorphism card
function GalleryCard({ src, caption, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      whileHover={{ scale: 1.03, y: -6 }}
      className="group relative rounded-3xl overflow-hidden shadow-2xl shadow-pink-900/30 cursor-pointer"
    >
      {/* The photo */}
      <div className="overflow-hidden">
        <img
          src={src}
          alt={caption}
          className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Glassmorphism caption that slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5
                      bg-gradient-to-t from-black/80 via-black/30 to-transparent
                      backdrop-blur-sm translate-y-full group-hover:translate-y-0
                      transition-transform duration-500 rounded-b-3xl">
        <p className="text-white text-center font-semibold text-lg">{caption}</p>
      </div>

      {/* Pink glow border on hover */}
      <div className="absolute inset-0 rounded-3xl ring-2 ring-pink-400/0 group-hover:ring-pink-400/50 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}

function Gallery() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12">

      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <p className="text-pink-400 tracking-widest uppercase text-sm mb-3">Our Memories</p>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 text-transparent bg-clip-text">
          Memory Gallery ✨
        </h1>
        <p className="mt-4 text-gray-400 text-lg max-w-lg mx-auto">
          Every photo holds a piece of my heart
        </p>
      </motion.div>

      {/* Responsive 2-column image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-4xl mx-auto">
        {galleryImages.map((img, i) => (
          <GalleryCard key={i} src={img.src} caption={img.caption} index={i} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;