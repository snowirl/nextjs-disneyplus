"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderButtonsBar from "./HeaderButtonsBar";
import HeaderProfile from "./HeaderProfile";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [y, setY] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setY(latest);
  });

  return (
    <motion.header
      className={`sticky top-0 z-20 duration-500 ${
        y > 50 ? "bg-[#08090D]" : "bg-black/0"
      }`}
    >
      <div className="">
        <div className="py-4 px-8 flex w-full items-center justify-between max-w-[1920px] mx-auto">
          <div className="flex space-x-2 items-center">
            <Link href="/">
              <Image
                src="https://links.papareact.com/a943ae"
                alt="Disney Logo"
                width={70}
                height={60}
                className="cursor-pointer invert"
              />
            </Link>
            <HeaderButtonsBar />
          </div>
          <div>
            <HeaderProfile />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
