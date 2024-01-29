import { getServerSession } from "next-auth";
import React from "react";
import { Authoptions } from "../authOptions";
import { redirect } from "next/navigation";
import MusicForm from "./MusicForm";

const Adminpage = async () => {
  const session = await getServerSession(Authoptions);
  if (!session || session.user.role !== "admin") {
    redirect("/");
  }

  return <MusicForm />;
};

export default Adminpage;
