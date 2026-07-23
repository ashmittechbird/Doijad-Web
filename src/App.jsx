import { useLenis } from "./lib/lenis.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Mission from "./components/Mission.jsx";
import Services from "./components/Services.jsx";
import Ecosystem from "./components/Ecosystem.jsx";
// import Team from "./components/Team.jsx"; // moved to the About Us page — leadership belongs there, not the homepage
import Training from "./components/Training.jsx";
import Process from "./components/Process.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useLenis();

  return (
    <>
      {/* Film-grain texture overlay — fixed, pointer-events:none */}
      <div className="grain" aria-hidden />
      <Navbar />
      <main className="bg-bg">
        <Hero />       {/* Dark hero — photo + "Doijad." mega text + stats */}
        <Mission />    {/* About — statement + photo */}
        <Services />   {/* Services — mega heading + [01]–[06] editorial rows */}
        <Ecosystem />  {/* Expertise — ghost text disciplines + logo belts */}
        {/* <Team /> */} {/* A Culture of— Care — leadership cards — moved to About Us page */}
        <Training />   {/* Training — two-col content + parallax photo */}
        <Process />    {/* Process — mega heading + numbered steps */}
        <Faq />        {/* Questions — accordion + CTA */}
      </main>
      <Footer />       {/* CTA + nav + massive "Doijad." brand name */}
    </>
  );
}
