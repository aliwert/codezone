"use client";

import Image from "next/image";

const clips = [
  {
    src: "/clipsimage1.png",
    alt: "Clip 1",
    text: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS.",
  },
  {
    src: "/clipsimage2.png",
    alt: "Clip 2",
    text: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS.",
  },
  {
    src: "/clipsimage3.png",
    alt: "Clip 3",
    text: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS.",
  },
];

export default function ClipsSection() {
  return (
    <section
      className="relative bg-[#121214]"
      style={{
        marginTop: "-20px",
      }}
    >
      {/* background on the right */}
      <Image
        src="/clipspath.svg"
        alt="clips decorative"
        width={600}
        height={600}
        className="pointer-events-none select-none absolute"
        style={{ right: 0, top: 0, zIndex: 0 }}
      />

      {/* header */}
      <div
        className="relative z-10 flex items-center gap-4"
        style={{ marginLeft: "70px", marginTop: "20px", marginBottom: "30px" }}
      >
        <h2
          className="text-white uppercase tracking-tight"
          style={{
            fontFamily: "var(--font-saira-condensed), sans-serif",
            fontSize: "60px",
            letterSpacing: "-1px",
            fontWeight: "bold",
            marginTop: "50px",
          }}
        >
          KLİPLER
        </h2>
        <Image
          src="/clips.svg"
          alt="clips icon"
          width={50}
          height={50}
          style={{ marginTop: "50px" }}
        />
      </div>

      {/* clips */}
      <div
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6"
        style={{ marginLeft: "70px", marginRight: "70px" }}
      >
        {clips.map((c, idx) => (
          <article key={idx} className="flex flex-col">
            <div className="relative w-full aspect-[414/245] overflow-hidden rounded-md bg-black/20">
              <Image src={c.src} alt={c.alt} fill className="object-cover" />
              {/* play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/blogplaybutton.svg"
                  alt="Play"
                  width={71}
                  height={71}
                />
              </div>
            </div>
            <p
              className="mt-6 text-white"
              style={{
                fontFamily: "var(--font-saira-condensed), sans-serif",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "28px",
                marginLeft: "20px",
                marginRight: "20px",
                marginTop: "30px",
              }}
            >
              {c.text}
            </p>
          </article>
        ))}
      </div>

      {/* daha fazla gor */}
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
            className="relative z-[1] h-[49px] px-8 text-black font-bold"
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
            Daha Fazla Gör
          </button>
        </div>
      </div>
    </section>
  );
}
