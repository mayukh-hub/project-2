
import { Leaf } from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";

function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/",
      color: "text-[#1877F2]",
      hover: "hover:bg-[#1877F2]",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/",
      color: "text-[#E4405F]",
      hover: "hover:bg-gradient-to-tr hover:from-[#FEDA75] hover:via-[#DD2A7B] hover:to-[#8134AF]",
    },
    {
      name: "Twitter",
      icon: FaXTwitter,
      url: "https://x.com/",
      color: "text-black",
      hover: "hover:bg-black",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/",
      color: "text-[#FF0000]",
      hover: "hover:bg-[#FF0000]",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/",
      color: "text-[#0A66C2]",
      hover: "hover:bg-[#0A66C2]",
    },
  ];

  return (
    <footer className="w-full bg-green-950 px-6 py-10 text-white md:px-12">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-10 border-b border-green-800 pb-8 sm:grid-cols-2 md:grid-cols-4">

          <div>
            <a href="#home" className="inline-flex items-center gap-2">
              <Leaf
                size={34}
                className="fill-lime-400 text-lime-400"
              />
              <span className="text-xl font-bold">
                YourBrand
              </span>
            </a>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-green-100">
              <li><a href="#home" className="hover:text-lime-400">Home</a></li>
              <li><a href="#about" className="hover:text-lime-400">About</a></li>
              <li><a href="#services" className="hover:text-lime-400">Services</a></li>
              <li><a href="#contact" className="hover:text-lime-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Resources</h3>
            <ul className="space-y-2 text-sm text-green-100">
              <li><a href="#blog" className="hover:text-lime-400">Blog</a></li>
              <li><a href="#faq" className="hover:text-lime-400">FAQs</a></li>
              <li><a href="#support" className="hover:text-lime-400">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Follow Us</h3>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.name}`}
                    title={social.name}
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-white ${social.color} ${social.hover} transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center text-xs text-green-100 md:flex-row">

          <p>
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>

          <div className="flex gap-3">
            <a href="#privacy" className="hover:text-lime-400">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-lime-400">
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
