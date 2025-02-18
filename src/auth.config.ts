import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { User, NextAuthConfig } from "next-auth"

export const BASE_PATH = "/api/auth";

export default {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", required: true },
        password: { label: "Password", type: "password", required: true },
      },
    }),
  ],
} satisfies NextAuthConfig