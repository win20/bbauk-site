import HeroSection from "@components/hero-section";
import ProgramsAndServicesSection from "@components/programs-and-services-section";
import UpdatesSection from "@components/updates-section";

export default function Home() {
  return (
    <div className="min-h-screen font-pt-sans">
      <HeroSection />
      <ProgramsAndServicesSection />
      <UpdatesSection />
    </div>
  );
}
