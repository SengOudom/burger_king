import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { PiHandCoinsBold } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import { TbCoinFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" border-1- shadow shadow-[rgba(0, 0, 0, 0.1)_0px_-1px_1px] FlameSans_Regular sticky bottom-0 bg-[#f5ebdc] mt-0 ">
      <ul className="flex justify-center items-center text-center text-[12px] p-3 w-full leading-2 ">
        <li className="w-full ">
          <div className="flex justify-center  ">
            <Link to="/">
              <GoHomeFill fontSize={26} />
            </Link>
          </div>
          <span>Home</span>
        </li>
        <li className="w-full ">
          <div className="flex justify-center  ">
            <IoFastFoodSharp fontSize={26} />
          </div>
          <span>Menu</span>
        </li>

        <li className="w-full ">
          <div className="flex justify-center  ">
            <AiFillCodeSandboxSquare fontSize={26} />
          </div>
          <span>My Code</span>
        </li>

        <li className="w-full ">
          <div className="flex justify-center  ">
            <TbCoinFilled fontSize={26} />
          </div>
          <span>Offers</span>
        </li>
        <li className="w-full ">
          <div className="flex justify-center">
            <PiHandCoinsBold fontSize={26} />
          </div>
          <span>Rewards</span>
        </li>
      </ul>
    </div>
  );
}
