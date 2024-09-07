// src/lib/auth.ts
import { getSession } from "next-auth/react";

export async function getAuthSession() {
  const session = await getSession();
  if (!session) {
    throw new Error("You must be authenticated to access this feature");
  }
  return session;
}
