import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section
      className="relative mx-auto overflow-hidden bg-black"
      style={{
        width: "1440px",
        height: "703px",
        opacity: 1,
        transform: "rotate(0deg)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hip-hop-singer-stage-during-concertative-ai 2.png"
          alt="Hip hop artist on stage"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "1% 20%",
            opacity: 1,
          }}
          priority
        />
        {/* right darkening */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/95" />
        {/* top gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />
        {/* bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        {/* texture overlay */}
        <Image
          src="/metal-texture-with-dust-scratches-cracks-textured-backgrounds (1) 1.png"
          alt="Texture overlay"
          fill
          style={{ objectFit: "cover", mixBlendMode: "overlay", opacity: 0.08 }}
          priority
        />
      </div>

      {/* content area */}
      <div className="relative z-10 max-w-[1440px] mx-auto h-full px-[84px] py-20">
        <div className="grid grid-cols-12 items-center min-h-[720px]">
          {/* left spacing*/}
          <div className="col-span-7" />

          {/* text block */}
          <div className="col-span-5 pr-6">
            <h1
              className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-bold"
              style={{
                fontFamily: "Saira Condensed",
                fontWeight: 700,
                fontSize: "60.1px",
                lineHeight: "110.00000000000001%",
                letterSpacing: "-2%",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              TÜRKÇE RAP VE
              <br />
              DÜNYA MÜZİK
              <br />
              HABERLERİNİ TAKİP ET
            </h1>

            <p className="mb-8 max-w-[420px] text-[15px] leading-[1.6] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>

            {/* cta */}
            <div className="relative w-[130px] h-[42px] select-none cursor-pointer hover:opacity-90 transition-opacity">
              <Image src="/devaminioku.svg" alt="Devamını Oku" fill priority />
              <span
                className="absolute left-[16px] top-[9px] text-[14px] font-bold"
                style={{ fontFamily: "Saira, sans-serif", color: "#121212" }}
              >
                Devamını Oku
              </span>
            </div>
          </div>
        </div>

        {/* pagination dots */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-12 z-20 flex items-center gap-2">
          <Image src="/Ellipse 3.svg" alt="dot" width={6} height={6} />
          <Image src="/Ellipse 4.svg" alt="dot" width={6} height={6} />
          <Image src="/Ellipse 6.svg" alt="active-dot" width={12} height={12} />
          <Image src="/Ellipse 7.svg" alt="dot" width={6} height={6} />
          <Image src="/Ellipse 8.svg" alt="dot" width={6} height={6} />
        </div>
      </div>

      {/* left arrow  */}
      <button className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hover:opacity-80 transition-opacity">
        <Image src="/left-arrow.svg" alt="Previous" width={32} height={32} />
      </button>

      {/* right arrow */}
      <button className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hover:opacity-80 transition-opacity">
        <Image src="/right-arrow.svg" alt="Next" width={32} height={32} />
      </button>

      {/* bottom torn vector */}
      <div className="absolute left-0 right-0 bottom-0 z-10">
        <Image
          src="/Vector-2.svg"
          alt="bottom edge"
          width={1920}
          height={186}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
