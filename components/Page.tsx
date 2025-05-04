import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Page(params: any) {
  return (
    <main>
      {params.blok.body.map((blok: any) => (
        <StoryblokServerComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
}
