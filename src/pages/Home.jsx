import { Button } from "@/components/ui/button";
import React from "react";
import CustomButton from "@/components/CustomButton";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-white text-[3rem] md:text-[6rem] leading-12 md:leading-22 font-grotesk">
      <div>Welcome to</div>
      <div className="mx-4  bg-gradient-to-r from-[#BA39F7] to-[#21C187] text-transparent bg-clip-text whitespace-nowrap font-[600]">
        Solana Wallet
      </div>
      generator.
      <p className="text-[1rem] text-white/50 leading-8 mt-[2rem]">
        Easily manage your solana wallets with access to public and private
        keys.
      </p>
      <CustomButton text="GET STARTED" className="mt-[2rem]" />
    </div>
  );
};

export default Home;
