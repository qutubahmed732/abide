"use client";
import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaAngleUp } from "react-icons/fa";

type Link = {
  id: number;
  label: string;
  link: string;
  active: boolean;
};

export default function Header() {
  const pathname = usePathname();
  const [path, setPath] = useState("/");
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navlinks: Link[] = [
    { id: 1, label: "Home", link: "/", active: false },
    { id: 2, label: "Retreats", link: "/retreats", active: false },
    { id: 3, label: "Courses", link: "/courses", active: false },
    { id: 4, label: "Contact Us", link: "/contact", active: false },
    { id: 5, label: "Donate", link: "", active: false },
  ];

  return (
    <>
      <header className="relative w-full flex items-center justify-between py-3 [@media(max-width:950px)]:px-5 px-10">
        <h1 className="text-xl font-bold w-20 h-20 md:w-30 md:h-35">
          <Image
            className="dark:black w-full h-full object-contain"
            src={logo}
            loading="eager"
            alt="App Logo"
            width={100}
            height={20}
          />
        </h1>

        <nav className="hidden [@media(min-width:950px)]:flex items-center gap-10 text-[18px] font-light">
          {navlinks.map((link: Link) => {
            return (
              <span
                key={link.id}
                className={`${path === link.link
                    ? "underline underline-offset-7 decoration-2 decoration-red-700"
                    : ""
                  }`}
              >
                <Link href={link.link}>{link.label}</Link>
              </span>
            );
          })}
          <span className="bg-black uppercase text-sm text-white py-4 px-15 hover:bg-white hover:text-black hover:transition-colors hover:outline duration-300">
            <Link href="/login">Login</Link>
          </span>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="[@media(max-width:950px)]:flex hidden text-3xl"
        >
          <RiMenu3Fill />
        </button>
        <SmallScreenMenuBar
          opener={setOpen}
          open={open}
          pathname={pathname}
          navlinks={navlinks}
        />
      </header>
      <div className="w-full h-12 bg-black" />

      {isVisible && <div onClick={scrollToTop} aria-label="Scroll to top" className="fixed z-900 right-5 bottom-5 bg-blue-500 text-white text-2xl font-bold rounded-sm p-1">
        <FaAngleUp />
      </div>}
    </>
  );
}

function SmallScreenMenuBar({ opener, pathname, open, navlinks }: any) {
  return (
    <div
      className={`fixed inset-0 z-50 w-full h-screen bg-[#141414] flex flex-col p-6 font-sans transition-all duration-300 ease-in-out ${open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
        }`}
    >
      <div className="flex justify-end w-full mb-12">
        <button
          onClick={() => opener(false)}
          className="text-white text-3xl hover:opacity-75 transition-opacity focus:outline-none"
          aria-label="Close menu"
        >
          &#x2715;
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center -mt-16">
        <nav className="flex flex-col items-center gap-10 text-white w-full">
          {navlinks?.map((link: Link) => {
            const isActive = pathname === link.link;
            return (
              <Link
                key={link.id}
                href={link.link}
                className={`text-2xl font-bold tracking-wider uppercase transition-colors hover:text-gray-300 ${isActive
                    ? "underline underline-offset-12 decoration-[3px] decoration-[#b91c1c]"
                    : ""
                  }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/login"
            className="mt-4 bg-white text-black font-bold uppercase tracking-widest py-3 px-10 text-sm transition-all border border-white hover:bg-transparent hover:text-white"
          >
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
}