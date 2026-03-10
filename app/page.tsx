import Hero from "@/components/landing-page/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Cta from "@/components/landing-page/cta";
import HowItWorks from "@/components/landing-page/how-it-works";
import Topics from "@/components/landing-page/topics";
import Privacy from "@/components/landing-page/privacy";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[rgb(50,59,54)] font-sans text-[#E6EAE8]">
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <Topics />
      <HowItWorks />
      <Privacy />
      <Cta />
      <Footer />
    </div>
  );
}
