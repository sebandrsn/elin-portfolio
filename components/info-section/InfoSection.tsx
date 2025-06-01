import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function InfoSection({ blok }: any) {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-white">
      <div className="flex w-full flex-col items-center gap-y-10">
        {blok.info.map((info: any, index: number) => {
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
