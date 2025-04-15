export default function Gallery() {
  return (
    <section id="gallery" className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">Our Gallery</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_25px_rgba(255,0,0,0.6)]"
          >
            <img
              src={`/gallery/img${i}.jpg`}
              alt={`Gallery ${i}`}
              className="w-full h-64 object-cover transform transition-all duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
