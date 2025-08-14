"use client";

import Image from "next/image";
import React from "react";
import {
  FiAlignJustify,
  FiSearch,
  FiSend,
  FiArrowRight as ArrowRight,
} from "react-icons/fi";
import { BiGridVertical } from "react-icons/bi";
import { FaFacebookF, FaSpotify } from "react-icons/fa6";
import { FaTwitter, FaDiscord, FaYoutube } from "react-icons/fa";

type ViewMode = "list" | "grid";

const featuredItems = [
  {
    id: 1,
    image: "/kesfet1.png",
    date: "29 Mart 2022",
    author: { avatar: "/image1.png", name: "Jonathan Stewart" },
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
    readMoreLink: "Daha Fazla Oku",
  },
  {
    id: 2,
    image: "/kesfet2.png",
    date: "29 Mart 2022",
    author: { avatar: "/image1.png", name: "Jonathan Stewart" },
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
    readMoreLink: "Daha Fazla Oku",
  },
  {
    id: 3,
    image: "/kesfet3.png",
    date: "29 Mart 2022",
    author: { avatar: "/image1.png", name: "Jonathan Stewart" },
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
    readMoreLink: "Daha Fazla Oku",
  },
  {
    id: 4,
    image: "/kesfet4.png",
    date: "29 Mart 2022",
    author: { avatar: "/image1.png", name: "Jonathan Stewart" },
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
    readMoreLink: "Daha Fazla Oku",
  },
  {
    id: 5,
    image: "/kesfet5.png",
    date: "29 Mart 2022",
    author: { avatar: "/image1.png", name: "Jonathan Stewart" },
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
    readMoreLink: "Daha Fazla Oku",
  },
];

const categoryButtons = [
  { id: 1, label: "Türk Rap" },
  { id: 2, label: "Yabancı Rap" },
  { id: 3, label: "Rap Haberleri" },
  { id: 4, label: "Haftanın Klipleri" },
  { id: 5, label: "Ayın Klipleri" },
  { id: 6, label: "Rap Sohbetleri" },
  { id: 7, label: "Rap Müsabakaları" },
];

