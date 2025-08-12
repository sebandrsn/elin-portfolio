import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function ImageTextGrid({ blok }: any) {
  return (
    <section className="flex h-full flex-col">
      {blok.items.map((item: any, index: number) => {
        return (
          <StoryblokServerComponent blok={item} index={index} key={item._uid} />
        );
      })}
    </section>
  );
}
