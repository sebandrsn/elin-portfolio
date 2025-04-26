"use client";

import Image, { StaticImageData } from "next/image";

interface ResponsiveBackgroundImageProps {
  mobileImage: StaticImageData;
  desktopImage: string;
  className: string;
}

export default function ResponsiveBackgroundImage({
  mobileImage,
  desktopImage,
  className,
}: Readonly<ResponsiveBackgroundImageProps>) {
  return (
    <>
      <Image
        width={mobileImage.width ?? 200}
        height={mobileImage.height ?? 200}
        src={mobileImage}
        alt="Mobile Background"
        className={`block lg:hidden ${className}`}
      />
      <div
        className={`hidden lg:block ${className}`}
        style={{
          backgroundImage: `url(${desktopImage})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
    </>
  );
}