export default function DiscoverySection() {
  const [viewMode, setViewMode] = React.useState<ViewMode>("list");
  const [activeCategory, setActiveCategory] = React.useState<number>(2);

  const isGrid = viewMode === "grid";

  return (
    <section
      className="w-full bg-[#121214] px-12 py-16"
      style={{
        paddingLeft: "90px",
        paddingRight: "90px",
      }}
    >
      {/* header */}
      <div className="mb-10 grid grid-cols-12 items-center gap-2">
        {/* left title */}
        <div
          className="col-span-12 sm:col-span-6 flex items-center gap-4"
          style={{
            marginBottom: "50px",
          }}
        >
          <h2
            className="text-white uppercase font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-saira-condensed), sans-serif",
              fontSize: "48px",
              letterSpacing: "-1px",
            }}
          >
            KEŞFET
          </h2>
          <span>
            <Image src="/compass.svg" alt="accent" width={50} height={50} />
          </span>
        </div>

        {/* right */}
        <div
          className="col-span-12 sm:col-span-6 flex items-center gap-3 text-white"
          style={{
            marginBottom: "50px",
          }}
        >
          <button type="button" className="p-2 rounded-md " title="Ara">
            <Image src="/search.svg" alt="Search" width={30} height={18} />
          </button>
          <button
            type="button"
            aria-pressed={!isGrid}
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-md transition-colors ${
              !isGrid ? "bg-white text-black " : "bg-transparent"
            }`}
            title="Liste görünümü"
          >
            <FiAlignJustify size={30} />
          </button>
          <button
            type="button"
            aria-pressed={isGrid}
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-md transition-colors ${
              isGrid ? "bg-white text-black " : "bg-transparent "
            }`}
            title="Izgara görünümü"
          >
            <BiGridVertical size={30} />
          </button>
        </div>
      </div>

      {/* main content */}
      <div className="flex gap-20">
        {/* left + items */}
        <div className="flex-1">
          {isGrid ? (
            <div className="grid grid-cols-2 gap-x-10 gap-y-12">
              {featuredItems.map((item) => (
                <article key={item.id} className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.author.avatar}
                      alt={item.author.name}
                      width={33}
                      height={33}
                      className="rounded-full object-cover"
                      style={{
                        marginBottom: "40px",
                      }}
                    />
                    <span
                      className="text-white"
                      style={{
                        fontFamily: "var(--font-saira), sans-serif",
                        marginBottom: "40px",
                      }}
                    >
                      {item.author.name}
                    </span>
                  </div>
                  <div className="relative w-full aspect-[302/197] overflow-hidden rounded-md bg-black/20">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div
                    className="mt-4 text-[#363636]"
                    style={{
                      fontFamily: "var(--font-saira), sans-serif",
                      marginTop: "30px",
                    }}
                  >
                    {item.date}
                  </div>

                  <h3
                    className="mt-4 text-white font-bold"
                    style={{
                      fontFamily: "var(--font-saira-condensed), sans-serif",
                      fontSize: "25px",
                      marginTop: "20px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    className="mt-4 h-px w-full bg-white/60"
                    style={{
                      marginTop: "20px",
                    }}
                  />

                  <button
                    type="button"
                    className="mt-4 w-fit text-white transition-colors group inline-flex items-center"
                    style={{
                      fontFamily: "var(--font-saira), sans-serif",
                      marginTop: "20px",
                    }}
                  >
                    {item.readMoreLink}
                    <ArrowRight
                      size={22}
                      className="text-[#F0E74D] opacity-0 group-hover:opacity-100 transition-opacity duration-800"
                      style={{ marginLeft: "8px" }}
                    />
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              {featuredItems.map((item) => (
                <article key={item.id} className="flex gap-6">
                  {/* left image + date */}
                  <div className="flex-shrink-0 w-[302px]">
                    <div className="relative w-[302px] h-[198px] overflow-hidden rounded-md bg-black/20">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 302px"
                      />
                    </div>
                    <div
                      className=" text-[#363636]"
                      style={{
                        fontFamily: "var(--font-saira), sans-serif",
                        marginTop: "30px",
                      }}
                    >
                      {item.date}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-4 min-w-0">
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.author.avatar}
                        alt={item.author.name}
                        width={33}
                        height={33}
                        className="rounded-full object-cover"
                      />
                      <span
                        className="text-white"
                        style={{ fontFamily: "var(--font-saira), sans-serif" }}
                      >
                        {item.author.name}
                      </span>
                    </div>

                    <h3
                      className="text-white font-bold"
                      style={{
                        fontFamily: "var(--font-saira-condensed), sans-serif",
                        fontSize: "25px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <div className="h-px w-full bg-white/60" />

                    <div className="flex items-center justify-start">
                      <button
                        type="button"
                        className="w-fit text-white group inline-flex items-center"
                        style={{ fontFamily: "var(--font-saira), sans-serif" }}
                      >
                        {item.readMoreLink}
                        <ArrowRight
                          size={22}
                          className="text-[#F0E74D] opacity-0 group-hover:opacity-100 transition-opacity duration-800"
                          style={{ marginLeft: "8px" }}
                        />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* loading spinner */}
          <div className="flex justify-center">
            <Image
              src="/loading.svg"
              alt="Loading"
              width={30}
              height={30}
              style={{
                marginTop: "100px",
              }}
            />
          </div>
        </div>

        {/* right categories + newsletter */}
        <aside className="w-[416px] flex flex-col">
          <h2
            className="font-saira-cond-40-bold text-white mb-12"
            style={{
              fontFamily: "var(--font-saira-condensed), sans-serif",
              fontSize: "40px",
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}
          >
            NE GÖRMEK İSTERSİN?
          </h2>

          {/* category buttons */}
          <div className="flex flex-wrap gap-2 mb-16">
            {categoryButtons.map((button) => {
              const active = activeCategory === button.id;
              return (
                <button
                  key={button.id}
                  type="button"
                  onClick={() => setActiveCategory(button.id)}
                  className={`h-auto px-5 py-2.5 rounded-full border transition-colors ${
                    active
                      ? "bg-[#F0E74D] text-black border-[#121212]"
                      : "bg-transparent text-white border-white hover:bg-white/10"
                  }`}
                  style={{ fontFamily: "var(--font-saira), sans-serif" }}
                >
                  {button.label}
                </button>
              );
            })}
          </div>

          {/* newsletter section */}
          <div className="mb-16">
            <h3
              className="mb-4 text-white"
              style={{
                fontFamily: "var(--font-saira-condensed), sans-serif",
                fontSize: "32px",
                fontWeight: 700,
              }}
            >
              GELİŞMELERDEN İLK SEN HABERDAR OL!
            </h3>

            <label
              className="block text-white/80 mb-2"
              style={{ fontFamily: "var(--font-saira), sans-serif" }}
            >
              EMAIL
            </label>
            <div className="relative">
              <input
                type="email"
                className="w-full bg-transparent border-0 border-b border-white rounded-none px-0 pb-2 text-white placeholder:text-white/50 focus:outline-none"
                placeholder=""
              />
              <button
                type="button"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[#F0E74D] p-1"
                title="Gönder"
              >
                <FiSend className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* social media icons */}
          <div className="flex gap-4 mb-16 text-[#F0E74D]">
            <FaFacebookF width={23} height={22} />
            <FaTwitter width={24} height={20} />
            <FaDiscord width={23} height={19} />
            <FaSpotify width={23} height={19} />
            <FaYoutube width={23} height={19} />
          </div>

          {/* footer links */}
          <div
            className="flex gap-32 mb-8 text-white"
            style={{ fontFamily: "var(--font-saira), sans-serif" }}
          >
            <div className="flex flex-col gap-4">
              <div>HABERLER</div>
              <div>MÜZİKLER</div>
            </div>
            <div className="flex flex-col gap-4">
              <div>ETKİNLİKLER</div>
              <div>VİDEOLAR</div>
              <div>İLETİŞİM</div>
            </div>
          </div>

          <div
            className="text-white/60"
            style={{ fontFamily: "var(--font-saira), sans-serif" }}
          >
            © RAPKOLOGY All Rights Are Reserved 2022.
          </div>
        </aside>
      </div>
    </section>
  );
}
