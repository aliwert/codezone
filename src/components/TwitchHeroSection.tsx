import Image from "next/image";

export default function TwitchHeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden Saira">
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
      <div className="relative z-10 w-full h-full flex items-center justify-center min-h-screen">
        <div className="w-full max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-8 items-center h-full">
            {/* left column man image */}
            <div className="flex justify-end">
              <div className="w-[350px] h-[450px] relative overflow-hidden rounded-lg transform translate-x-8 -translate-y-31">
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
            <div className="flex flex-col items-center justify-start space-y-6 relative">
              <div className="w-full h-[300px] absolute -top-100 right-16 transform -rotate-[2deg] p-4">
                {/* twitch logo and content */}
                <div className="absolute top-4 left-4 flex items-start gap-2">
                  <Image
                    src="/twitch.svg"
                    alt="Twitch logo"
                    width={200}
                    height={150}
                  />

                  {/* separator */}
                  <div
                    className="opacity-80"
                    style={{
                      width: "10.6693696975708px",
                      height: "144.6890106201172px",
                      border: "0.1px solid #3B3B3B",
                      rotate: "-3deg",
                    }}
                  >
                    <Image
                      src="/seperate.svg"
                      alt="separator"
                      width={10.6693696975708}
                      height={144.6890106201172}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* text content */}
                  <div className="flex flex-col justify-start  text-left -rotate-[4deg]">
                    <h2
                      className="text-white uppercase"
                      style={{
                        fontFamily: "Saira Condensed",
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
                        fontFamily: "Saira Condensed",
                        fontWeight: 700,
                        fontSize: "68.24px",
                        lineHeight: "89%",
                        letterSpacing: "0%",
                      }}
                    >
                      CANLIDAYIZ
                    </h2>
                    <p
                      className="text-white mt-1"
                      style={{
                        fontFamily: "Saira",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "104%",
                        letterSpacing: "1.5%",
                      }}
                    >
                      Bizi Takip Edin!
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-12 left-30 flex items-center gap-4 -rotate-[4deg]">
                  {/* follow button */}
                  <button
                    className="flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
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
                      width={15.92637010269168}
                      height={13.666360275248}
                    />
                    <span className="text-xs font-medium">Takip Et</span>
                  </button>

                  {/* subscribe button */}
                  <button
                    className="flex items-center bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    style={{
                      width: "120px",
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
                    <Image src="/star.svg" alt="star" width={14} height={14} />
                    <span className="text-xs font-medium">Abone Ol</span>
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
    </section>
  );
}
