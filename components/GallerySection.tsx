import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function GallerySection({ blok }: any) {
  return (
    <div className="my-8 flex items-center justify-center">
      <section className="flex h-full w-3/4 flex-col gap-y-28">
        {blok.items.map((item: any, index: number) => {
          return (
            <StoryblokServerComponent
              blok={item}
              index={index}
              key={item._uid}
            />
          );
        })}
      </section>
    </div>
  );
}
