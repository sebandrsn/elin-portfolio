// app/page.tsx
import mountainMobile from "@/public/images/mountains-mobile.jpg";
import mountain from "@/public/images/mountains.jpg";
import forestMobile from "@/public/images/forest-mobile.jpg";
import forest from "@/public/images/forest.jpg";
import CardGallery from "@/components/CardGallery";
import ResponsiveBackgroundImage from "@/components/ResponsiveBackgroundImage";

export default function Home() {
  return (
    <>
      <ResponsiveBackgroundImage
        mobileImage={mountainMobile.src}
        desktopImage={mountain.src}
        className="h-screen bg-fixed top-0"
      />
      <CardGallery />
      <ResponsiveBackgroundImage
        mobileImage={forestMobile.src}
        desktopImage={forest.src}
        className="h-screen bg-fixed"
      />
    </>
  );
}
