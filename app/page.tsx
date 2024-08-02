import Image from "next/image";
import mountain from "@/public/images/jordan-steranka-snpFW42KR8I-unsplash.jpg";
import forest from "@/public/images/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg";

export default function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${mountain.src})` }}
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
        style={{ backgroundImage: `url(${forest.src})` }}
        className="h-screen bg-fixed"
      ></div>
    </>
  );
}
