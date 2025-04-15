export default function Services() {
  return (
    <section id="services" className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
          {
            title: "Website & App Development",
            description:
              "We build responsive websites and mobile apps tailored to your business needs using the latest technologies for smooth user experience.",
          },
          {
            title: "Social Media Marketing",
            description:
              "Grow your audience with creative posts, stories, and campaigns that engage users and boost your brand visibility on all platforms.",
          },
          {
            title: "Product Photography",
            description:
              "Capture the best side of your products with high-quality images that elevate your brand and attract customers.",
          },
          {
            title: "SEO (Search Engine Optimization)",
            description:
              "Optimize your website for better visibility, improved search rankings, and more organic traffic with our expert SEO services.",
          },
          {
            title: "Ad Films",
            description:
              "Create compelling ad films that highlight your brand message and leave a lasting impression on your audience.",
          },
          {
            title: "Brand Promotions",
            description:
              "We help promote your brand through events, influencer collaborations, and targeted marketing strategies.",
          },
          {
            title: "Content Writing",
            description:
              "Engaging and persuasive content creation that aligns with your brand voice and connects with your audience.",
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
