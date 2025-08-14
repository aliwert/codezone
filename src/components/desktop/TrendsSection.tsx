import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function TrendsSection() {
  const articles = [
    {
      id: "01",
      title:
        "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.",
      author: "Jonathan Stewart",
      readMore: "Daha Fazla Oku",
      image: "/image1.png",
    },
    {
      id: "02",
      title:
        "PRAESENT LOREM ORCI, MATTIS NON EFFICITUR ID CURABITUR AT RISUS SODALES AENEAN AT.",
      author: "Steve Rogerson",
      readMore: "Daha Fazla Oku",
      image: "/image2.png",
    },
    {
      id: "03",
      title:
        "ULTRICIES DIGNISSIM NIBH UT CURSUS. NAM ET QUAM SIT AMET TURPIS FINIBUS MAXIMUS ...",
      author: "Ismail Kor",
      readMore: "Daha Fazla Oku",
      image: "/image3.png",
    },
    {
      id: "04",
      title:
        "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.",
      author: "Jonathan Stewart",
      readMore: "Daha Fazla Oku",
      image: "/image1.png",
    },
    {
      id: "05",
      title:
        "PRAESENT LOREM ORCI, MATTIS NON EFFICITUR ID CURABITUR AT RISUS SODALES AENEAN AT.",
      author: "Steve Rogerson",
      readMore: "Daha Fazla Oku",
      image: "/image2.png",
    },
    {
      id: "06",
      title:
        "ULTRICIES DIGNISSIM NIBH UT CURSUS. NAM ET QUAM SIT AMET TURPIS FINIBUS MAXIMUS ...",
      author: "Ismail Kor",
      readMore: "Daha Fazla Oku",
      image: "/image3.png",
    },
  ];

  return (
    <section
      className="w-full bg-[#121214] "
      style={{
        paddingLeft: "90px",
        paddingRight: "90px",
        paddingBottom: "80px",
      }}
    >
      {/* header */}
      <header
        className="flex items-center gap-8"
        style={{ marginBottom: "90px" }}
      >
        <h1
          className="text-white text-6xl font-bold uppercase"
          style={{
            fontFamily: "var(--font-saira-condensed), sans-serif",
            letterSpacing: "-2px",

            zIndex: 99999,
          }}
        >
          TRENDLER
        </h1>
        <Image
          className="w-[66px] h-[66px]"
          alt="Trending up"
          src="/trend.svg"
          width={66}
          height={66}
          style={{
            zIndex: 99999,
          }}
        />
      </header>

      {/* articles Grid */}
      <div className="grid grid-cols-3 gap-x-[10px] gap-y-[20px] mb-[117px]">
        {articles.map((article) => (
          <article
            key={article.id}
            className="w-[420px] h-[200px] bg-transparent relative transition-opacity"
          >
            {/* article numbers */}
            <div
              className="absolute top-2 text-6xl text-[#2A2A2A]"
              style={{
                fontFamily: "var(--font-saira-condensed), sans-serif",
                fontSize: "60px",
                fontWeight: 700,
                fontStyle: "bold",
                marginLeft: "10px",
              }}
            >
              {article.id}
            </div>

            {/* author section */}
            <div className="flex items-center gap-3 absolute top-4 left-[120px]">
              <div className="w-[35px] h-[35px] relative rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="text-white text-sm"
                style={{
                  fontFamily: "var(--font-saira), sans-serif",
                  fontSize: "16px",
                }}
              >
                {article.author}
              </div>
            </div>

            {/* article title */}
            <div
              className="w-[300px] absolute top-[55px] left-[120px] text-white leading-tight"
              style={{
                fontFamily: "var(--font-saira-condensed), sans-serif",
                fontSize: "25px",
                fontWeight: 700,
                lineHeight: "104%",
                marginTop: "10px",
              }}
            >
              {article.title}
            </div>

            {/* separator line */}
            <div className="absolute w-[280px] h-px top-[155px] left-[120px] bg-gray-600"></div>

            {/* read More link */}
            <div className="absolute top-[175px] left-[120px]">
              <div className="flex items-center group cursor-pointer">
                <span
                  className="text-white text-sm cursor-pointer"
                  style={{
                    fontFamily: "var(--font-saira), sans-serif",
                    fontSize: "16px",
                  }}
                >
                  {article.readMore}
                </span>
                <ArrowRight
                  size={22}
                  className="text-[#F0E74D] opacity-0 group-hover:opacity-100 transition-opacity duration-800"
                  style={{ marginLeft: "8px" }}
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* tumunu gor section */}
      <div
        className="relative z-10 flex justify-center"
        style={{
          marginTop: "40px",
        }}
      >
        <div className="relative inline-block">
          <span
            aria-hidden
            className="absolute inset-0"
            style={{
              transform: "translate(-8px, 6px)",
              background: "#0B0B0B",
              borderRadius: "2px",
              clipPath: "polygon(0 0, 100% 0, 93% 100%, 6% 95%);",
            }}
          />

          <button
            type="button"
            className="relative z-[1] h-[45px] px-8 text-black font-bold"
            style={{
              fontFamily: "var(--font-saira), sans-serif",
              width: "200px",
              background: "white",
              border: "1px solid white",
              borderRadius: "2px",
              cursor: "pointer",
              clipPath: "polygon(0 0, 100% 0, 93% 100%, 6% 95%);",
            }}
          >
            Tümünü Gör
          </button>
        </div>
      </div>
    </section>
  );
}
