import Link from "next/link";
import { SlDiamond } from "react-icons/sl";
import { VscListSelection } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="nav bg-base-300 p-4 ">
      <div className="container flex justify-between items-center">
        <Link href="/" className="">
          <h1 className="text-primary text-2xl flex gap-1 items-center">
            <span>موزیک</span>{" "}
            <SlDiamond size="30" className="logo-icon mt-2" />
            اوشن
          </h1>
        </Link>
        <VscListSelection
          className="md:hidden logo-icon cursor-pointer"
          size="25"
        />
        <ul className="menu menu-horizontal hidden md:block p-0">
          <li>
            <Link href="/api/auth/signin">ثبت نام</Link>
          </li>
          <li>
            <input
              type="checkbox"
              value="night"
              className="toggle theme-controller"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
