import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
