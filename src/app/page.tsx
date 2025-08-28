import Hero from "components/home-sections/hero";
import Programs from "components/home-sections/programs";
import Gallery from "components/home-sections/gallery";
import Updates from "components/home-sections/updates";
import Upcoming from "components/home-sections/upcoming";

export default function Home() {
  return (
    <div className="min-h-screen font-pt-sans">
      <Hero />
      <Programs />
      <Updates />
      <Upcoming />
      <Gallery />
    </div>
  );
}
