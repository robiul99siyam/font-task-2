import { payment_method } from "@/lib/static-json";

export default function PaymentMethod() {
  return (
    <div>
      <h1 className="font-bold text-xl mb-6 py-5 lg:py-4 font-serif">
        Payment Method
      </h1>

      {/* Payment Method Radio Buttons */}
      {payment_method.map((payment) => (
        <span
          key={payment.id}
          className="bg-[#37B1E2] w-[100px] h-[30px] p-4 rounded-full m-1 "
        >
          {" "}
          <label>
            <input type="radio" name="payment_method" value={payment.id} />
            {payment.name}
          </label>
        </span>
      ))}

      {/* Submit Button */}
      <div className="text-center">
        <button className="bg-[#13253F] text-white px-5 py-5 mt-10 rounded-full w-[300px] hover:bg-[#153552]">
          Confirm Payment
        </button>
      </div>
    </div>
  );
}
