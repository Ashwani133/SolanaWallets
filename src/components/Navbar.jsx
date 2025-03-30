import React from "react";
import { Button } from "./ui/button";
import { Wallet } from "lucide-react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <div className="h-[64px] flex justify-between items-center px-[1rem]">
      <div className="flex gap-x-[1rem] items-center">
        <div>
          <Wallet className="text-white" />
        </div>
        <div className="text-white font-grotesk font-bold">SOLANA WALLET</div>
      </div>
      <div className="hidden md:block">
        <CustomButton text="GET STARTED" className="font-grotesk" />
      </div>
    </div>
  );
};

export default Navbar;
