"use client";

import Link from "next/link";
import Menu from "@/components/Menu";
import { useEffect, useState } from "react";
import InstagramIcon from "./InstagramIcon";

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
      <div className="flex flex-row items-center justify-center gap-14">
        <InstagramIcon className="pt-1" />
        <Link href={"/"} className="font-reenie text-4xl text-black">
          elin åsedahl
        </Link>
        <Menu />
      </div>
    </header>
  );
}
