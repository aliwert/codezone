import BlogSection from "../../components/blog/BlogSection";
import BlogDiscoverySection from "../../components/blog/BlogDiscoverySection";
import ClipsSection from "@/components/blog/ClipsSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="w-full max-w-[1440px] bg-zinc-800 min-h-screen">
        <BlogSection />
        <BlogDiscoverySection />
        <ClipsSection />
      </div>
    </div>
  );
}
