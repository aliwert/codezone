import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { MdOutlinePlayCircle } from "react-icons/md";

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
    coverImage: "/snoppdogg.png",
  },
  {
    artist: "CEZA",
    song: "RÜZGAR",
    ranking: "Top 10 (1. Sıra)",
    coverImage: "/ceza.png",
  },
];

export default function FavoritesOfMonths() {
  return (
    <section
      className="relative w-full bg-[#121214] overflow-hidden"
      style={{
        height: "447px",
        paddingLeft: "50px",
        paddingRight: "50px",
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
          left: "550px",
        }}
      >
        <div className="flex gap-[80px] w-max">
          {musicCards.map((card, index) => (
            <div
              key={index}
              className="w-[274px] h-[264px] relative bg-[#2A2A2A] rounded-lg overflow-hidden group cursor-pointer"
            >
              {/* album cover */}
              <div className="absolute w-[240px] h-[180px] transition-all duration-500 ease-in-out left-[-55%] top-[50px] -rotate-[15deg] group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:rotate-0 z-20">
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
                  className="absolute inset-0 grid place-items-center bg-transparent"
                  aria-label="Play"
                >
                  <MdOutlinePlayCircle className="w-[60px] h-[60px]" />
                </button>
              </div>

              {/* text content */}
              <div
                className="absolute text-white transition-opacity duration-500 group-hover:opacity-0 z-10"
                style={{
                  top: "50px",
                  right: "40px",
                  fontFamily: "var(--font-saira), sans-serif",
                  textAlign: "right",
                }}
              >
                {/* ranking badge */}
                <div className="inline-block px-3 py-6 rounded-4xl bg-white/10 text-l font-medium mb-4">
                  {card.ranking}
                </div>

                {/* artist */}
                <div className="text-xl font-medium opacity-80 tracking-wide mb-10">
                  {card.artist}
                </div>

                {/* song */}
                <div className="text-lg font-bold tracking-wide">
                  {card.song}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* progress bar */}
      <div
        className="absolute bg-[#2A2A2A] rounded-full"
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
