import { NextRequest, NextResponse } from "next/server";
import DBclient from "@/lib/db";
import { ObjectId } from "mongodb";
import { v6 } from "uuid";
import { compileWelcomeTemplate, sendMail } from "@/lib/mail";

interface RequestInterface {
    userID: string | ObjectId;
    formData: Object;
}

export async function POST(req: NextRequest) {
    try {
        const db = DBclient.db("notes");
        const collection = db.collection("applications");

        const appID = v6();

        const { userID, formData }: RequestInterface = await req.json();

        const result = await collection.insertOne({ creatorID: userID, appID, ...formData });

        return NextResponse.json({ note: result.insertedId }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create note" }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    sendMail({
        to: "tanishqsood.24@gmail.com",
        subject: "Welcome to the app",
        body: compileWelcomeTemplate("Akshat"),
        name: "Akshat",
    });

    return new NextResponse("e");
}