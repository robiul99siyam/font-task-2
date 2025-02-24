import { guides } from "@/lib/static-json";
import GuideCard from "./GuideCard";
export default function GuideMain() {
  return (
    <div>
      <h1 className="font-bold text-xl mb-6">Your Selected Guide:</h1>

      <div className="grid grid-cols-12 gap-6">
        {/* Guide List */}
        <div className="col-span-9 space-y-4">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="col-span-3 text-gray-600">
          <button className="px-16 py-7 bg-[#13253F] text-white rounded-full text-xl font-mono">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}
