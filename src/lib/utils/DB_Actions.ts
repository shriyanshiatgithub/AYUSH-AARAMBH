import DBclient from "@/lib/db";
import { User } from "next-auth";

export async function checkUserCredentials(email: string, password: string): Promise<User | null> {
    const db = DBclient.db("ayush");
    const collection = db.collection("users");

    const user = await collection.findOne({ email });

    if (!user) return null;

    return user as User;

}
