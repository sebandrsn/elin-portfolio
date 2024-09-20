"use client";

import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import Menu from "@/components/Menu";
import { useEffect, useState } from "react";

export default function Header() {
  const mediaQuery = useMediaQuery("(max-width: 640px)");
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
      className={`${scrolled ? "bg-sky-500" : "bg-transparent"} top-0 z-10 w-full fixed`}
    >
      <div className="flex flex-row justify-between items-center mx-4">
        <a
          href="https://www.instagram.com/elinsfotogalleri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 lg:hover:fill-white"
            viewBox="0 0 512 512"
          >
            <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
            <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
          </svg>
        </a>
        <Link href={"/"} className="text-white">
          elin åsedahl
        </Link>
        <Menu />
      </div>
    </header>
  );
}
