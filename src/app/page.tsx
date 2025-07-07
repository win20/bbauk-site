import HeroSection from "@/components/home-sections/hero";
import ProgramsAndServicesSection from "@/components/home-sections/programs-and-services";
import UpdatesSection from "@/components/home-sections/updates";
import UpcomingEvents from "@/components/home-sections/upcoming";

export default function Home() {
  return (
    <div className="min-h-screen font-pt-sans">
      <HeroSection />
      <ProgramsAndServicesSection />
      <UpdatesSection />
      <UpcomingEvents />
    </div>
  );
}
