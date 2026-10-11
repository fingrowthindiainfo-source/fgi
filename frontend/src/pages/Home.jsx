import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AudienceCards from "@/components/AudienceCards";
import StartWork from "@/components/StartWork";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Eligibility from "@/components/Eligibility";
import Leadership from "@/components/Leadership";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <AudienceCards />
      <StartWork />
      <HowItWorks />
      <Benefits />
      <Eligibility />
      <Leadership />
      <Faq />
      <Contact />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Home;
