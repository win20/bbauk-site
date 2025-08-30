import Hero from "@/components/home-sections/Hero";
import Programs from "@/components/home-sections/Programs";
import Gallery from "@/components/home-sections/Gallery";
import Contact from "@/components/home-sections/Contact";
import Updates from "@/components/home-sections/Updates";
import Upcoming from "@/components/home-sections/Upcoming";

export default function Home() {
  return (
    <div className="min-h-screen font-pt-sans">
      <Hero />
      <Programs />
      <Updates />
      <Upcoming />
      <Gallery />
      <Contact />
    </div>
  );
}
