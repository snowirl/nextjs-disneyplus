import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeaderProfile = () => {
  return (
    <div className="flex space-x-2 items-center">
      <p className="hidden lg:block text-white text-sm text select-none cursor-pointer">
        Spencer
      </p>
      <Avatar className="cursor-pointer">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>SW</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default HeaderProfile;
