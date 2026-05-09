function Gallery() {
  const images = [
    "/images/mom1.jpg",
    "/images/mom2.jpg",
    "/images/mom3.jpg",
  ];

  return (
    <div className="min-h-screen pt-32 px-10">
      <h1 className="text-5xl text-center mb-10">Memory Gallery ✨</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="rounded-3xl hover:scale-105 duration-300"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;