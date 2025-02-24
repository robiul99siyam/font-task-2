import { FaStar } from "react-icons/fa";

export default function ProfileReview() {
  return (
    <div className="flex flex-col sm:flex-row lg:justify-between lg:items-center lg:space-x-10 lg:px-10 lg:py-8 mt-5">
      {/* Review Section */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-8 justify-start items-center">
          <h1 className="font-bold text-[30px]">4.0</h1>
          <h1 className="text-gray-500">1 Review</h1>
        </div>
        <div className="flex justify-start items-center">
          {Array.from({ length: 4 }, (_, index) => (
            <FaStar key={index} className="text-2xl text-[#FFA432]" />
          ))}
          <FaStar className="text-2xl text-gray-400" />
        </div>
      </div>

      {/* Proficiency Section */}
      <div className="py-4 px-3 w-full lg:w-[360px] bg-[#E6E6E6] rounded-full text-center font-[350] text-gray-800 mt-4 sm:mt-0 ">
        Proficiency in: English, Bangla, and French. Guided: Nearly 20
        individuals.
      </div>
    </div>
  );
}
