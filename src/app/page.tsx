
import About from "@/components/About";
import ContactSection from "@/components/Contact";
import FAQsSection from "@/components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import LandingPage from "@/components/landingPage";


export default function Home() {
  
  return (
    <main className="w-[100%]">

      <Navbar/>
      <LandingPage/>
      <About id="about" title="about"/>
      <Services id="service" title="service"/>
      <FAQsSection id="faq" title="faq"/>
      <ContactSection id="contact" title="contact"/>
      <Footer/>
   

    </main>
  );
}
