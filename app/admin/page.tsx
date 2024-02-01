import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Authoptions } from "../authOptions";
import ArtistForm from "./ArtistForm";
import BottomNav from "./BottomNav";

const Adminpage = async () => {
  const session = await getServerSession(Authoptions);
  if (!session || session.user.role !== "admin") {
    redirect("/");
  }

  return (
    <>
      <div className="mb-32">
        <ArtistForm />
      </div>
      <BottomNav />
    </>
  );
};

export default Adminpage;
