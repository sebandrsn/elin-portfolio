"use client";

import Image from "next/image";
import mountainMobile from "@/public/images/mountains-mobile.jpg";
import mountain from "@/public/images/mountains.jpg";
import forestMobile from "@/public/images/forest-mobile.jpg";
import forest from "@/public/images/forest.jpg";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Home() {
  const mediaQuery = useMediaQuery("(max-width: 640px)");

  return (
    <>
    {mediaQuery.loaded && (<>
      <div
        style={{
          backgroundImage: `url(${mediaQuery.isMobile ? mountainMobile.src : mountain.src})`,
        }}
        className="h-screen bg-fixed top-0"
      ></div>
      <div className="w-full bg-white h-96">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec magna
        nec justo finibus consectetur. Nam non est mauris. Vestibulum euismod,
        lorem eget consequat molestie, elit erat tempus nibh, et aliquet ex
        lorem quis dui. Nam a ullamcorper dui. Aliquam vulputate faucibus magna
        a rutrum. Mauris et pulvinar ligula. Fusce aliquet aliquam placerat.
      </div>
      <div
        style={{
          backgroundImage: `url(${mediaQuery.isMobile ? forestMobile.src : forest.src})`,
        }}
        className="h-screen bg-fixed"
      ></div>
      </>)}
    
    </>
  );
}
