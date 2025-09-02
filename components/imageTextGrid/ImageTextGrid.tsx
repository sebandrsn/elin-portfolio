import { StoryblokServerComponent } from "@storyblok/react/rsc";
import {
  ImageTextGrid as ImageTextGridType,
  ImageTextBlock as ImageTextBlockType,
} from "@/.storyblok/types/337287/storyblok-components";

export default function ImageTextGrid({
  blok,
}: {
  readonly blok: ImageTextGridType;
}) {
  return (
    <section className="flex h-full flex-col">
      {blok.items.map((item: ImageTextBlockType, index: number) => {
        return (
          <StoryblokServerComponent blok={item} index={index} key={item._uid} />
        );
      })}
    </section>
  );
}
