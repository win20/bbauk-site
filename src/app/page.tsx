import HeroSection from "@components/hero-section";
import ProgramsAndServicesSection from "@components/programs-and-services-section";

export default function Home() {
  return (
    <div className="min-h-screen font-pt-sans">
      <HeroSection />
      <ProgramsAndServicesSection />
    </div>
  );
}
