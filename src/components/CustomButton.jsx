import React from "react";
import { Button } from "./ui/button";
import clsx from "clsx";

const CustomButton = ({ text, className }) => {
  return (
    <Button
      className={clsx(
        `text-white bg-[#9542F7] cursor-pointer px-[3rem] py-[1.5rem] font-grotesk`,
        className && className
      )}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
