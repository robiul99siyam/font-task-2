import { reviewData } from "@/lib/static-json";

export default function ReviewAnalysis() {
  return (
    <div className="w-[400px] lg:w-[600px] ml-hidden lg:ml-auto  grid grid-cols-12 items-start p-4 gap-2 space-y-1 justify-center space-x-4">
      {/* review Labels */}
      <div className="col-span-3 ">
        {reviewData.map((review) => (
          <h2 key={review.id} className="text-[15px] font-medium">
            {review.name}
          </h2>
        ))}
      </div>

      {/* Review Bars */}
      <div className="col-span-7 space-y-4">
        {reviewData.map((review) => (
          <div
            key={review.id}
            className="w-full h-2 bg-yellow-300 rounded-full"
            style={{ width: `${review.rating * 20}%` }}
          />
        ))}
      </div>

      {/* Description */}
      <div className="col-span-2 text-sm text-gray-700">
        {reviewData.map((review) => (
          <h2 key={review.id} className="text-[15px] font-medium">
            {review.rating}
          </h2>
        ))}
      </div>
    </div>
  );
}
