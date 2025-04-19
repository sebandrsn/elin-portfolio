"use client";

interface ResponsiveBackgroundImageProps {
  mobileImage: string;
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
      <div
        className={`sm:hidden ${className}`}
        style={{
          backgroundImage: `url(${mobileImage})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div
        className={`hidden sm:block ${className}`}
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
