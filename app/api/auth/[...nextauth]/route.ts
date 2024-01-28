import { Authoptions } from "@/app/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(Authoptions);

export { handler as GET, handler as POST };
