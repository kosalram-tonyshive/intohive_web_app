import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
      </main>
      <Footer />
    </>
  );
}
