import { StoryblokServerComponent } from "@storyblok/react/rsc";
import {
  InfoSection as InfoSectionType,
  InfoItem as InfoItemType,
} from "@/.storyblok/types/337287/storyblok-components";

export default function InfoSection({
  blok,
}: {
  readonly blok: InfoSectionType;
}) {
  if (!blok.info || blok.info.length === 0) {
    return null;
  }

  return (
    <section className="flex h-screen flex-col items-center justify-center bg-white">
      <div className="flex w-full flex-col items-center gap-y-10">
        {blok.info.map((info: InfoItemType, index: number) => {
          return (
            <StoryblokServerComponent
              blok={info}
              index={index}
              key={info._uid}
            />
          );
        })}
      </div>
    </section>
  );
}
