import { prismaClient } from "@/prisma/prismaClient";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { userSchema } from "./zodSchemas/userSchema";
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
        const inputValidation = userSchema.safeParse(credentials);
        if (!inputValidation.success) {
          return null;
        }
        const { email, password } = inputValidation.data;

        const resultOfEmail = await prismaClient.users.findUnique({
          where: {
            email,
          },
        });

        if (!resultOfEmail) {
          const hashedPassword = await bcrypt.hash(password, 10);
          const { id, email: savedEmail } = await prismaClient.users.create({
            data: {
              email,
              password: hashedPassword,
            },
          });
          return { id, email: savedEmail };
        }

        if (resultOfEmail) {
          const decrypt = await bcrypt.compare(
            password,
            resultOfEmail.password
          );

          if (decrypt) {
            return {
              id: resultOfEmail.id,
              email: resultOfEmail.email,
            };
          }
        }
        return null;
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
