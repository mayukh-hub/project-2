
import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Resources", link: "#resources" },
    { name: "Contact", link: "#contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-green-950 px-6 py-4 text-white shadow-md md:px-12">

      <div className="flex items-center justify-between">

        <a href="#home" onClick={closeMenu}
          className="flex items-center gap-2">
          <Leaf className="text-lime-400" size={28} />
          <h1 className="text-2xl font-bold">YourBrand</h1>
        </a>

        <ul className="hidden items-center gap-8 text-base font-semibold md:flex">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="transition-colors duration-300 hover:text-lime-400"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-lime-400 px-5 py-2 font-semibold text-green-950 transition hover:bg-lime-300 md:block"
        >
          Get Started
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-lime-400 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full w-full border-t border-green-800 bg-green-950 px-6 py-6 shadow-lg md:hidden">

          <ul className="flex flex-col gap-5 text-lg font-semibold">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={closeMenu}
                  className="block hover:text-lime-400"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-6 block w-full rounded-full bg-lime-400 px-5 py-3 text-center font-semibold text-green-950 hover:bg-lime-300"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
