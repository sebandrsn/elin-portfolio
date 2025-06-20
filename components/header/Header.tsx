"use client";

import Link from "next/link";
import Menu from "@/components/header/Menu";
import InstagramIcon from "./InstagramIcon";
import EmailIcon from "./EmailIcon";

export default function Header() {
  return (
    <header className="fixed top-0 z-10 w-full bg-white">
      {/* DESKTOP */}
      <div className="hidden h-20 w-full grid-cols-3 items-center lg:grid">
        <div />
        <div className="flex flex-col items-center">
          <Link href={"/"} className="text-xl text-black md:text-4xl">
            elin åsedahl
          </Link>
          <Menu />
        </div>
        <div className="flex flex-row items-center justify-end gap-2 pr-6">
          <InstagramIcon className="pt-1" />
          <EmailIcon className="pt-1" />
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
