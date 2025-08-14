import BlogSection from "../../components/blog/BlogSection";
import BlogDiscoverySection from "../../components/blog/BlogDiscoverySection";
import ClipsSection from "@/components/blog/ClipsSection";
import BlogFooter from "@/components/blog/BlogFooter";

export default function Page() {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="w-full max-w-[1440px] bg-[#121214] min-h-screen">
        <BlogSection />
        <BlogDiscoverySection />
        <ClipsSection />
        <BlogFooter />
      </div>
    </div>
  );
}
