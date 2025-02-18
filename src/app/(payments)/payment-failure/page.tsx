"use client";

import { useRouter } from "next/navigation";

export default function PaymentFailure() {

  const r = useRouter();
  return (
    <div className="bg-[#2e3035] text-white w-screen h-screen justify-center items-center flex text-center">
      <div>
        <h1>Payment Failed</h1>
        <p>Your payment could not be completed. Please try again.</p>
        <p>Any amount deducted will be back in your account soon.</p>
        <button className="bg-[#4CAF50] hover:bg-[#3a9b43] w-1/2 text-white rounded h-10 mt-5" onClick={() => r.push("/dashboard")}>Try Again</button>
      </div>
    </div>
  );
}
