export default function Blog() {
  return (
    <section id="blog" className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">Latest Blogs</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow transition-transform hover:shadow-red-500 hover:shadow-xl hover:-translate-y-2">
          <img src="/blog1.jpg" className="w-full h-48 object-cover rounded mb-4" alt="Blog 1" />
          <p className="text-sm text-gray-500 mb-2 uppercase">Technology</p>
          <h3 className="text-xl font-semibold mb-2">Our Recent Campaigns</h3>
          <p>Discover how we help brands stand out using powerful digital tools.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow transition-transform hover:shadow-red-500 hover:shadow-xl hover:-translate-y-2">
          <img src="/blog2.jpg" className="w-full h-48 object-cover rounded mb-4" alt="Blog 2" />
          <p className="text-sm text-gray-500 mb-2 uppercase">Strategy</p>
          <h3 className="text-xl font-semibold mb-2">Creative Strategies</h3>
          <p>Get inspired by how creativity meets strategy at Yashah Media.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow transition-transform hover:shadow-red-500 hover:shadow-xl hover:-translate-y-2">
          <img src="/blog3.jpg" className="w-full h-48 object-cover rounded mb-4" alt="Blog 3" />
          <p className="text-sm text-gray-500 mb-2 uppercase">Technology</p>
          <h3 className="text-xl font-semibold mb-2">Leading AI Models</h3>
          <p>Learn all about our leading AI models — and discover their capabilities.</p>
        </div>
      </div>

      {/* Counter Section */}
      <div className="mt-16">
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Projects Completed", value: 1200 },
              { label: "Happy Customers", value: 1424 },
              { label: "Years of Experience", value: 9 },
              { label: "Team Members", value: 50 },
            ].map((counter, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-black text-black text-3xl font-bold mb-4">
                  {counter.value}+
                </div>
                <p className="text-lg text-black">{counter.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
