import Image from "next/image";
import heroImage1 from "../../images/retreat-image-1.png"
import heroImage2 from "../../images/retreat-image-2.png"

import cardImage1 from "../../images/retreat-card-1.png"
import cardImage2 from "../../images/retreat-card-2.png"
import cardImage3 from "../../images/retreat-card-3.png"

import { Cards } from "@/components/Cards";

export default function RetreatPage() {


  const cards = [
    { id: 1, label: "Mens Retreats", img: cardImage1 },
    { id: 2, label: "Women's Retreats", img: cardImage2 },
    { id: 3, label: "Couples Retreats", img: cardImage3 },
  ]

  return (
    <>
      <div className="w-full bg-black flex items-start justify-center pb-10">
        <h1 className="text-2xl md:text-[50px] text-white font-bold">Abiding Retreats</h1>
      </div>

      <section className="w-full py-12 md:py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
          <h2 className="md:pl-10 text-3xl md:text-5xl font-bold text-[#111111] tracking-tight">
            What is Abiding?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="w-full md:flex-1">
              <div className="relative w-full h-125 overflow-hidden rounded-sm">
                <Image
                  className="object-cover object-bottom transition-transform duration-300"
                  src={heroImage1}
                  alt="What is Abiding Introduction"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:flex-1 text-base md:text-[17px] leading-[1.8] space-y-6 md:pt-2">
              <p>
                Most Christians say they don’t hear from God or that God doesn’t talk to them. We said the same things. Our response to that is “How much time are you spending with the Lord everyday? The average prayer time for over 95% of Christians is under 3 minutes per day. How can you expect to hear from God if you don’t spend any time with Him?
              </p>
              <p>
                When we describe “Abiding” what we mean is making an appointment everyday with the Lord and showing up to that appointment with anticipation and expectation to hear about what He has to say you about the next steps to take in your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
          <h2 className="md:pr-10 text-3xl md:text-5xl font-bold text-[#111111] tracking-tight md:text-right">
            Attend A Retreat
          </h2>
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-16">
            <div className="w-full md:flex-1">
              <div className="relative w-full h-125 overflow-hidden rounded-sm">
                <Image
                  className="object-cover object-center transition-transform duration-300"
                  src={heroImage2}
                  alt="Attend A Retreat"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:flex-1 text-base md:text-[17px] leading-[1.8] space-y-6 md:pt-2">
              <p>
                During a retreat we will take you through the 8 lesson study we have created that will teach you everything you need to learn to start hearing the Lord speak to you on a daily basis.
              </p>
              <p>
                Our retreats are a 3-day immersive experience where you will disconnect from the real world and spend time with likeminded believers and journey down a path of life change that will teach you how to hear from the Lord so He can lead you to His best for your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:py-20 w-full">
        <div className="flex flex-col items-start gap-3 mb-15">
          <h1 className="text-5xl font-bold">Types of Retreats</h1>
          <p className="md:text-lg break-all md:tracking-wider mt-5">There is no cost to attend our retreats. As this was freely given to us its our mission to freely give it away to help create as many disciples as possible, get people to heaven and truly make a difference in the world. We have retreats tailored towards men, women and couples. Click the option below to sign up to attend a retreat.</p>
        </div>

        <Cards cards={cards} />
      </section>
    </>
  );
}
