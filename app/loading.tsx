export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-opacity-80">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-black border-t-transparent"></div>
    </div>
  );
}
