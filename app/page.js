import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import AboveFooter from './components/AboveFooter'; 
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Blog />
      <Gallery />
      <ContactForm />
      <AboveFooter />
      <Footer />
    </main>
  );
}
