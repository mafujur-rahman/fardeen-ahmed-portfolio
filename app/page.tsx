import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import About from "@/components/About";
import Background from "@/components/Background";
import Ventures from "@/components/Ventures";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
      <Services />
      <About />
      <Background />
      <Ventures />
      <Cta />
      <Faq />
      <Footer />
    </main>
  );
}
