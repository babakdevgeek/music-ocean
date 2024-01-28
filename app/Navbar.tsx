"use client";
import { useGSAP } from "@gsap/react";
import { IconDiamond } from "@tabler/icons-react";
import { gsap } from "gsap";
import Link from "next/link";
import { useRef } from "react";
import { VscListSelection } from "react-icons/vsc";
import ToggleThemeButton from "./ToggleThemeButton";
const Navbar = () => {
  const diamond = useRef<SVGSVGElement>(null);
  const pre = useRef<HTMLSpanElement>(null);
  const after = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    gsap.to(diamond.current, { y: 0 });
    gsap.to(pre.current, { x: 0 });
    gsap.to(after.current, { x: 0 });
  });
  return (
    <nav className="  p-4 container">
      <div className=" navbar ">
        <h1 className="text-primary text-2xl flex-1    ">
          <Link href="/" className="flex group items-center">
            <span ref={pre} className="-translate-x-4">
              موزیک
            </span>{" "}
            <IconDiamond
              ref={diamond}
              size="40"
              className="logo-icon group-hover:fill-neutral ransition-colors -translate-y-96"
            />
            <span className="translate-x-4" ref={after}>
              اوشن
            </span>
          </Link>
        </h1>
        <VscListSelection
          className="md:hidden logo-icon cursor-pointer  flex-none"
          size="25"
        />
        <ul className="menu flex-none menu-horizontal md:flex gap-2">
          <li>
            <Link href="/api/auth/signin" className="font-bold">
              ثبت نام
            </Link>
          </li>

          <li>
            <ToggleThemeButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
