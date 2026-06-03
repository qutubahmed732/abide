import Carousel from "@/components/Carousel";
import TestimoanialSection from "@/components/TestimoanialSection";

import heroImage from "../images/hero-section-image.jpg";
import Image from "next/image";
import introImage from "../images/intro-section-image.jpg"


export default function Home() {

  return (
    <>
      <section
        style={{ backgroundImage: `url(${heroImage.src})` }}
        className="relative w-full bg-no-repeat bg-cover h-100 md:h-130 bg-position-[center_20%] md:bg-position-[center_40%]"
      >
        <p className="w-[95%] mx-auto my-10 font-bold text-xl md:text-[3.3rem] text-white bg-black/40 px-2 md:px-10 py-8">
          “I am the vine; you are the branches. If you abide in me and I in you, you will bear much fruit; apart from me you can do nothing”.
        </p>
      </section>

      <section className="w-full py-12 md:py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
          <h2 className="md:pl-10 text-3xl md:text-5xl font-bold text-[#111111] tracking-tight">
            What is Abiding?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="w-full md:flex-1">
              <div className="relative w-full h-75 md:h-125 overflow-hidden rounded-sm">
                <Image
                  className="object-cover object-center transition-transform duration-300"
                  src={introImage}
                  alt="What is Abiding Introduction"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full md:flex-1 text-base md:text-[17px] leading-[1.8] space-y-6 md:pt-2">
              <p>
                Abiding is a lifestyle that encompasses a daily quiet time with the Lord
                where we are expecting to hear from Him on what His will for our life is on
                a daily basis. As we look through the windshield, He looks through the
                rear view mirror.
              </p>
              <p>
                This is about making an appointment to speak with Him every day and
                entering into this time with anticipation and expectation from Him on what
                He has to say about specifics questions you have about your life.
              </p>
              <p>
                We hear Christians say all the time that they believe in God, but God
                doesn’t talk to them. We teach you how to hear from Him through an
                eight-lesson course.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimoanialSection />
      <Carousel />
    </>
  );
}