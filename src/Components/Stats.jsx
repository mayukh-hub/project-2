
import { useState, useEffect, useRef } from "react";
import { Users, Trophy, Star } from "lucide-react";

function Stats() {
  const stats = [
    {
      icon: Users,
      number: 10000,
      title: "Happy Clients",
      suffix: "+",
    },
    {
      icon: Trophy,
      number: 500,
      title: "Projects Delivered",
      suffix: "+",
    },
    {
      icon: Star,
      number: 98,
      title: "Success Rate",
      suffix: "%",
    },
  ];

  const [counts, setCounts] = useState([1, 1, 1]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let animationFrame;
    let startTime = null;
    let isAnimating = false;

    const duration = 2500;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easeOut = 1 - Math.pow(1 - progress, 4);

      const newCounts = stats.map((item) =>
        Math.floor(1 + (item.number - 1) * easeOut)
      );

      setCounts(newCounts);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCounts(stats.map((item) => item.number));
        isAnimating = false;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating) {
          isAnimating = true;

          cancelAnimationFrame(animationFrame);

          startTime = null;

          setCounts([1, 1, 1]);

          animationFrame = requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-0 pb-16"
    >
      <div className="grid w-full grid-cols-1 gap-4 bg-green-100 p-6 shadow-sm sm:grid-cols-3 md:px-16 md:py-10">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center gap-3 border-green-200 py-6 text-center transition-transform duration-300 hover:scale-105 sm:border-r last:border-r-0"
            >
              <Icon
                size={38}
                className="text-green-800"
              />

              <h3 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
                {counts[index].toLocaleString("en-IN")}
                {item.suffix}
              </h3>

              <p className="text-sm font-semibold text-gray-700 md:text-base">
                {item.title}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Stats;

