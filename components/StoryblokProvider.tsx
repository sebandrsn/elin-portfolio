"use client";

import { storyblokInit } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";

storyblokInit({
  components: {},
  enableFallbackComponent: true,
});

export default function StoryblokProvider({
  children,
}: Readonly<PropsWithChildren>) {
  return <>{children}</>;
}
