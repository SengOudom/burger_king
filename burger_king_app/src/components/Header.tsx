import React from "react";
import { PiStorefrontFill } from "react-icons/pi";
import { MdLocationPin } from "react-icons/md";
import { NavLink, Link, useLocation } from "react-router-dom";
import className from "classnames";
import { PiListFill } from "react-icons/pi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdClose } from "react-icons/md";

export default function Header() {
  const { pathname } = useLocation();

  const provider = [
    "/about-bk",
    "/terms",
    "/franchise",
    "/delivery-terms",
    "/nutrition-explorer",
  ];

  const ProviderIcon = provider.includes(pathname) ? (
    <MdOutlineArrowBackIosNew fontSize={20} />
  ) : !["/"].includes(pathname) ? (
    <MdClose fontSize={25} />
  ) : (
    <PiListFill fontSize={24} />
  );

  const ProviderUrl = ["/account"].includes(pathname) ? "/" : "account";

  return (
    <div className=" border-0 shadow shadow-[rgba(0, 0, 0, 0.2)_0px_1px_1.41px]  sticky top-0 z-[400] bg-[#f5ebdc]">
      <div className=" container mx-auto max-sm:px-3">
        <nav className="grid-flow-col3 grid grid-col-3 grid-flow-col items-center pt-[16px] pb-[8px]">
          <div className="flex justify-start items-center ">
            <Link to={ProviderUrl}>{ProviderIcon}</Link>
          </div>
          <div className="flex justify-center">
            <Link to="/">
              <img
                src={require("../assets/image/iconBk.jpg")}
                alt="IconBk"
                className=" focus:outline checked:outline-2  w-[45px] rounded-sm hover:bg-[rgb(245, 235, 220)] ml-[45px]"
              />
            </Link>
          </div>
          <div className="flex justify-end text-white space-x-4 text-[12px] ">
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 rounded-[40px] leading-[32px] p-[0_16px_0_16px] Flame_Regular"
            >
              Sign Up/Sign In
            </button>

            <button
              type="button"
              className="bg-[#502314] hover:bg-red-700 rounded-[40px]  max-[767px]:hidden p-[0_16px_0_16px]"
            >
              <div className="flex items-center justify-center space-x-3 Flame_Regular">
                <PiStorefrontFill fontSize={15} />
                <span> $0.00</span>
              </div>
            </button>
          </div>
        </nav>

        <NavLink to="/">
          {({ isActive }) => (
            <div
              className={className(
                "space-x-2 flex mt-5 mt text-[16px] pb-[14px]",
                `${isActive ? "block" : "hidden"}`
              )}
            >
              <div className="flex items-center ">
                <MdLocationPin fontSize={20} className="ml-2 " />
                <span className="Flame_Regular">For availability</span>
                <span className="FlameSans_Regular ml-2 underline">
                  Choose location
                </span>
              </div>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
}
