
import { ArrowRight } from "lucide-react";

function ContactBanner() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-green-950 px-6 py-12 md:px-16 md:py-14"
    >
  
      <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-32 rotate-45 rounded-full bg-green-800/70 blur-sm" />

      <div className="pointer-events-none absolute -right-20 bottom-22.5 h-64 w-36 -rotate-45 rounded-full bg-green-700/50 blur-sm" />

      <div className="pointer-events-none absolute right-28 top-18.75 h-52 w-20 rotate-45 rounded-full bg-lime-700/30 blur-sm" />

   
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">

  
        <div className="animate-banner-text">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            Let's Grow Together
          </h2>

          <p className="mt-3 text-sm text-green-100 md:text-base lg:text-lg">
            Get in touch and start your journey.
          </p>
        </div>

        <a
          href="mailto:hello@example.com"
          className="group inline-flex items-center gap-3 rounded-full bg-lime-400 px-8 py-4 text-sm font-bold text-green-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-xl md:px-10 md:py-5 md:text-base"
        >
          Contact Us

          <ArrowRight
            size={19}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </a>

      </div>
    </section>
  );
}

export default ContactBanner;
