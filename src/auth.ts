import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth, { User } from "next-auth";
import client from "@/lib/db";
import authConfig from "@/auth.config";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import { checkUserCredentials } from "@/lib/utils/DB_Actions";
import { compileWelcomeTemplate, sendMail } from "./lib/mail";

export const BASE_PATH = "/api/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client, { databaseName: "ayush" }),
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    jwt({ token, user, account }) {

      if (user) {

        token.id = user.id;

        if (user.email) {
          sendMail({
            to: token?.email as string,
            subject: "Welcome to the app",
            body: compileWelcomeTemplate(user.name || "User"),
            name: user.name || "User",
          });
        }

        if (account) {
          token.accessToken = account.access_token;
          token.provider = account.provider;
        }
      }

      return token;
    },
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl;
        const unprotectedRoutes = ["/", "/login", "/api/auth/signin"];

        if (unprotectedRoutes.includes(pathname)) {
          return true;
        }

        return !!auth;
      } catch (error) {
        console.error("Authorization check failed:", error);
        return false;
      }
    },
    async session({ session, token }) {
        if (token?.accessToken) {
        session.accessToken = token.accessToken as string;

        try {
          const db = client.db("users");
          const collection = db.collection("users");

          const user = await collection.findOne({ email: token.email });
          session.user.id = user?._id.toString() as string;

          if (user?.username) {
            session.user.username = user.username;
          } else {
            console.log("User not found, creating new user");
            const newUser = {
              username: token.email?.substring(0, token.email.indexOf("@")) || "defaultUsername",
            };

            const insertResult = await collection.findOneAndUpdate(
              { email: token.email },                  // Filter by email
              { $set: newUser },                       // Update with new user data
              { returnDocument: 'after', upsert: true } // Return the updated document after upserting
            );
            session.user.username = newUser.username;
          }
        } catch (error) {
          console.error("Failed to fetch or insert user:", error);
        }
      }

      return session;
    },
  },
  basePath: BASE_PATH,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.AUTH_SECRET,
  ...authConfig,
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", required: true, name: "email" },
        password: { label: "Password", type: "password", required: true, name: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        const user = checkUserCredentials(credentials.email as string, credentials.password as string);

        if (user) {
          return user;
        }

        return null;
      },
    }),
  ]
});

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id?: string;
      name?: string;
      email?: string;
      image?: string;
      username?: string;
    };
  }
}

export const { GET, POST } = handlers;