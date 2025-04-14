export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('backgroundimg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-3xl mx-auto text-white z-10">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form className="bg-[#28282B] bg-opacity-90 p-8 rounded-lg shadow-lg text-white">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none text-white"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none text-white"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none mb-4 text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
