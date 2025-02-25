import Image from "next/image";
import { FaCarSide, FaStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineFamilyRestroom } from "react-icons/md";

export default function GuideCard({ guide }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4 p-4">
      {/* Image Section */}
      <div className="col-span-5 lg:col-span-2">
        <Image
          src="/siyam.png"
          alt="siyam"
          width={100}
          height={130}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        />

        <span className="flex justify-start items-center space-x-0 lg:space-x-1  lg:hidden md:hidden xl:hidden">
          {Array.from({ length: Number(guide.rating) || 0 }, (_, index) => (
            <FaStar key={index} className="text-sm lg:text-xl text-[#FFA432]" />
          ))}
          <FaStar className="text-sm lg:text-xl text-gray-400" />
          (584 views)
        </span>
      </div>

      {/* Guide Details */}
      <div className="col-span-1 lg:col-span-7">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 justify-start items-start lg:items-center">
          <button className="px-8  font-bold py-2 rounded-full bg-teal-500 text-white w-[140px] text-center">
            {guide.location}
          </button>
          <span className=" space-x-0 lg:space-x-1 hidden lg:flex md:flex xl:flex justify-center items-center">
            {Array.from({ length: Number(guide.rating) || 0 }, (_, index) => (
              <FaStar
                key={index}
                className="text-sm lg:text-xl text-[#FFA432]"
              />
            ))}
            <FaStar className="text-sm lg:text-xl text-gray-400" />
            (584 views)
          </span>
        </div>
        <h1 className="font-semibold leading-10 text-[16px] font-serif">
          {guide.name}
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 justify-start items-start lg:items-center">
          {/* Hours */}
          <div className="flex items-center gap-1 pr-1 lg:pr-6 lg:border-r-2 lg:border-gray-300">
            <FaRegClock /> {guide.hours} hours
          </div>

          {/* Transport */}
          <div className="flex items-center gap-1 pr-6 lg:border-r-2 lg:border-gray-300">
            <FaCarSide /> {guide.transport}
          </div>

          {/* Plan (No Border) */}
          <div className="flex items-center gap-1">
            <MdOutlineFamilyRestroom /> {guide.plan}
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="col-span-1 lg:col-span-3">
        <h1 className="text-teal-500 font-bold text-xl">
          {" "}
          <span className="font-serif">TK</span> {guide.taka}.00
        </h1>
        <p className="text-gray-600 ml-6 text-sm">per person</p>
      </div>
    </div>
  );
}
