"use server";
import { signIn as naSignIn, signOut as naSignOut } from "@/auth";

export async function signIn() {
  await naSignIn("google", {redirectTo: "/dashboard"});
}

export async function signInWithCredentials(credentials: any) {
  await naSignIn("credentials", credentials);
}

export async function signOut() {
  await naSignOut({ redirectTo: "/login" });
}