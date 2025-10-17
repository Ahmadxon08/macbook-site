import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Showcase from "./components/Showcase";
import Performence from "./components/Performence";
import Features from "./components/Features";

gsap.registerEffect(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performence />
      <Features />
    </main>
  );
};

export default App;
