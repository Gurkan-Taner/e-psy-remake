import Navbar from "@/components/landing-page/navbar";

import Hero from "@/components/landing-page/hero";
import Engagement from "@/components/landing-page/engagement";

export default function Lp() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-300">
      <header>
        <Navbar />
      </header>

      <main className="flex-1">
        <Hero />
        <Engagement />
      </main>
    </div>
  );
}
