"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white font-montserrat pt-16">
      <div
        className="absolute top-0 left-0 w-full h-12 bg-[#111111]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 60%)"
        }}
      />

      <div
        className="w-full bg-[#fcfcfc] pt-0 md:pt-16 pb-12 px-6 border-t border-gray-100 relative"
        style={{
          backgroundColor: "#fcfcfc",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpath d='M60 0C26.86 0 0 26.86 0 60s26.86 60 60 60 60-26.86 60-60S93.14 0 60 0zm0 114C30.18 114 6 89.82 6 60S30.18 6 60 6s54 24.18 54 54-24.18 54-54 54zm30-54c0 16.57-13.43 30-30 30S30 76.57 30 60s13.43-30 30-30 30 13.43 30 30z' fill='%23111111' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "240px 240px"
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

          <div className="relative w-50 h-50 mb-6">
            <Image
              src={logo}
              alt="Abide Now Logo"
              fill
              sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 250px"
              className="object-contain"
              priority
            />
          </div>

          <p className="text-[#444444] text-[15px] md:text-base leading-relaxed max-w-xl mb-10 px-2 font-medium">
            Abide Now is a non-profit Christian ministry focused on helping people learn how to hear from the Lord.
          </p>

          <nav className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 mb-12 text-base md:text-2xl text-[#111111] font-medium tracking-wide w-full">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link href="/retreats" className="hover:opacity-70 transition-opacity">
              Retreats
            </Link>
            <Link href="/contact" className="hover:opacity-70 transition-opacity">
              Contact Us
            </Link>
            <Link href="" className="hover:opacity-70 transition-opacity">
              Donate
            </Link>
            <Link href="/terms-and-conditions" className="hover:opacity-70 transition-opacity text-nowrap">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:opacity-70 transition-opacity text-nowrap">
              Privacy Policy
            </Link>
          </nav>

          <p className="text-black text-xs md:text-xl tracking-wide px-4 leading-relaxed">
            Abide Now is a registered 501(c)(3), charitable organization. | Copyright © 2025 | All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}