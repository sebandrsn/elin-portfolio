import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mediaQuery = useMediaQuery("(max-width: 640px)");
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const menuItems = [
    { href: "/", text: "Home" },
    { href: "/photos", text: "Photos" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col h-12 w-12 justify-center items-center z-20 relative"
        aria-label="Toggle menu"
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "rotate-45 translate-y-3" : ""
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        />
      </button>
      <div
        className={`fixed inset-0 flex items-center justify-center backdrop-blur-md transition-all duration-1000 ${
          isOpen
            ? "opacity-100 z-10 visible pointer-events-auto"
            : "opacity-0 z-[-1] invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-white text-2xl hover:text-gray-200 transition-opacity duration-1000 ease-in-out ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
