import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "1440px",
        height: "80px",
        background: "#1212121A",
        borderBottom: "1px solid #2A2A2A",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        opacity: 1,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "1440px",
          height: "80px",
        }}
      >
        {/* rapkology.svg logo */}
        <div
          style={{
            position: "absolute",
            top: "11.95px",
            left: "84px",
            opacity: 1,
          }}
        >
          <Image
            src="/rapkology.svg"
            alt="RapKology Logo"
            width={235.44}
            height={59.14}
          />
        </div>

        {/* navigation menu items */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <Link
            href="#"
            style={{
              width: "73px",
              height: "14px",
              fontFamily: "var(--font-saira), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              textAlign: "center",
              color: "#FFFFFF",
              textDecoration: "none",
              display: "block",
            }}
          >
            HABERLER
          </Link>

          <Link
            href="#"
            style={{
              width: "73px",
              height: "14px",
              fontFamily: "var(--font-saira), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              textAlign: "center",
              color: "#FFFFFF",
              textDecoration: "none",
              display: "block",
            }}
          >
            ETKİNLİKLER
          </Link>

          <Link
            href="#"
            style={{
              width: "73px",
              height: "14px",
              fontFamily: "var(--font-saira), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              textAlign: "center",
              color: "#FFFFFF",
              textDecoration: "none",
              display: "block",
            }}
          >
            MÜZİKLER
          </Link>

          <Link
            href="#"
            style={{
              width: "73px",
              height: "14px",
              fontFamily: "var(--font-saira), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              textAlign: "center",
              color: "#FFFFFF",
              textDecoration: "none",
              display: "block",
            }}
          >
            VİDEOLAR
          </Link>

          <Link
            href="#"
            style={{
              width: "73px",
              height: "14px",
              fontFamily: "var(--font-saira), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              textAlign: "center",
              color: "#FFFFFF",
              textDecoration: "none",
              display: "block",
            }}
          >
            İLETİŞİM
          </Link>
        </div>
        {/* search.svg icon */}
        <div
          style={{
            position: "absolute",
            top: "29px",
            left: "1180.55px",
            opacity: 1,
          }}
        >
          <Image src="/search.svg" alt="Search" width={24} height={24} />
        </div>
        {/* login button */}
        <div
          className="absolute top-6 right-[105px] w-[100px] h-8 font-bold text-sm leading-none text-black bg-white border-none cursor-pointer flex items-center justify-center text-center"
          style={{ fontFamily: "var(--font-saira), sans-serif" }}
        >
          <button>GİRİŞ YAP</button>
        </div>
      </div>
    </nav>
  );
}
