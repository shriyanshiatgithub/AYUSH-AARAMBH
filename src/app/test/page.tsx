'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

export default function PaymentPage() {
  const [amount, setAmount] = useState(0);
  const router = useRouter();  // Initialize router for redirection

  const handlePayment = async () => {
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const data = await response.json();
    if (data.orderId) {
      const options = {
        key: process.env.NEXT_PUBLIC_RP_ID,
        amount: amount * 100,
        currency: 'INR',
        name: 'Ayush Aarambh',
        description: 'Registration on startup portal',
        order_id: data.orderId,
        handler: function (response: any) {
          router.push(`/payment-success?paymentId=${response.razorpay_payment_id}&orderId=${response.razorpay_order_id}`);
        },
        theme: {
          color: '#3399cc',
        },
        modal: {
          ondismiss: function () {
            router.push('/payment-failure');
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert('Failed to initiate payment');
    }
  };

  return (
    <div>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <h1>Payment Page</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter amount"
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}
