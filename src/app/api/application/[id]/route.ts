import { NextRequest, NextResponse } from "next/server";
import DBclient from "@/lib/db";

interface Params {
    id: string;
}

export async function GET(req: NextRequest, params: {params: Params}) {
    const { id } = params.params;

    try {
        const db = DBclient.db("ayush");
        const collection = db.collection("applications");
        const app = await collection.findOne({ appID: id });

        if (!app) {
            return NextResponse.json({error: "APPLICATION NOT FOUND"}, { status: 404 });
        }

        return NextResponse.json(app);
    } catch (error) {
        
    }
    
    return NextResponse.json({ id });
}