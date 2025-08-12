import HeroSection from "../components/HeroSection";
import TwitchHeroSection from "../components/TwitchHeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center">
      <HeroSection />
      <TwitchHeroSection />
    </div>
  );
}
