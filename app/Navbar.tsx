"use client";
import { useGSAP } from "@gsap/react";
import { IconDiamond } from "@tabler/icons-react";
import { gsap } from "gsap";
import Link from "next/link";
import { useRef } from "react";
import { VscListSelection } from "react-icons/vsc";
import ToggleThemeButton from "./ToggleThemeButton";
import { useSession } from "next-auth/react";
const Navbar = () => {
  const { data } = useSession();
  const diamond = useRef<SVGSVGElement>(null);
  const pre = useRef<HTMLSpanElement>(null);
  const after = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(diamond.current, { y: 0, ease: "elastic.out" });
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
      <div className=" navbar bg-primary/10 rounded-md">
        <h1 className="text-primary text-2xl flex-1 pr-6">
          <Link href="/" className="flex group items-center">
            <span ref={pre} className="-translate-x-4">
              موزیک
            </span>{" "}
            <IconDiamond
              ref={diamond}
              size="40"
              className="logo-icon group-hover:fill-error ransition-colors -translate-y-20"
            />
            <span className="translate-x-4" ref={after}>
              اوشن
            </span>
          </Link>
        </h1>

        <details className="dropdown dropdown-end md:hidden">
          <summary className="m-1 btn">
            <VscListSelection
              className="md:hidden logo-icon cursor-pointer  flex-none"
              size="40"
            />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            {!data ? (
              <li>
                <Link href="/api/auth/signin" className="font-bold">
                  ثبت نام
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/api/auth/signout" className="font-bold">
                  خروج
                </Link>
              </li>
            )}
            <li>
              <ToggleThemeButton />
            </li>
          </ul>
        </details>
        <ul className="menu hidden flex-none menu-horizontal md:flex gap-2">
          {!data ? (
            <li>
              <Link href="/api/auth/signin" className="font-bold">
                ثبت نام
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/api/auth/signout" className="font-bold">
                خروج
              </Link>
            </li>
          )}

          <li>
            <ToggleThemeButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
