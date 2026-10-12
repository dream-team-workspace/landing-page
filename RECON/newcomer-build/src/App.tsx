import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Platforms } from "./components/Platforms";
import { Studio } from "./components/Studio";
import { Inside } from "./components/Inside";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";
import { useRevealOnScroll } from "./hooks";

export default function App() {
  useRevealOnScroll();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Platforms />
        <Studio />
        <Inside />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
