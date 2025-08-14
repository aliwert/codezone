"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FaFacebookF, FaSpotify } from "react-icons/fa6";
import { FaTwitter, FaDiscord, FaYoutube } from "react-icons/fa";

const navigationItems = [
  "HABERLER",
  "ETKİNLİKLER",
  "MÜZİKLER",
  "VİDEOLAR",
  "İLETİŞİM",
];

export default function BlogFooter() {
  return (
    <footer
      className="w-full bg-[#121214]"
      style={{
        marginTop: "150px",
      }}
    >
      <div
        className="mx-auto w-full max-w-[1440px] px-6 py-14 md:px-14"
        style={{
          paddingLeft: "90px",
          paddingRight: "100px",
        }}
      >
        {/* left */}
        <div className="grid grid-cols-12 gap-10 md:gap-16 items-start">
          {/* left: logo + newsletter */}
          <div className="col-span-12 md:col-span-7">
            {/* logo */}
            <div>
              <Image
                src="/rapkology.svg"
                alt="Rapkology"
                width={200}
                height={60}
                priority
              />
            </div>

            {/* headline */}
            <h2
              id="footer-heading"
              className="mt-8 text-white uppercase tracking-tight"
              style={{
                fontFamily: "var(--font-saira-condensed), sans-serif",
                fontSize: "25px",
                fontWeight: 700,
                letterSpacing: "0.01em",
                marginTop: "30px",
              }}
            >
              GELİŞMELERDEN İLK SEN HABERDAR OL!
            </h2>

            {/* email row */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="newsletter-email"
                  className="text-white"
                  style={{
                    fontFamily: "var(--font-saira), sans-serif",
                    fontSize: "14px",
                    letterSpacing: "0.02em",
                  }}
                >
                  EMAIL
                </label>
                <button
                  type="button"
                  className="text-[#F0E74D] inline-flex items-center gap-2 p-1"
                  title="Gönder"
                  style={{
                    fontFamily: "var(--font-saira), sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    fontSize: "14px",
                  }}
                >
                  GÖNDER
                  <FiArrowRight size={16} />
                </button>
              </div>

              {/* input */}
              <input
                id="newsletter-email"
                type="email"
                aria-label="Email"
                className="mt-2 w-full bg-transparent border-0 border-b border-white/20 rounded-none px-0 pb-2 text-white placeholder:text-white/50 focus:outline-none"
                placeholder=""
              />
            </div>
          </div>

          {/* right */}
          <div
            className="col-span-12 md:col-span-5 flex flex-col gap-6 items-stretch"
            style={{
              marginTop: "80px",
            }}
          >
            {/* socials */}
            <div className="flex items-start gap-5 text-[#F0E74D] self-start md:self-start">
              <FaFacebookF size={22} />
              <FaTwitter size={24} />
              <FaDiscord size={26} />
              <FaSpotify size={26} />
              <FaYoutube size={26} />
            </div>

            {/* nav */}
            <nav className="w-full flex flex-nowrap items-center justify-between">
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white transition-colors hover:text-[#F0E74D] whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-saira), sans-serif",
                    fontSize: "14px",
                    letterSpacing: "0.02em",
                    fontWeight: 400,
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* copyright */}
            <p
              className="text-[#494949]"
              style={{
                fontFamily: "var(--font-saira), sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                marginBottom: "100px",
              }}
            >
              © RAPKOLOGY All Rights Are Reserved 2022.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
