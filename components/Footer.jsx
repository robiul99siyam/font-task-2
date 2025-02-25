import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#13253F] text-gray-500 w-full h-auto">
      <div className="px-10 py-10">
        <Link href="/" className="font-mono text-2xl font-bold text-[#495560]">
          tour buddy
        </Link>
        <div className=" flex flex-col lg:flex-row justify-between items-center space-x-2 lg:space-x-6  px-5 lg:px-16 py-6">
          <div className="flex flex-row lg:flex-col justify-start lg:justify-center items-center gap-5">
            <button className="border border-gray-500 py-2 px-5 rounded-md w-auto my-2">
              English (UK)
            </button>
            <button className="border border-gray-500 py-2 px-5 rounded-md w-auto my-2">
              U.S Dollor ($)
            </button>
          </div>
          <Image
            src="/banner.png"
            width={900}
            height={500}
            alt="footer image"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
            className="w-[900px]"
          />
        </div>
      </div>
      <p className="text-sm text-center py-4">
        &copy; 2025 Tour Buddy. All rights reserved.
      </p>
    </div>
  );
}
