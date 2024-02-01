"use client";
import { IconUser } from "@tabler/icons-react";
import { IconMusic } from "@tabler/icons-react";
import { IconCategory2 } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";

const BottomNav = () => {
  const router = useRouter();
  return (
    <div className="btm-nav md:w-">
      <button
        className="bg-pink-200 text-pink-600"
        onClick={() => router.push("/admin/new-artist")}
      >
        <IconUser />
        <span className="btm-nav-label">افزودن خواننده</span>
      </button>
      <button
        className="active bg-blue-200 text-blue-600 border-blue-600"
        onClick={() => router.push("/admin/new-category")}
      >
        <IconCategory2 />
        <span className="btm-nav-label">افزودن دسته بندی</span>
      </button>
      <button
        className="bg-teal-200 text-teal-600"
        onClick={() => router.push("/admin/new-music")}
      >
        <IconMusic />
        <span className="btm-nav-label">افزودن اهنگ</span>
      </button>
    </div>
  );
};

export default BottomNav;
