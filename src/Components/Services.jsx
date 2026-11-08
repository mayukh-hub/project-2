
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Consulting",
    description: "Expert advice for greater impact.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
  },
  {
    title: "Technology",
    description: "Build smarter with modern technology.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Business Growth",
    description: "Strategies for long-term success.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-gray-50 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Our Services
          </h2>

          <p className="mt-2 text-xl text-medium text-gray-900 md:text-lg">
            Tailored solutions to meet your needs
          </p>
        </div>

   
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-xl bg-gray-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{
                animation: `serviceFade 0.8s ease-out ${index * 0.2}s both`,
              }}
            >
        
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-28 w-full object-cover transition-transform duration-700 group-hover:scale-110 md:h-32"
                />
              </div>

        
              <div className="px-5 py-4 text-center">

                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mx-auto mt-2 max-w-55 text-sm leading-6 text-black-600">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-green-800 transition-all duration-300 hover:gap-3 hover:text-green-600"
                >
                  Learn More
                  <ArrowRight size={16} />
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>

  
      <style>{`
        @keyframes serviceFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Services;