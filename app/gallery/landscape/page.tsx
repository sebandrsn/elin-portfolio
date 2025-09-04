import { ISbStoriesParams, StoryblokClient } from "@storyblok/react";
import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/service/storyblok";

export const revalidate = 86400; // Revalidate every 24 hours

export default async function LandscapeGallery() {
  const story = await fetchLandscapeGalleryPage();

  return <StoryblokStory story={story} />;
}

async function fetchLandscapeGalleryPage() {
  let sbParams: ISbStoriesParams = { version: "published" };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  const gallery = await storyblokApi.get(`cdn/stories/landscape`, sbParams);
  return gallery.data.story;
}
