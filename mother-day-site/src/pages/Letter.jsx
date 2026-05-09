import { motion } from "framer-motion";

// The letter paragraphs — written in Hinglish (Hindi using English letters)
// Each paragraph fades in one by one as you scroll down
const letterParagraphs = [
  {
    text: "Maa... kuch baatein hoti hain jo dil mein bahut gehri hoti hain, par zuban par aana bahut mushkil hota hai. Aaj main koshish karta hoon. ❤️",
    delay: 0.1,
  },
  {
    text: "Jab main chota tha, aur raat ko darr ke uthta tha — tum hamesha wahan hoti thi. Bina kuch kahe, bas apni baahon mein le leti thi. Aaj bhi, jab zindagi mushkil lagti hai, main wohi warmth dhundta hoon — tumhari.",
    delay: 0.2,
  },
  {
    text: "Tumne kabhi nahi bataya ki tum thaki hoti thi. Kabhi nahi dikhaya ki dard hota tha. Bas muskurati rahi — sirf isliye ki hum khush rahein. Maa, yeh jo himmat hai tumhare andar... main isko poori zindagi nahi samajh sakta. 🌸",
    delay: 0.3,
  },
  {
    text: "Jab maine galtiyan ki — bahut saari galtiyan ki — tab bhi tumne haath nahi choda. Aur jab main girne wala tha, tum wahan thi. Seedha nahi ki, par support kiya. Yahi toh maa hoti hai.",
    delay: 0.4,
  },
  {
    text: "Tumne apni neend chodi meri padhai ke liye. Apni khwahishein chod di sirf isliye ki meri zarooraten puri ho sakein. Main jaanta hoon yeh sab — aur shayad tab itna express nahi kiya jitna karna chahiye tha. Aaj karta hoon. ✨",
    delay: 0.5,
  },
  {
    text: "Main koi bada writer nahi hoon. Mujhe achhe words nahi aate. Par jitna feel karta hoon — woh words se bada hai. Tum meri zindagi ki sabse khoobsurat cheez ho, Maa.",
    delay: 0.6,
  },
  {
    text: "Iss duniya mein aaye, toh tumhari wajah se. Aaj jo kuch bhi hoon — toh tumhari wajah se. Aur jo bhi ban'na chahta hoon — woh bhi tumhare liye. 💕",
    delay: 0.7,
  },
];

const closing = "Happy Mother's Day, Maa. Aaj aur hamesha — love you. ❤️🌸";

function Letter() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">

      {/* Floating image above the letter */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="mb-14"
      >
        <div className="relative">
          {/* Soft pink glow behind the image */}
          <div className="absolute inset-0 rounded-3xl bg-pink-500/20 blur-2xl scale-110" />
          <img
            src="/images/2.jpeg"
            alt="A beautiful memory with Mom"
            className="float relative w-72 md:w-96 h-64 md:h-80 object-cover rounded-3xl shadow-2xl shadow-pink-900/50 border border-white/10"
          />
        </div>
      </motion.div>

      {/* Letter card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="glass max-w-2xl w-full p-10 md:p-14 rounded-3xl shadow-2xl shadow-pink-900/20 border border-pink-400/10"
      >
        {/* Greeting */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-pink-400 to-rose-300 text-transparent bg-clip-text"
        >
          Dear Maa, 💖
        </motion.h1>

        {/* Letter paragraphs — each one fades in individually */}
        <div className="space-y-7">
          {letterParagraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: para.delay }}
              className="text-gray-200 text-lg leading-9 font-light"
            >
              {para.text}
            </motion.p>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="my-10 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent origin-left"
        />

        {/* Closing message */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-pink-300 font-semibold text-xl md:text-2xl text-center leading-9"
        >
          {closing}
        </motion.p>

        {/* Signature */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8 text-right text-gray-400 text-base italic"
        >
          — Tumhari beti, hamesha 🌸
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Letter;
