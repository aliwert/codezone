"use client";

import Image from "next/image";
import Navbar from "../desktop/Navbar";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

type SideArticle = {
  image: string;
  title: string;
  href?: string;
};

export default function BlogSection() {
  const sideArticles: SideArticle[] = [
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
    {
      image: "/kesfet5.png",
      title:
        "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES ...",
    },
    {
      image: "/kesfet2.png",
      title:
        "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES ...",
    },
  ];

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-[#0B0B0B] text-white">
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
          className="object-cover opacity-90"
          priority
          style={{
            background: "#FCFF32",
          }}
        />
        {/* main background svg  */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-[1100px] h-[1250px] mx-auto -top-[120px] left-[380px]">
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
        <div className="absolute left-0 bottom-[-80px] w-[876px] h-[227px]">
          <Image
            src="/blogvector1.svg"
            alt="Left vector"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute right-0 bottom-[-80px] w-[878px] h-[249px]">
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
        {/* top breadcrumb */}
        <div
          className="flex font-saira text-black uppercase text-[14px] leading-none tracking-[0.02em] gap-3"
          style={{
            marginTop: "65px",
            marginLeft: "70px",
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          <Link href="#" className="hover:opacity-90">
            ANA SAYFA
          </Link>
          <span className="">
            <GoChevronRight />
          </span>
          <Link href="#" className="hover:opacity-90">
            BLOG
          </Link>
          <span className="">
            <GoChevronRight />
          </span>
          <Link href="#" className="hover:opacity-90">
            LOREM IPSUM DOLOR ... AMET
          </Link>
        </div>

        {/* page title */}
        <h1
          className="font-saira-condensed text-[50px] leading-none tracking-wide mb-24 text-[#121212]"
          style={{
            marginTop: "30px",
            marginLeft: "70px",
            fontWeight: 700,
            fontSize: "60px",
            fontStyle: "bold",
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
                marginLeft: "70px",
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
              <div className="absolute bottom-8 left-12">
                <h2
                  className="text-4xl font-semibold tracking-wide"
                  style={{
                    fontWeight: 700,
                    fontFamily: "var(--font-saira-condensed), sans-serif",
                  }}
                >
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
              <p
                className="max-w-[524px] text-black"
                style={{
                  fontWeight: 700,
                  fontSize: "25px",
                  letterSpacing: 0,
                  lineHeight: "104%",
                  fontFamily: "var(--font-saira-condensed), sans-serif",
                }}
              >
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
          <aside
            className="flex flex-col gap-6 md:gap-8"
            style={{
              marginLeft: "-90px",
              marginTop: "15px",
            }}
          >
            {sideArticles.map((a, idx) => (
              <article
                key={`${a.title}-${idx}`}
                className="flex items-start gap-5"
              >
                <div className="relative w-[150px] h-[100px] flex-shrink-0 overflow-hidden rounded-[2px] ring-1 ring-black/10">
                  <Image
                    src={a.image}
                    alt="Article"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3
                  className="font-saira-condensed text-black leading-6 tracking-[0.02em] font-extrabold"
                  style={{
                    fontWeight: 700,
                    fontSize: "25px",
                    width: "350px",
                    letterSpacing: 0,
                  }}
                >
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
