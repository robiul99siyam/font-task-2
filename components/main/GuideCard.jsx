import Image from "next/image";
import { FaCarSide } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineFamilyRestroom } from "react-icons/md";

export default function GuideCard({ guide }) {
  return (
    <div className="grid grid-cols-12 items-center gap-4 p-4">
      {/* Image Section */}
      <div className="col-span-2">
        <Image
          src="/siyam.png"
          alt="siyam"
          width={100}
          height={130}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        />
      </div>

      {/* Guide Details */}
      <div className="col-span-7">
        <div className="flex flex-row gap-10 justify-start items-center">
          <button className="px-8 font-bold py-2 rounded-full bg-teal-500 text-white w-[140px] text-center">
            {guide.location}
          </button>
          {"⭐".repeat(guide.rating)} (584 views)
        </div>
        <h1 className="font-semibold leading-10 text-[16px] font-serif ">
          {guide.name}
        </h1>
        <div className="flex flex-row gap-6 justify-start items-center">
          {/* Hours */}
          <div className="flex items-center gap-1 pr-6 border-r-2 border-gray-300">
            <FaRegClock /> {guide.hours} hours
          </div>

          {/* Transport */}
          <div className="flex items-center gap-1 pr-6 border-r-2 border-gray-300">
            <FaCarSide /> {guide.transport}
          </div>

          {/* Plan (No Border) */}
          <div className="flex items-center gap-1">
            <MdOutlineFamilyRestroom /> {guide.plan}
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="col-span-3 ">
        <h1 className="text-teal-500 font-bold text-xl">
          {" "}
          <span className="font-serif">TK</span> {guide.taka}.00
        </h1>
        <p className="text-gray-600 ml-6 text-sm">per person</p>
      </div>
    </div>
  );
}
