import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";

const musicCards = [
  {
    artist: "50 CENT",
    song: "CURTIS",
    ranking: "Top 10 (2. Sıra)",
    coverImage: "/50cent.png",
  },
  {
    artist: "SNOPP DOGG",
    song: "ALGORITHM",
    ranking: "Top 10 (3. Sıra)",
    coverImage: "/image2.png",
  },
  {
    artist: "CEZA",
    song: "RÜZGAR",
    ranking: "Top 10 (1. Sıra)",
    coverImage: "/image3.png",
  },
];

export default function FavoritesOfMonths() {
  return (
    <section
      className="relative w-full bg-[#121214] overflow-hidden"
      style={{
        height: "447px",
        paddingLeft: "90px",
        paddingRight: "90px",
      }}
    >
      {/* background vector */}
      <div className="absolute top-0 left-0 w-full h-[353px]">
        <Image
          src="/beyazbg.svg"
          alt="Background"
          width={580}
          height={127}
          className="absolute top-0 left-0"
        />
      </div>

      {/* main title */}
      <div
        className="absolute text-white text-6xl font-bold uppercase leading-tight"
        style={{
          top: "173px",
          left: "87px",
          fontFamily: "var(--font-saira-condensed), sans-serif",
          letterSpacing: "-2px",
        }}
      >
        AYIN
        <br />
        FAVORİLERİ
      </div>

      {/* youtube and spotify */}
      <div className="absolute top-[32px] left-[98px] cursor-pointer flex items-center gap-2">
        <FaYoutube
          size={48}
          className="text-black transition-colors duration-200"
        />
        <p
          className="text-black text-3xl font-semibold"
          style={{
            fontFamily: "var(--font-saira), sans-serif",
          }}
        >
          YouTube
        </p>
      </div>

      <div className="absolute top-[32px] left-[297px] cursor-pointer flex items-center gap-2 group">
        <FaSpotify
          size={48}
          className="text-black group-hover:text-green-500 transition-colors duration-200"
        />
        <p
          className="text-black text-2xl font-semibold group-hover:text-green-500 transition-colors duration-200"
          style={{
            fontFamily: "var(--font-saira), sans-serif",
          }}
        >
          Spotify
        </p>
      </div>

      {/* music cards */}
      <div
        className="absolute overflow-hidden"
        style={{
          width: "926px",
          height: "264px",
          top: "89px",
          left: "520px",
        }}
      >
        <div className="flex gap-[125px] w-max">
          {musicCards.map((card, index) => (
            <div
              key={index}
              className="w-[274px] h-[264px] relative bg-[#2A2A2A] rounded-lg overflow-hidden group cursor-pointer"
            >
              {/* album cover */}
              <div
                className="absolute w-[274px] h-[200px] transition-all duration-500 ease-in-out group-hover:left-0 group-hover:top-0 group-hover:rotate-0 "
                style={{
                  left: "-55%",
                  top: "50px",
                  transform: "rotate(-15deg)",
                }}
              >
                <Image
                  src={card.coverImage}
                  alt={`${card.artist} - ${card.song}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 274px"
                  className="object-contain"
                  quality={100}
                />

                {/* play button */}
                <button
                  className="absolute bg-transparent"
                  style={{
                    width: "60px",
                    height: "60px",
                    top: "50%",
                    left: "58%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Image
                    src="/playbutton.svg"
                    alt="Play button"
                    width={60}
                    height={60}
                    className="w-full h-full"
                  />
                </button>
              </div>

              {/* text content */}
              <div
                className="absolute text-white transition-opacity duration-500 group-hover:opacity-0 z-10"
                style={{
                  top: "30px",
                  right: "25px",
                  fontFamily: "var(--font-saira), sans-serif",
                  textAlign: "right",
                }}
              >
                {/* ranking */}
                <div className="text-xs font-medium mb-4 opacity-90">
                  {card.ranking}
                </div>

                {/* artist */}
                <div className="text-2xl font-bold mb-2 leading-tight">
                  {card.artist}
                </div>

                {/* song */}
                <div className="text-xl font-bold">{card.song}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* progress bar */}
      <div
        className="absolute bg-gray-800 rounded-full"
        style={{
          width: "626px",
          height: "5px",
          top: "401px",
          left: "731px",
        }}
      >
        <div
          className="bg-yellow-400 h-full rounded-full"
          style={{ width: "24%" }}
        />
      </div>

      {/* social media follow text */}
      <div
        className="absolute text-black text-xl font-bold"
        style={{
          width: "204px",
          top: "736px",
          left: "983px",
          fontFamily: "var(--font-saira), sans-serif",
        }}
      >
        Platformlarda Bizi Takip Edin!
      </div>
    </section>
  );
}
