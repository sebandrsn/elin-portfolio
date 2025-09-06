import Link from "next/link";
import Menu, { MenuType } from "@/components/header/Menu";
import InstagramIcon from "./InstagramIcon";
import EmailIcon from "./EmailIcon";
import { ISbStoriesParams, StoryblokClient } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/service/storyblok";

const COMPANY_NAME = "pixel&pensel";

export default async function Header() {
  let menu: MenuType[] = [];
  try {
    const config = await fetchConfig();
    if (config?.content?.header_menu) {
      menu = config.content.header_menu;
    }
  } catch (err) {
    console.error("Failed to fetch menu items:", err);
  }

  return (
    <header className="fixed top-0 z-10 w-full bg-white pt-2">
      {/* DESKTOP */}
      <div className="hidden h-full w-full grid-cols-3 lg:grid">
        <div />
        <div className="flex flex-col items-center gap-y-4">
          <Link href={"/"} className="text-xl text-black md:text-4xl">
            {COMPANY_NAME}
          </Link>
        </div>
        <div className="flex flex-row items-center justify-end gap-2 pr-6">
          <InstagramIcon className="pt-1" />
          <EmailIcon className="pt-1" />
        </div>
      </div>
      <div className="hidden lg:block">
        <Menu menu={menu} />
      </div>

      {/* MOBILE */}
      <div className="mx-2 flex h-16 flex-row items-center justify-between lg:hidden">
        <InstagramIcon className="pt-1" />
        <Link href={"/"} className="text-xl text-black md:text-4xl">
          {COMPANY_NAME}
        </Link>
        <Menu menu={menu} />
      </div>
    </header>
  );
}

async function fetchConfig() {
  try {
    let sbParams: ISbStoriesParams = { version: "published" };

    const storyblokApi: StoryblokClient = getStoryblokApi();
    const home = await storyblokApi.get(`cdn/stories/config`, sbParams);
    return home.data.story;
  } catch (error) {
    console.error("Error fetching config:", error);
  }
}
