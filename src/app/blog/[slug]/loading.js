export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto p-6 animate-pulse grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="h-96 bg-gray-200 rounded-xl mb-6"></div>
      <div className="space-y-4">
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
