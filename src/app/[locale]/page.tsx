import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/pages/home/Hero.section";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#FDFDFD] selection:bg-luxury-200 selection:text-luxury-900">
      <Navbar />
      <main>
        <Hero />
      </main>

      {/* Decorative footer gradient for page continuity feeling */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
}
