import { ISbStoriesParams, StoryblokClient } from "@storyblok/react";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export const revalidate = 86400; // Revalidate every 24 hours

export default async function Home() {
  const story = await fetchHomePage();

  return <StoryblokStory story={story} />;
}

async function fetchHomePage() {
  let sbParams: ISbStoriesParams = { version: "published" };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  const home = await storyblokApi.get(`cdn/stories/home`, sbParams);
  return home.data.story;
}
