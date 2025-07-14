import Hero from "components/home-sections/hero";
import Programs from "components/home-sections/programs";
import Updates from "components/home-sections/updates";
import Upcoming from "components/home-sections/upcoming";
import Contact from "components/home-sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen font-pt-sans">
      <Hero />
      <Programs />
      <Updates />
      <Upcoming />
      <Contact />
    </div>
  );
}
