import AboutUs from './components/AboutUs';
import AboveFooter from './components/AboveFooter';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Blog />
      <Gallery />
      <ContactForm />
      <AboveFooter />
      <Footer />
    </main>
  );
}
