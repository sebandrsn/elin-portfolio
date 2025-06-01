"use client";

import Link from "next/link";
import Menu from "@/components/header/Menu";
import { useEffect, useState } from "react";
import InstagramIcon from "./InstagramIcon";
import EmailIcon from "./EmailIcon";

export default function Header() {
  const scrollThreshold = 100;

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${scrolled ? "bg-white duration-1000" : "bg-transparent pt-2"} fixed top-0 z-10 w-full`}
    >
      {/* DESKTOP */}
      <div className="hidden justify-center lg:flex lg:flex-row">
        <InstagramIcon className="pt-1" />
        <EmailIcon className="pt-1" />
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <Link href={"/"} className="text-xl text-black md:text-4xl">
              elin åsedahl
            </Link>
          </div>
          <Menu />
        </div>
      </div>

      {/* MOBILE */}
      <div className="mx-2 flex flex-row items-center justify-between lg:hidden">
        <InstagramIcon className="pt-1" />
        <Link href={"/"} className="text-xl text-black md:text-4xl">
          elin åsedahl
        </Link>
        <Menu />
      </div>
    </header>
  );
}
