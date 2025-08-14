"use client";

import Image from "next/image";
import React from "react";
import { FiAlignJustify } from "react-icons/fi";
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
    featuredImage: "/kesfet2.png",
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
    <section className="bg-[#121214]">
      {/* header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {/* title + diamond */}
          <div className="relative flex flex-col items-start">
            <h2
              className="text-white uppercase tracking-tight"
              style={{
                fontFamily: "var(--font-saira-condensed), sans-serif",
                fontSize: "48px",
                letterSpacing: "-1px",
                marginLeft: "70px",
                fontWeight: 400,
                marginTop: "40px",
              }}
            >
              KEŞFET
            </h2>
            <Image
              src="/diamond.svg"
              alt="diamond"
              width={36}
              height={36}
              className="pointer-events-none select-none absolute"
              style={{ left: "64px", top: "54px", zIndex: 0 }}
            />
          </div>

          {/* right icons */}
          <div className="flex items-center gap-3 text-white">
            <button type="button" className="p-2 rounded-md" title="Ara">
              <Image src="/search.svg" alt="Search" width={30} height={18} />
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
          className="hidden md:flex flex-wrap gap-8"
          style={{ marginLeft: "70px", marginTop: "30px" }}
        >
          {categories.map((c, idx) => (
            <button
              key={idx}
              className={`h-10 px-4 border ${
                c.active
                  ? "bg-[#F0E74D] text-black border-[#121212]"
                  : "bg-transparent text-white border-white"
              }`}
              style={{
                fontFamily: "var(--font-saira), sans-serif",
                width: "auto",
                padding: "0 12px",
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
                  marginTop: "40px",
                }}
              />
              <span
                className="text-white"
                style={{
                  fontFamily: "var(--font-saira), sans-serif",
                  marginTop: "40px",
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
              className="text-[#8a8a8a] mt-4"
              style={{
                fontFamily: "var(--font-saira), sans-serif",
                marginTop: "30px",
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
              }}
            >
              {post.title}
            </h3>

            <div
              className="h-px w-full bg-white/60 mt-4"
              style={{ marginTop: "20px" }}
            />
            <button
              type="button"
              className="text-white w-fit mt-3"
              style={{
                fontFamily: "var(--font-saira), sans-serif",
                marginTop: "20px",
              }}
            >
              Daha Fazla Oku
            </button>
          </article>
        ))}
      </div>

      {/* daha fazla gor */}
      <div className="flex justify-center mt-12">
        <button
          type="button"
          className="h-[57px] px-8 border border-white/60 text-white hover:bg-white/10"
          style={{ fontFamily: "var(--font-saira), sans-serif" }}
        >
          Daha Fazla Gör
        </button>
      </div>
    </section>
  );
}
