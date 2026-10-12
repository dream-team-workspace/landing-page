import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Studio } from "./components/Studio";
import { StatsBand } from "./components/StatsBand";
import { Values } from "./components/Values";
import { Stack } from "./components/Stack";
import { Process } from "./components/Process";
import { Cases } from "./components/Cases";
import { Tech } from "./components/Tech";
import { InsideApps } from "./components/InsideApps";
import { GetApps } from "./components/GetApps";
import { Beliefs } from "./components/Beliefs";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useRevealOnScroll } from "./hooks";

export default function App() {
  useRevealOnScroll();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Studio />
        <StatsBand />
        <Values />
        <Stack />
        <Process />
        <Cases />
        <Tech />
        <InsideApps />
        <GetApps />
        <Beliefs />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
