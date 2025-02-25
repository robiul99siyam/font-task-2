import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function CustomerReviewCard({ review }) {
  return (
    <>
      {/* Reviewer Image */}
      <div className="col-span-1 flex items-center">
        <Image
          src={review.image}
          alt={review.name}
          width={70}
          height={80}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
          className="rounded-md"
        />
      </div>

      {/* Reviewer Details */}
      <div className="col-span-2 flex flex-col justify-center">
        <div className="flex">
          {Array.from({ length: Number(review.rating) || 0 }, (_, index) => (
            <FaStar key={index} className="text-[16px] text-[#FFA432]" />
          ))}
          {review.rating < 5 && (
            <FaStar className="text-[16px] text-gray-400" />
          )}
        </div>
        <h1 className="text-[14px] font-semibold">{review.name}</h1>
        <p className="text-sm text-gray-500">{review.date}</p>
      </div>

      {/* Review Content */}
      <div className="col-span-9">
        <h2 className="text-lg font-bold">{review.title}</h2>
        <p className="text-[14px] text-gray-600">&rdquo;{review.tags}&rdquo;</p>
        <p className="text-[14px] text-gray-700">
          &rdquo;{review.description}&rdquo;
        </p>
      </div>
    </>
  );
}
