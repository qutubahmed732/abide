"use client";

import Image from "next/image";

import cardImage1 from "../images/card-image-1.jpg"
import cardImage2 from "../images/card-image-2.jpg"
import cardImage3 from "../images/card-image-3.jpg"

export default function TestimoanialSection() {

  const cards = [
    {
      title: "Online",
      description: "These groups last for 8 weeks, and are held for one hour a day, one day a week. Join with a group or get training and volunteer to lead an online group.",
      img: cardImage1
    },
    {
      title: "Office or Church",
      description: "One hour, once a week for eight weeks. This format can work in any location with adequate seating. Abide Now will train the leaders and provide the curriculum.",
      img: cardImage2
    },
    {
      title: "Retreat",
      description: "An offsite, three-day intensive experience designed and provided by a host. The Abiding Foundation will provide the leader, the workbooks, the venue and cover all costs associated for the retreat.",
      img: cardImage3
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white font-montserrat">
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111111] mb-12 md:mb-16">
          Learn Abiding
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {cards.map((card, index) => (
            <div key={index} className="w-full flex flex-col">
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  className="object-cover"
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="bg-[#111111] py-4 text-center">
                <h3 className="text-white font-bold text-lg md:text-xl tracking-wide">
                  {card.title}
                </h3>
              </div>
              <p className="text-[#444444] text-sm md:text-[15px] leading-relaxed text-center mt-5 px-2">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}