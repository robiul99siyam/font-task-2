import { customer_reviews } from "@/lib/static-json";
import CustomerReviewCard from "./CustomerReivewCard";
import ReviewAnalysis from "./ReviewAnalysis";

export default function CustomerReview() {
  return (
    <div>
      <h1 className="font-bold text-xl mb-6 py-5 lg:py-10 font-serif">
        Customer Reviews
      </h1>
      <ReviewAnalysis />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
        {customer_reviews.map((review) => (
          <CustomerReviewCard key={review.id} review={review} />
        ))}
      </div>
      <h1 className="text-center text-teal-500">Views More Cumments</h1>
    </div>
  );
}
