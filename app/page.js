import GuideMain from "@/components/main/GuideMain";
import CustomerReview from "@/components/review/CustomerReview";
import ProfileReview from "@/components/review/ProfileReview";

export default function Home() {
  return (
    <div>
      {/* Add more components here */}
      <GuideMain />
      <ProfileReview />
      <CustomerReview />
    </div>
  );
}
