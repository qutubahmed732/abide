"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Cards({ cards, label, opener }:any) {

  const pathname = usePathname()

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {cards.map((card:any, index:number) => (
          <div key={index} className="w-full flex flex-col">
            <div className="relative w-full aspect-4/3 overflow-hidden">
              <Image
                className="object-cover"
                src={card.img}
                alt={card.label}
                placeholder="blur"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="bg-[#111111] py-4 text-center">
              <h3 className="text-white font-bold text-lg md:text-xl tracking-wide">
                {card.label}
              </h3>
            </div>

            {pathname === "/retreats" &&<Link href="/retreat-sign-up" className="w-fit mx-auto text-white bg-black text-sm font-semibold leading-relaxed text-center mt-5 uppercase py-3 md:py-5 px-10 md:px-20 tracking-wide cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black hover:outline-2">
              sign up for a retreat
            </Link>}

            {pathname === "/courses" && <button onClick={()=> {opener(true); label(card.label)}} className="w-fit mx-auto text-white bg-black text-sm font-semibold leading-relaxed text-center mt-5 uppercase py-3 md:py-5 px-10 md:px-15 tracking-wide cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black hover:outline-2">
                start free course
              </button>}
          </div>
        ))}
      </div>
    </>
  )
}