import Image from "next/image";
import PaymentForm from "./PaymentForm";

export default function Payment() {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 px-5 justify-center items-start">
        {/* Payment Form */}
        <div className="col-span-8">
          <h1 className="font-serif text-[36px] mb-6 ">
            Choose Payment Method
          </h1>
          <PaymentForm />
        </div>

        <div className="col-span-4">
          <Image
            src="/payment.jpg"
            width={200}
            height={200}
            alt="payment image"
            className="mx-auto border border-black rounded-[30px] transparent"
          />
        </div>
      </div>

      <Image
        src="/payment1.jpg"
        width={800}
        height={250}
        alt="payment image"
        className="mx-auto mt-10 "
      />
    </>
  );
}
