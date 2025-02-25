import { payment_method } from "@/lib/static-json";

export default function PaymentMethod() {
  return (
    <div className="mt-6">
      <h1 className="font-bold text-xl mb-4 text-center md:text-left">
        Payment Method
      </h1>

      {/* Payment Method Options */}
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {payment_method.map((payment) => (
          <label
            key={payment.id}
            className="bg-[#37B1E2] text-white w-[120px] h-[40px] flex items-center justify-center rounded-full cursor-pointer"
          >
            <input
              type="radio"
              name="payment_method"
              value={payment.id}
              className="hidden"
            />
            {payment.name}
          </label>
        ))}
      </div>

      {/* Confirm Button */}
      <div className="mt-6 text-center">
        <button className="bg-[#13253F] text-white px-6 py-3 rounded-full w-[90%] max-w-xs hover:bg-[#153552]">
          Confirm Payment
        </button>
      </div>
    </div>
  );
}
