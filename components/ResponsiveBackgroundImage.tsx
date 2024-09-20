"use client";

import { useEffect, useState } from "react";

interface ResponsiveBackgroundImageProps {
  mobileImage: string;
  desktopImage: string;
  className: string;
}

export default function ResponsiveBackgroundImage({
  mobileImage,
  desktopImage,
  className,
}: ResponsiveBackgroundImageProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
}
