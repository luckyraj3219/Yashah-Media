export default function AboveFooter() {
    return (
      <section className="bg-[#0e0e0e] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src="/yashahlogo.png" alt="Logo" className="w-40 mb-4" />
            <p>
              We thrive on creativity and <span className="text-red-500 underline">innovation</span>. Our team is constantly exploring new ideas and approaches to ensure your <span className="text-red-500 italic underline">digital presence</span> is fresh.
            </p>
          </div>
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Home</a></li>
              <li><a href="#" className="hover:text-red-500">About</a></li>
              <li><a href="#" className="hover:text-red-500">Services</a></li>
              <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold mb-2">📞 01245181301</p>
            <p>Unit No– 2012 DLF Corporate</p>
            <p>Green Tower A Sector 74a,</p>
            <p>SPR Road, Gurgaon</p>
          </div>
        </div>
      </section>
    );
  }
  