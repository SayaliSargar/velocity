import Navigation from "./components/navigation/Navigation";

import Hero from "./sections/hero/Hero";
import FeaturedVehicle from "./sections/featured-vehicle/FeaturedVehicle";
import Performance from "./sections/performance/Performance";
import DesignStory from "./sections/design/DesignStory";
import Technology from "./sections/technology/Technology";
import Collection from "./sections/collection/Collection";
import Gallery from "./sections/gallery/Gallery";
import FinalCTA from "./sections/cta/FinalCTA";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <FeaturedVehicle />
        <Performance />
        <DesignStory />
        <Technology />
        <Collection />
        <Gallery />
        <FinalCTA />
      </main>
    </>
  );
}

export default App;