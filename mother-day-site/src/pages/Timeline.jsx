function Timeline() {
  const memories = [
    "2010 - First school day ❤️",
    "2015 - Family vacation 🌸",
    "2020 - Hard times you supported me 💖",
    "2025 - Creating this website for you ✨",
  ];

  return (
    <div className="min-h-screen pt-32 px-10">
      <h1 className="text-5xl text-center mb-16">Our Journey 🌸</h1>

      <div className="space-y-8">
        {memories.map((m, i) => (
          <div key={i} className="glass p-6 rounded-2xl">
            {m}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
