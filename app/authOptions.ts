import { prismaClient } from "@/prisma/prismaClient";
import { AuthOptions, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const Authoptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "google@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;
        if (email === "babakdevgeek") {
        }
        const resultOfEmail = await prismaClient.users.findUnique({
          where: {
            email,
          },
        });
        if (!resultOfEmail) {
          console.log("passed");
          return { id: "213213", email, role: "anAssigned" };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }: { token: any; user: any }) {
      if (token.email === "babakdevgeek@gmail.com") {
        token.role = "admin";
      } else {
        token.role = "normal user";
      }
      return token;
    },
    session({ session, token }: { session: any; token: any }) {
      if (session) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};
