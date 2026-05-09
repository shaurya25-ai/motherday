import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-yellow-300 text-transparent bg-clip-text">
          Happy Mother's Day 💖
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Thank you for being my strength, my home, and my heart.
        </p>

        <img
          src="/images/hero.jpg"
          className="mt-10 rounded-3xl shadow-2xl w-[500px] mx-auto"
        />
      </motion.div>
    </div>
  );
}

export default Home;