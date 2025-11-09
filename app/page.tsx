import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AsideHero from "./components/New2";
import New3 from "./components/New3";
import RealTimeTranscription from "./components/New4";
import New5 from "./components/New5";
import New6 from "./components/New6";
import New7 from "./components/New7";
import New8 from "./components/New8";

export default function Home() {
  return (
    <>
      <Navbar /> {/* outside the overflow-hidden div */}
      <div className="w-full h-full overflow-hidden relative">
        <HeroSection />
        <AsideHero />
        <New3 />
        <RealTimeTranscription />
        <div className="lg:p-10 p-2">
          <New5 />
        </div>
        <New8 />
        <New7 />
        <New6 />
      </div>
    </>
  );
}
