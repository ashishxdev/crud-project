import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.BASE_URL || "https://crud-project-roan.vercel.app/",
});

export const { signIn, signUp, signOut, useSession } = authClient;
