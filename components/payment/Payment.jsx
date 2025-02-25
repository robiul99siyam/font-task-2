import Image from "next/image";
import PaymentForm from "./PaymentForm";

export default function Payment() {
  return (
    <div className="px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Payment Form */}
        <div className="md:col-span-8">
          <h1 className="font-serif text-2xl md:text-3xl mb-6 text-center md:text-left">
            Choose Payment Method
          </h1>
          <PaymentForm />
        </div>

        {/* Payment Image */}
        <div className="md:col-span-4 flex justify-center">
          <Image
            src="/payment.jpg"
            width={250}
            height={250}
            alt="payment image"
            className="border border-black rounded-2xl"
          />
        </div>
      </div>

      {/* Banner Image */}
      <div className="mt-10 flex justify-center">
        <Image
          src="/payment1.jpg"
          width={800}
          height={250}
          alt="payment image"
          className="w-full max-w-xl md:max-w-3xl"
        />
      </div>
    </div>
  );
}
