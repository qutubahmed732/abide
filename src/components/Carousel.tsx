"use client";
import { useState, useEffect, useRef } from "react";

export default function Carousel() {

  const baseTestimonials = [
    {
      text: "“The Abide Now weekend is truly life changing! To realize our Father speaks clearly to us when we take the time to read his word and then spend time listening. Hope, healing, and wisdom was everyone’s takeaway from the weekend.”",
      author: "Cindy"
    },
    {
      text: "“Heading up for a much-needed spiritual retreat to relax, learn, and let go of stress. Upon arrival the Holy Spirit took over and the experience seemed more like that of the early church described in Acts.  We experienced community, healing, confession, joy and we witnessed forgiveness.  Leaving, we felt closer to one another and to being enabled to pursue our Father’s will.”",
      author: "Ken"
    },
    {
      text: "“The Abide Now Experience completely changed our lives in one weekend retreat. We are experiencing the favor of the Lord and unity in our marriage and businesses like never before. There is nothing sweeter than the fruit of abiding!”",
      author: "Jessica"
    }
  ];

  const testimonials = [
    ...baseTestimonials,
    ...baseTestimonials,
    ...baseTestimonials
  ];

  const [currentIndex, setCurrentIndex] = useState(baseTestimonials.length);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!isDragging) {
      startTimer();
    } else {
      stopTimer();
    }
    return () => stopTimer();
  }, [isDragging]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer();
      } else if (!isDragging) {
        startTimer();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isDragging]);

  const handleTransitionEnd = () => {
    if (currentIndex >= baseTestimonials.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - baseTestimonials.length);
    } else if (currentIndex < baseTestimonials.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + baseTestimonials.length);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setIsTransitioning(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setIsTransitioning(false);
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setCurrentTranslate(diff);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setCurrentTranslate(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 50;

    if (currentTranslate < -threshold) {
      handleNext();
    } else if (currentTranslate > threshold) {
      handlePrev();
    }

    setCurrentTranslate(0);
  };

  const activeDotIndex = currentIndex % baseTestimonials.length;
  const slideMultiplier = isMobile ? 100 : 50;

  return (
    <section className="w-full my-10 md:my-24 px-4 md:px-8 bg-white font-montserrat select-none overflow-hidden">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#111111] mb-12">
          What People Are Saying
        </h2>

        <div
          ref={sliderRef}
          className="relative w-full cursor-grab active:cursor-grabbing overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          <div
            className="w-full flex"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(calc(-${currentIndex * slideMultiplier}% + ${currentTranslate}px))`,
              transition: isTransitioning ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)" : "none"
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 shrink-0 px-3"
              >
                <div className="bg-[#1A1A1A] py-3 px-8 md:py-10 md:px-12 flex flex-col text-center h-full">
                  <p className="text-white text-[15px] md:text-[16px] leading-[1.8] font-normal opacity-90">
                    {item.text}
                  </p>
                  <h3 className="text-white font-bold text-lg md:text-xl mt-6 tracking-wide">
                    {item.author}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-10">
          {baseTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index + baseTestimonials.length);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${activeDotIndex === index ? "w-5 bg-[#111111]" : "w-2 bg-gray-300"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}