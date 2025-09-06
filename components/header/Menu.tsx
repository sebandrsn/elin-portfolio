"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SubMenu } from "./SubMenu";
import { AnimatePresence, motion } from "framer-motion";

export type MenuType = {
  slug: string;
  label: string;
  sub_menu?: SubmenuItemType[];
};
export type SubmenuItemType = { slug: string; label: string };

export default function Menu({ menu }: Readonly<{ menu: Array<MenuType> }>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);
  const [menuItem, setMenuItem] = useState<MenuType | undefined>(undefined);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

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
      <ul className="hidden justify-center space-x-6 md:flex">
        {menu.map((item) =>
          item.sub_menu ? (
            <li
              className="py-2.5"
              onMouseEnter={() => {
                setIsSubmenuOpen(true);
                setMenuItem(item);
              }}
              onMouseLeave={() => {
                setIsSubmenuOpen(false);
              }}
              key={item.slug}
            >
              <span className="cursor-pointer">{item.label}</span>
            </li>
          ) : (
            <li className="py-2.5" key={item.slug}>
              <Link href={item.slug}>{item.label}</Link>
            </li>
          ),
        )}
      </ul>
      {isSubmenuOpen && menuItem?.sub_menu && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="absolute flex w-full justify-center bg-white"
          onMouseEnter={() => setIsSubmenuOpen(true)}
          onMouseLeave={() => setIsSubmenuOpen(false)}
        >
          <SubMenu key={menuItem.label} sub_menu={menuItem.sub_menu} />
        </motion.div>
      )}
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              id="mobile-menu"
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 flex items-center justify-center backdrop-blur-md"
            >
              <ul className="flex flex-col items-center space-y-6">
                {menu.map((item, index) =>
                  item.sub_menu ? (
                    <SubMenu
                      key={item.label}
                      label={item.label}
                      sub_menu={item.sub_menu}
                      handleClick={() => setIsOpen(false)}
                    />
                  ) : (
                    <li
                      key={item.label}
                      className={`text-2xl text-black transition-opacity duration-1000 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <Link href={item.slug} onClick={() => setIsOpen(false)}>
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
