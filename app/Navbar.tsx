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
    const tl = gsap.timeline();
    tl.to(diamond.current, { delay: 0.5, opacity: 1, scale: 1 });
    tl.to(pre.current, { x: 0, delay: -0.5 });
    // tl.to(after.current, { rotate: 40 });
    tl.to(after.current, {
      x: 0,
      delay: -0.5,
    });
    // tl.to(after.current, { x: 0 });
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
              className="logo-icon group-hover:fill-error ransition-colors opacity-0 scale-0"
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
            <Link href="/api/auth/signout" className="font-bold">
              خروج
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
