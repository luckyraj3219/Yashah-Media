export default function Services() {
  return (
    <section id="services" className="py-12 px-6" style={{ backgroundColor: "#28282B" }}>
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          {
            title: "Digital Marketing",
            description:
              "Boost your online presence with result-driven strategies including SEO, paid ads, email marketing, and analytics to track growth and conversions.",
          },
          {
            title: "Creative Designing",
            description:
              "We create compelling visual content—logos, banners, social media posts, and branding kits—that resonate with your audience and build brand loyalty.",
          },
          {
            title: "Video Production",
            description:
              "From script to screen, we deliver high-quality videos, ad films, reels, and promotional content that tell your brand story with emotion and impact.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 h-72 rounded-2xl shadow-lg hover:shadow-red-500 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
