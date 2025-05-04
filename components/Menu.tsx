import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const menuItems = [
    { href: "/", text: "Home" },
    { href: "/gallery", text: "Gallery" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-20 flex h-12 w-12 flex-col items-center justify-center"
        aria-label="Toggle menu"
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "translate-y-3 rotate-45" : ""
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "-translate-y-3 -rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`fixed inset-0 flex items-center justify-center backdrop-blur-md transition-all duration-1000 ${
          isOpen
            ? "pointer-events-auto visible z-10 opacity-100"
            : "pointer-events-none invisible z-[-1] opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={
                "text-2xl text-black transition-opacity duration-1000 ease-in-out hover:text-gray-200"
              }
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
