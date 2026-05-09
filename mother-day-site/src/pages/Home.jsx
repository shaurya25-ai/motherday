import { motion } from "framer-motion";

// IMAGE GUIDE:
// - File lives at: public/images/1.jpeg
// - In Vite, public/ files are served from "/", so use src="/images/1.jpeg"
// - To swap your own photo: replace 1.jpeg in public/images/ with your file

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Hero image - fills full screen */}
      <motion.img
        src="/images/1.jpeg"
        alt="Mom"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark gradient overlay for cinematic look */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-pink-950/30 via-transparent to-purple-950/30" />

      {/* Text content pinned to bottom center */}
      <div className="relative z-10 flex flex-col items-center justify-end min-h-screen pb-20 px-6 text-center">

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1 }}
          className="text-pink-300 text-sm uppercase tracking-[0.35em] font-light mb-5 block"
        >
          Happy Mother's Day 💐
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-pink-300 via-rose-200 to-yellow-200 text-transparent bg-clip-text"
        >
          To The Woman Who Is My World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl mx-auto leading-relaxed"
        >
          Every day is your day, but today is just a little more about you 💖
        </motion.p>

        <motion.a
          href="/letter"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="mt-10 inline-block px-9 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold text-lg shadow-lg shadow-pink-500/40 cursor-pointer"
        >
          Read My Letter 💌
        </motion.a>
      </div>
    </div>
  );
}

export default Home;