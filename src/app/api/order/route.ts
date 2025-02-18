import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { v7 } from "uuid";

const razorpay = new Razorpay({
    key_id: process.env.RP_ID!,
    key_secret: process.env.RP_SECRET_KEY!,
});

export async function POST(req: NextRequest) {
    try {
        const order = await razorpay.orders.create({
            amount: 10 * 100,
            currency: "INR",
            receipt: v7(),
        });

        return NextResponse.json({
            orderId: order.id,
        }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Something went wrong" }, 
            { status: 500 }
        );
    }
}