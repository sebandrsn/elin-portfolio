import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const menuItems = [
    { href: "/", text: "Home" },
    { href: "/gallery", text: "Gallery" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
      firstLinkRef.current?.focus();
    } else {
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    function trapFocus(e: KeyboardEvent) {
      if (!isOpen || !menuRef.current) return;
      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex="0"]',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", trapFocus);
    return () => document.removeEventListener("keydown", trapFocus);
  }, [isOpen]);

  const genericHamburgerLine = `h-1 w-full my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <nav className="relative">
      {/* DESKTOP */}
      <ul className="hidden space-x-6 md:flex">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
      {/* MOBILE */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-20 flex h-12 w-6 flex-col items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`${genericHamburgerLine} ${
              isOpen ? "translate-y-3 rotate-45" : ""
            }`}
          />
          <span
            className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`${genericHamburgerLine} ${
              isOpen ? "-translate-y-3 -rotate-45" : ""
            }`}
          />
        </button>
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          className={`fixed inset-0 flex items-center justify-center backdrop-blur-md transition-all duration-1000 ${
            isOpen
              ? "pointer-events-auto visible z-10 opacity-100"
              : "pointer-events-none invisible z-[-1] opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={item.href}
                className={
                  "text-2xl text-black transition-opacity duration-1000 ease-in-out hover:text-gray-200"
                }
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
