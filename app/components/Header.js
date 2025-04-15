export default function Header() {
  return (
    <header className="bg-white p-4 flex justify-between items-center sticky top-0 z-50">
      <a href="#home">
        <img src="/logo.png" alt="Yashah Media Logo" className="h-20" />
      </a>
      <nav className="space-x-10">
        <a href="#home" className="text-black hover:text-red-500">Home</a>
        <a href="#about" className="text-black hover:text-red-500">About</a>
        <a href="#services" className="text-black hover:text-red-500">Services</a>
        <a href="#blog" className="text-black hover:text-red-500">Blog</a>
        <a href="#gallery" className="text-black hover:text-red-500">Gallery</a>
        <a href="#contact" className="text-black hover:text-red-500">Contact</a>
      </nav>
    </header>
  );
}
