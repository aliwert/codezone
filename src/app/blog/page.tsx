import BlogSection from "../../components/blog/BlogSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="w-full max-w-[1440px] bg-zinc-800 min-h-screen">
        <BlogSection />
      </div>
    </div>
  );
}
