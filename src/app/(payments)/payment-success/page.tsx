"use client";

import { useRouter } from "next/navigation";

export default function PaymentSuccess({ searchParams }: { searchParams: { paymentId: string, orderId: string } }) {

  const r = useRouter();
  return (
    <div className="bg-[#2e3035] text-white w-screen h-screen justify-center items-center flex text-center">
      <div>
        <h1 className="text-xl">Payment Successful</h1>
        <p>Payment ID: {searchParams.paymentId}</p>
        <p>Order ID: {searchParams.orderId}</p>
        <button className="bg-[#4CAF50] hover:bg-[#3a9b43] w-auto text-white rounded h-10 mt-5 px-5" onClick={() => r.push("/dashboard")}>Return to Dashboard</button>
      </div>
    </div>
  );
}