export default function Loading() {
  return (
    <div className="bg-opacity-80 absolute top-24 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-white">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-black border-t-transparent"></div>
    </div>
  );
}
