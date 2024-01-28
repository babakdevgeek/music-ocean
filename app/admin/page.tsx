import { getServerSession } from "next-auth";
import React from "react";
import { Authoptions } from "../authOptions";
import { redirect } from "next/navigation";

const Adminpage = async () => {
  const session = await getServerSession(Authoptions);
  if (!session || session.user.role !== "admin") {
    redirect("/");
  }

  return <div>{session ? session.user.role : "no access"}</div>;
};

export default Adminpage;
