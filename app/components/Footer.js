import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black px-4 py-4 flex flex-col md:flex-row justify-between items-center">
      <p>&copy; {new Date().getFullYear()} Yashah Media. All rights reserved.</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black p-2 rounded-full hover:bg-black hover:text-white transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black p-2 rounded-full hover:bg-black hover:text-white transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black p-2 rounded-full hover:bg-black hover:text-white transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black p-2 rounded-full hover:bg-black hover:text-white transition"
        >
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}
