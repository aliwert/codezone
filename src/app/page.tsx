import TrendsSection from "@/components/TrendsSection";
import HeroSection from "../components/HeroSection";
import TwitchHeroSection from "../components/TwitchHeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="w-full max-w-[1440px] bg-zinc-800 min-h-screen">
        <HeroSection />
        <TwitchHeroSection />
        <TrendsSection />
      </div>
    </div>
  );
}
