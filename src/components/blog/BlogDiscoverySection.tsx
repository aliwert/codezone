"use client";

import Image from "next/image";
import React from "react";
import { FiAlignJustify, FiArrowRight as ArrowRight } from "react-icons/fi";
import { BiGridVertical } from "react-icons/bi";

type Category = { name: string; active?: boolean };
type Post = {
  id: number;
  authorAvatar: string;
  authorName: string;
  featuredImage: string;
  date: string;
  title: string;
};

const categories: Category[] = [
  { name: "Yabancı Rap", active: true },
  { name: "Türk Rap" },
  { name: "Rap Haberleri" },
  { name: "Haftanın Klipleri" },
  { name: "Ayın Klipleri" },
  { name: "Rap Sohbetleri" },
  { name: "Rap Müsabakaları" },
];

const posts: Post[] = [
  {
    id: 1,
    authorAvatar: "/image1.png",
    authorName: "Jonathan Stewart",
    featuredImage: "/kesfet1.png",
    date: "29 Mart 2022",
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
  },
  {
    id: 2,
    authorAvatar: "/image1.png",
    authorName: "Jonathan Stewart",
    featuredImage: "/kesfet6.png",
    date: "29 Mart 2022",
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
  },
  {
    id: 3,
    authorAvatar: "/image1.png",
    authorName: "Jonathan Stewart",
    featuredImage: "/kesfet3.png",
    date: "29 Mart 2022",
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
  },
  {
    id: 4,
    authorAvatar: "/image1.png",
    authorName: "Jonathan Stewart",
    featuredImage: "/kesfet4.png",
    date: "29 Mart 2022",
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
  },
  {
    id: 5,
    authorAvatar: "/image1.png",
    authorName: "Jonathan Stewart",
    featuredImage: "/kesfet5.png",
    date: "29 Mart 2022",
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
  },
  {
    id: 6,
    authorAvatar: "/image1.png",
    authorName: "Jonathan Stewart",
    featuredImage: "/kesfet2.png",
    date: "29 Mart 2022",
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
  },
  {
    id: 7,
    authorAvatar: "/image1.png",
    authorName: "Jonathan Stewart",
    featuredImage: "/kesfet3.png",
    date: "29 Mart 2022",
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
  },
  {
    id: 8,
    authorAvatar: "/image1.png",
    authorName: "Jonathan Stewart",
    featuredImage: "/kesfet4.png",
    date: "29 Mart 2022",
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
  },
];

export default function BlogDiscoverySection() {
  return (
    <section className="relative bg-[#121214]">
      {/* diamond relative position */}
      <Image
        src="/diamond.svg"
        alt="diamond decorative"
        width={500}
        height={500}
        className="pointer-events-none select-none absolute"
        style={{ left: 0, top: 20, zIndex: 0 }}
      />

      {/* header */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center justify-between">
          {/* title + compass */}
          <div
            className="relative flex items-center gap-4"
            style={{ marginLeft: "70px", marginTop: "60px" }}
          >
            <h2
              className="text-white uppercase tracking-tight"
              style={{
                fontFamily: "var(--font-saira-condensed), sans-serif",
                fontSize: "60px",
                letterSpacing: "-1px",
                fontWeight: "bold",
              }}
            >
              KEŞFET
            </h2>
            <Image
              src="/compass.svg"
              alt="accent"
              width={50}
              height={50}
              style={{
                marginLeft: "15px",
              }}
            />
          </div>

          {/* right icons */}
          <div
            className="flex items-center gap-5 text-white"
            style={{
              marginTop: "40px",
              marginRight: "70px",
            }}
          >
            <button type="button" className="p-2 rounded-md" title="Ara">
              <Image src="/search.svg" alt="Search" width={25} height={23} />
            </button>
            <button
              type="button"
              className="p-2 rounded-md"
              title="Liste görünümü"
            >
              <FiAlignJustify size={30} />
            </button>
            <button
              type="button"
              className="p-2 rounded-md"
              title="Izgara görünümü"
            >
              <BiGridVertical size={30} />
            </button>
          </div>
        </div>

        {/* categories */}
        <div
          className="hidden md:flex flex-wrap gap-4"
          style={{ marginLeft: "70px", marginTop: "35px" }}
        >
          {categories.map((c, idx) => (
            <button
              key={idx}
              className={`h-10  border ${
                c.active
                  ? "bg-[#F0E74D] text-black border-[#121212] font-bold"
                  : "bg-transparent text-white border-white"
              }`}
              style={{
                fontFamily: "var(--font-saira), sans-serif",
                width: "auto",
                padding: "0 20px",
              }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* posts */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
        style={{
          marginLeft: "70px",
          marginTop: "30px",
          marginRight: "70px",
        }}
      >
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col">
            <div className="flex items-center gap-3">
              <Image
                src={post.authorAvatar}
                alt={post.authorName}
                width={33}
                height={33}
                className="rounded object-cover"
                style={{
                  marginTop: "50px",
                  zIndex: 10,
                }}
              />
              <span
                className="text-white"
                style={{
                  fontFamily: "var(--font-saira), sans-serif",
                  marginTop: "50px",
                  zIndex: 10,
                }}
              >
                {post.authorName}
              </span>
            </div>

            <div
              className="relative w-full aspect-[302/197] overflow-hidden rounded-md bg-black/20"
              style={{
                marginTop: "32px",
              }}
            >
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div
              className="text-[#4A4A4A] mt-4"
              style={{
                fontFamily: "var(--font-saira), sans-serif",
                marginTop: "30px",
                fontWeight: 400,
              }}
            >
              {post.date}
            </div>

            <h3
              className="text-white font-bold mt-3"
              style={{
                fontFamily: "var(--font-saira-condensed), sans-serif",
                fontSize: "20px",
                marginTop: "20px",
                lineHeight: "104%",
                fontWeight: 700,
                zIndex: 20,
              }}
            >
              {post.title}
            </h3>

            <div
              className="h-px w-full bg-[#3B3B3B] mt-4"
              style={{ marginTop: "20px" }}
            />
            <button
              type="button"
              className="text-white w-fit mt-3 group inline-flex items-center"
              style={{
                fontFamily: "var(--font-saira), sans-serif",
                marginTop: "20px",
                fontWeight: 400,
                fontSize: "16px",
              }}
            >
              Daha Fazla Oku
              <ArrowRight
                style={{
                  marginLeft: "10px",
                }}
                size={22}
                className="text-[#F0E74D] opacity-0 translate-x-0 ml-2 transition-all duration-500 group-hover:opacity-100 "
              />
            </button>
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
