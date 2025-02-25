import PaymentMethod from "./PaymentMethod";

export default function PaymentForm() {
  return (
    <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      {/* Name */}
      <div>
        <label htmlFor="name" className="text-lg block">
          Name:
        </label>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Card Number */}
      <div>
        <label htmlFor="cardNumber" className="text-lg block">
          Card Number:
        </label>
        <input
          type="text"
          placeholder="Card Number"
          className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Transaction ID */}
      <div>
        <label htmlFor="transactionId" className="text-lg block">
          Transaction ID:
        </label>
        <input
          type="text"
          placeholder="Transaction ID"
          className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* PIN Code */}
      <div>
        <label htmlFor="pinCode" className="text-lg block">
          PIN Code:
        </label>
        <input
          type="password"
          placeholder="PIN Code"
          className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <PaymentMethod />
    </form>
  );
}
