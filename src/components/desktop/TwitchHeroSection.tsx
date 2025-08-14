import Image from "next/image";

export default function TwitchHeroSection() {
  return (
    <section className="relative w-full h-[80vh] bg-zinc-800 overflow-hidden Saira">
      {/* background container */}
      <div className="absolute inset-0 z-0">
        {/* background texture */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/metal-texture-with-dust-scratches-cracks-textured-backgrounds (1) 1.png"
            alt="background texture"
            fill
            className="object-cover"
          />
        </div>

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* main content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-8 items-center h-full">
            {/* left column man image */}
            <div className="flex justify-end">
              <div className="w-[350px] h-[450px] relative overflow-hidden rounded-lg transform translate-x-8 -translate-y-31 z-50">
                <Image
                  src="/2T1A9931 1.png"
                  alt="Male streamer"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                />
              </div>
            </div>

            {/* center column twitch content */}
            <div className="flex flex-col items-center justify-start relative">
              <div className="w-full h-[300px] absolute -top-100 right-16 transform -rotate-[1deg] p-4">
                {/* twitch logo and content */}
                <div className="absolute top-4 left-2">
                  <Image
                    src="/twitch.svg"
                    alt="Twitch logo"
                    width={225}
                    height={150}
                  />
                </div>

                {/* separator */}
                <div
                  className="absolute opacity-80"
                  style={{
                    left: "220px",
                    top: "10px",
                    width: "10.6693696975708px",
                    height: "180px",
                  }}
                >
                  <Image
                    src="/seperate.svg"
                    alt="separator"
                    width={10.6693696975708}
                    height={180}
                    className="object-contain w-full h-full"
                    style={{
                      filter: "brightness(1.2) contrast(1.1)",
                    }}
                  />
                </div>

                {/* text content */}
                <div className="absolute top-4 left-[250px] flex flex-col justify-start text-left -rotate-[3deg]">
                  <h2
                    className="text-white uppercase"
                    style={{
                      fontFamily: "var(--font-saira-condensed), sans-serif",
                      fontWeight: 300,
                      fontSize: "68.24px",
                      lineHeight: "89%",
                      letterSpacing: "0%",
                    }}
                  >
                    HER HAFTA
                  </h2>
                  <h2
                    className="text-[#F0E74D] uppercase"
                    style={{
                      fontFamily: "var(--font-saira-condensed), sans-serif",
                      fontWeight: 700,
                      fontSize: "68.24px",
                      lineHeight: "89%",
                      letterSpacing: "0%",
                    }}
                  >
                    CANLIDAYIZ!
                  </h2>
                  <p
                    className="text-white mt-2"
                    style={{
                      fontFamily: "var(--font-saira), sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "104%",
                      letterSpacing: "1.5%",
                    }}
                  >
                    Bizi Takip Edin!
                  </p>
                </div>

                <div
                  className="absolute bottom-12 left-40 flex items-center gap-4 rotate-[-3deg]"
                  style={{
                    borderRadius: "16px",
                    padding: "12px 16px",
                    border: "1.5px solid #222",
                  }}
                >
                  {/* follow button */}
                  <button
                    className="flex items-center bg-[#864CF6]  text-white rounded-lg transition-colors"
                    style={{
                      width: "106.25103287457594px",
                      height: "37.091740669121776px",
                      opacity: 1,
                      borderRadius: "7.03px",
                      gap: "8.2px",
                      paddingTop: "10.55px",
                      paddingRight: "14.06px",
                      paddingBottom: "10.55px",
                      paddingLeft: "14.06px",
                    }}
                  >
                    <Image
                      src="/hearth.svg"
                      alt="heart"
                      width={16}
                      height={16}
                    />
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: "14px",
                        fontFamily: "Helvetica, sans-serif",
                      }}
                    >
                      Takip Et
                    </span>
                  </button>

                  {/* subscribe button */}
                  <button
                    className="flex items-center bg-[#222123] text-white rounded-lg transition-colors"
                    style={{
                      width: "140px",
                      height: "37.091740669121776px",
                      opacity: 1,
                      borderRadius: "7.03px",
                      gap: "8.2px",
                      paddingTop: "10.55px",
                      paddingRight: "14.06px",
                      paddingBottom: "10.55px",
                      paddingLeft: "14.06px",
                    }}
                  >
                    <Image src="/star.svg" alt="star" width={20} height={20} />
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: "14px",
                        fontFamily: "Helvetica, sans-serif",
                      }}
                    >
                      Abone Ol
                    </span>
                    <Image
                      src="/dropdown.svg"
                      alt="dropdown"
                      width={10}
                      height={10}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* right column woman image */}
            <div className="flex justify-start">
              <div className="w-[350px] h-[550px] relative overflow-hidden rounded-lg transform -translate-x-6 -translate-y-22">
                <Image
                  src="/image00003.png"
                  alt="Female streamer"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* konser.jpg */}
      <div className="absolute bottom-[280px] h-[190px] z-5 w-full max-w-[1350px] left-1/2 transform -translate-x-1/2">
        <Image
          src="/konser.jpg"
          alt="Concert scene"
          fill
          className="object-cover opacity-50"
          style={{ filter: "grayscale(0.9) contrast(0.5) brightness(0.3)" }}
        />
      </div>

      {/* Vector-2.svg */}
      <div className="absolute bottom-[190px] z-20 w-full max-w-[1400px] left-1/2 transform -translate-x-1/2">
        <Image
          src="/Vector3.svg"
          alt="segmented bottom edge"
          width={1400}
          height={186}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
