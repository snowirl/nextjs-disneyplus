import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#08090D] py-8 px-6 space-y-2">
      <div className="w-full flex items-center justify-center">
        <Link href="/">
          <Image
            src="https://links.papareact.com/a943ae"
            alt="Disney Logo"
            width={80}
            height={80}
            className="cursor-pointer invert"
          />
        </Link>
      </div>
      <div className=" text-white text-xs flex items-center space-x-6 space-y-6 flex-wrap justify-center">
        <p className="mt-6 ml-6 cursor-pointer">Privacy Policy</p>
        <p className="cursor-pointer">Subscriber Agreement</p>
        <p className="cursor-pointer">Your US State Privacy Rights</p>
        <p className="cursor-pointer">
          Do Not Sell or Share My Personal Information
        </p>
        <p className="cursor-pointer">Children's Online Privacy Policy</p>
        <p className="cursor-pointer">Help</p>
        <p className="cursor-pointer">Closed Captioning</p>
        <p className="cursor-pointer">Supported Devices</p>
        <p className="cursor-pointer">Gift Disney+</p>
        <p className="cursor-pointer">About Us</p>
        <p className="cursor-pointer">Disney Partner Program</p>
        <p className="cursor-pointer">Interest-based Ads</p>
      </div>
      <div className="flex items-center justify-center py-4">
        <p className="text-xs text-gray-200">© Disney. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
