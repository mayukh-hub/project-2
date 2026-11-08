import { useState, useEffect } from "react";

import {
  Leaf,
  ShieldCheck,
  Users,
  Headset,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600",
    alt: "Green plants growing in soil",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600",
    alt: "Beautiful green forest",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1600",
    alt: "Nature and green landscape",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600",
    alt: "Green plants and leaves",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((previous) => (previous + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (previous) => (previous - 1 + slides.length) % slides.length
    );
  };

  const features = [
    {
      icon: Leaf,
      title: "Sustainable Growth",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Services",
    },
    {
      icon: Users,
      title: "Expert Team",
    },
    {
      icon: Headset,
      title: "24/7 Support",
    },
  ];

  return (
    <section className="bg-white">

      <div className="relative isolate min-h-120 overflow-hidden bg-[#092d22] md:min-h-137.5">

        {slides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-1000 ease-in-out ${
              currentSlide === index
                ? "scale-105 opacity-100"
                : "scale-100 opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-linear-to-r from-[#092d22] via-[#092d22]/90 to-[#092d22]/20" />

        <div className="relative z-10 mx-auto flex min-h-120 max-w-7xl items-center px-6 py-16 md:min-h-137.5 md:px-12">

          <div className="max-w-xl">

            <h1 className="animate-fade-left text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Innovate. Grow.

              <span className="block text-lime-400">
                Succeed.
              </span>
            </h1>

            <p
              className="animate-fade-up mt-4 max-w-md text-base leading-relaxed text-gray-200 md:text-lg"
              style={{ animationDelay: "0.3s" }}
            >
              Smart solutions for a brighter
              and more successful future.
            </p>

            <button
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="group animate-fade-up mt-7 flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-green-950 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-lime-300 hover:shadow-lg"
              style={{ animationDelay: "0.6s" }}
            >
              Explore More

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </div>
        </div>

        <button
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-lime-400 hover:text-green-950 md:left-8 md:h-12 md:w-12"
        >
          <ChevronLeft size={25} />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-lime-400 hover:text-green-950 md:right-8 md:h-12 md:w-12"
        >
          <ChevronRight size={25} />
        </button>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 bg-lime-400"
                  : "w-2.5 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>

      <div className="relative z-20 mx-auto -mt-10 max-w-6xl px-5 pb-8">

        <div className="grid grid-cols-2 gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-lg md:grid-cols-4 md:p-7">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                style={{
                  animationDelay: `${0.2 + index * 0.2}s`,
                }}
                className="animate-fade-up flex flex-col items-center justify-center gap-2 border-gray-200 py-3 text-center transition-transform duration-300 hover:-translate-y-2 md:border-r last:border-r-0"
              >

                <div className="group flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 transition-all duration-300 hover:rotate-12 hover:scale-110 active:scale-125">
                  <Icon size={23} className="transition-transform duration-300 group-hover:scale-110 group-active:scale-125"/>
                  
                </div>

                <h3 className="text-sm font-bold text-gray-800">
                  {feature.title}
                </h3>

              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
}

export default Hero;