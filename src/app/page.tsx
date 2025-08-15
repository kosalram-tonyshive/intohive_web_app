import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
