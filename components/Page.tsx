import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { Page as PageType } from "@/.storyblok/types/337287/storyblok-components";

export default function Page(params: { readonly blok: PageType }) {
  if (!params.blok.body || params.blok.body.length === 0) {
    return null;
  }

  return (
    <main>
      {params.blok.body.map((blok) => (
        <StoryblokServerComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
}
