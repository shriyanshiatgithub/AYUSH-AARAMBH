import { NextResponse } from "next/server";
import authConfig, { BASE_PATH } from "@/auth.config";
import NextAuth from "next-auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const reqUrl = new URL(req.url);

  if (!req.auth && reqUrl.pathname !== "/note/new" && reqUrl?.pathname.startsWith("/note/")) return;
  if (!req.auth && reqUrl.pathname.startsWith("/user/")) return;

  if (!req.auth && reqUrl?.pathname !== "/") {
    if (reqUrl.pathname === "/login") return;

    return NextResponse.redirect(new URL(`/login`, req.url));
  }

  // Redirect authenticated users from onboarding to dashboard
  if (req.auth && reqUrl?.pathname === "/login") {
    return NextResponse.redirect(new URL(`/dashboard`, req.url));
  }
});