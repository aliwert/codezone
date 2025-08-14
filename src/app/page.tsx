import TrendsSection from "../components/desktop/TrendsSection";
import HeroSection from "../components/desktop/HeroSection";
import TwitchHeroSection from "../components/desktop/TwitchHeroSection";
import FavoritesOfMonths from "../components/desktop/FavoritesOfMonths";
import DiscoverySection from "../components/desktop/DiscoverySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="w-full max-w-[1440px] bg-zinc-800 min-h-screen">
        <HeroSection />
        <TwitchHeroSection />
        <TrendsSection />
        <FavoritesOfMonths />
        <DiscoverySection />
      </div>
    </div>
  );
}
