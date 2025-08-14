"use client";

import Image from "next/image";
import Navbar from "../desktop/Navbar";
import Link from "next/link";

type SideArticle = {
  image: string;
  title: string;
  href?: string;
};

export default function BlogSection() {
  const breadcrumb = [
    { label: "ANA SAYFA", href: "#" },
    { label: "BLOG", href: "#" },
    { label: "LOREM IPSUM DOLOR ... AMET", href: "#" },
  ];

  const sideArticles: SideArticle[] = [
    {
      image: "/kesfet1.png",
      title:
        "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES ...",
    },
    {
      image: "/kesfet2.png",
      title:
        "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES ...",
    },
    {
      image: "/kesfet3.png",
      title:
        "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES ...",
    },
    {
      image: "/kesfet4.png",
      title:
        "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES ...",
    },
  ];

  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-[#0B0B0B] text-white">
      <div className="w-full flex justify-center relative">
        <Navbar />
      </div>

      {/* bg layers */}
      <div className="absolute inset-0 z-0">
        {/* metal texture */}
        <Image
          src="/metal-texture-with-dust-scratches-cracks-textured-backgrounds (1) 1.png"
          alt="Metal texture background"
          fill
          className="object-cover opacity-80"
          priority
          style={{
            background: "rgba(240, 231, 77, 1)",
          }}
        />
        {/* main background svg  */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-[1248px] h-[1102px] mx-auto -top-[90px]">
            <Image
              src="/blogmainbackground.svg"
              alt="Blog background"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* bottom decorative vectors */}
        <div className="absolute left-0 bottom-0 w-[876px] h-[227px]">
          <Image
            src="/blogvector1.svg"
            alt="Left vector"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute right-0 bottom-0 w-[878px] h-[249px]">
          <Image
            src="/blogvector2.svg"
            alt="Right vector"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* content wrapper  */}
      <div className="relative z-10 w-[1248px] max-w-full mx-auto px-6 pt-10 pb-20">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-5 text-sm text-black font-saira">
            {breadcrumb.map((b, i) => (
              <li
                key={b.label}
                className="flex items-center gap-5"
                style={{
                  marginTop: "50px",
                  marginLeft: "90px",
                }}
              >
                <Link
                  href={b.href || "#"}
                  className="hover:text-white/95 transition-colors"
                >
                  {b.label}
                </Link>
                {i < breadcrumb.length - 1 && (
                  <Image src="/right-arrow.svg" width={5} height={9} alt="/" />
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* page title */}
        <h1
          className="font-saira-condensed text-[50px] leading-none tracking-wide mb-24 text-black"
          style={{
            marginTop: "50px",
            marginLeft: "90px",
          }}
        >
          BLOG
        </h1>

        {/* section 1 spotlight + sidebar */}
        <section className="grid grid-cols-1 xl:grid-cols-[740px_1fr] gap-14 xl:gap-[180px] items-start mb-24">
          {/* spotlight card */}
          <div>
            <div
              className="relative w-[738px] max-w-full h-[431px] overflow-hidden"
              style={{
                marginLeft: "90px",
                marginTop: "15px",
              }}
            >
              <Image
                src="/blogsinger.png"
                alt="Spotlight"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-20 left-12">
                <h2 className="text-4xl font-semibold tracking-wide">
                  LOREM FT - IPSUM
                </h2>
              </div>
              <button
                aria-label="Play"
                className="absolute bottom-[30px] right-[50px] w-[60px] h-[65px]   "
              >
                <Image
                  src="/blogplaybutton.svg"
                  alt="Play"
                  width={65}
                  height={65}
                />
              </button>
            </div>

            {/* text + pagination dots */}
            <div
              className="flex items-center gap-6"
              style={{ marginLeft: "130px", marginTop: "20px" }}
            >
              <p className="max-w-[524px] text-lg text-black m-0">
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET
                MASSA MI. MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A
                NEQUE PRETI ...
              </p>

              <div
                className="flex items-center gap-2.5"
                style={{
                  marginTop: "-50px",
                  marginRight: "-30px",
                }}
              >
                {[0, 1, 2, 3, 4].map((idx) => (
                  <span
                    key={idx}
                    className={
                      idx === 3
                        ? "inline-block w-[15px] h-[15px] rounded-full bg-black"
                        : "inline-block w-[9px] h-[9px] rounded-full bg-[#8E870D]"
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          {/* sidebar */}
          <aside className="flex flex-col gap-6">
            {sideArticles.map((a, idx) => (
              <article
                key={`${a.title}-${idx}`}
                className="flex items-start gap-5"
              >
                <div className="relative w-[175px] h-[105px] flex-shrink-0 overflow-hidden rounded-sm">
                  <Image
                    src={a.image}
                    alt="Article"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl leading-6 font-semibold text-white/90">
                  {a.title}
                </h3>
              </article>
            ))}
          </aside>
        </section>
      </div>
    </section>
  );
}
