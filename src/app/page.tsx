import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
