export default function Contact() {
  return (
    <section id="contact" className="relative py-16 px-6 bg-white">
      <div className="absolute inset-0 bg-/60"></div>

      <div className="relative max-w-3xl mx-auto text-black z-10">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form className="bg-white p-8 rounded-lg shadow-lg shadow-black text-black">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none mb-4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
