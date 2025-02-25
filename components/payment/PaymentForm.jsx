import PaymentMethod from "./PaymentMethod";

export default function PaymentForm() {
  return (
    <form className="space-y-4">
      {/* Name */}
      <label htmlFor="name" className=" text-lg">
        Name:
      </label>
      <input
        type="text"
        placeholder="Name"
        className="border-[1px] border-gray-300 rounded-md p-3 w-full focus:outline-none"
      />

      {/* Card Number */}
      <label htmlFor="cardNumber" className=" text-lg">
        Card Number:
      </label>
      <input
        type="text"
        placeholder="Card Number"
        className="border-[1px] border-gray-300 rounded-md p-3 w-full"
      />

      {/* Transaction ID */}
      <label htmlFor="transactionId" className=" text-lg">
        Transaction ID:
      </label>
      <input
        type="text"
        placeholder="Transaction ID"
        className="border-[1px] border-gray-300 rounded-md p-3 w-full"
      />

      {/* PIN Code */}
      <label htmlFor="pinCode" className=" text-lg">
        PIN Code:
      </label>
      <input
        type="password"
        placeholder="PIN Code"
        className="border-[1px] border-gray-300 rounded-md p-3 w-full"
      />

      <PaymentMethod />
    </form>
  );
}
