import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function GallerySkeleton() {
  return (
    <div className="my-10 grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: 9 }).map((_, idx) => (
        <div
          key={idx}
          className="flex h-[300px] w-full items-center justify-center"
        >
          <Skeleton height={300} width={200} />
        </div>
      ))}
    </div>
  );
}
