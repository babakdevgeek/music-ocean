import { Authoptions } from "@/app/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: FormData) => {
  const session = await getServerSession(Authoptions);
  if (!session || session.user.role !== "admin") {
    redirect("/");
  }
  const body = req.get("file");
  console.log(body);
  return NextResponse.json("ok");
};
