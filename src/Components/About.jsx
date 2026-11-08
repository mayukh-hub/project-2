
import { ArrowRight } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-gray-50 px-6 py-24 md:py-32 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[3px] text-green-600">
            About Us
          </p>

          <h2 className="max-w-xl text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Your Partner
            <br />
            in Progress
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
            We're committed to helping you
            achieve your goals with innovative
            solutions and dedicated support.
          </p>

          <button className="mt-9 flex items-center gap-3 rounded-full bg-green-800 px-9 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-lg">
            Learn More
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-2xl about-image-float">

          {/* Background Circle */}
          {/* <div className="absolute -right-5 -top-12 h-64 w-64 rounded-full bg-yellow-300 md:-right-8 md:-top-14 md:h-96 md:w-96">
          </div> */}

          {/* Animated Image */}
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900"
            alt="Modern glass office building"
            className="about-image-enter relative z-10 h-96 w-full rounded-2xl object-cover shadow-xl transition-transform duration-700 hover:scale-[1.03] md:h-120 lg:h-130"
          />

        </div>

      </div>
    </section>
  );
}

export default About;
