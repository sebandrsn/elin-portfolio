import { ISbStoriesParams, StoryblokClient } from "@storyblok/react";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export const revalidate = 86400; // Revalidate every 24 hours

export default async function Gallery() {
  const story = await fetchGalleryPage();

  return <StoryblokStory story={story} />;
}

async function fetchGalleryPage() {
  let sbParams: ISbStoriesParams = { version: "published" };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  const gallery = await storyblokApi.get(`cdn/stories/gallery`, sbParams);
  return gallery.data.story;
}
