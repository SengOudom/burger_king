import React from "react";

export default function FranchiseBk() {
  return (
    <React.Fragment>
      <div className="bg-[#502314]">
        <h1 className="max-sm:text-[48px] text-[96px] text-[#f5ebdc] Flame_Regular text-center leading-[1em] p-14 max-sm:p-7">
          Burger King Franchising
        </h1>
      </div>
      <div className="lg:container mx-auto sm:p-[0_16px_0_16px] max-md:p-[0_16px_0_16px] ">
        <div className="lg:p-[0_13.5rem_0_13.5rem]">
          <div className="flex items-center justify-center">
            <img
              src={require("../assets/image/fransching1.jpg")}
              alt="Fransching1"
              className="max-sm:w-[70%] w-[75%]"
            />
          </div>
          <div className="mt-3 text-center">
            <span className="text-[24px] max-sm:text-[18px] Flame_Regular">
              United States & Canada Opportunities
            </span>
          </div>
          <div className="mt-5">
            <span className="FlameSans_Regular text-[16px] max-sm:text-[15px] ">
              For more information on US & Canada franchising opportunities
            </span>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="Flame_Regular w-full text-[16px] bg-[#d62300] text-white p-[8px_16px_8px_16px] rounded-3xl"
            >
              Learn More
            </button>
          </div>

          <div className="flex items-center justify-center mt-[64px]">
            <img
              src={require("../assets/image/fransching2.jpg")}
              alt="Fransching1"
              className="max-sm:w-[70%] w-[75%]"
            />
          </div>
          <div className="mt-3 text-center">
            <span className="text-[24px] max-sm:text-[18px] Flame_Regular">
              International Opportunities
            </span>
          </div>
          <div className="mt-5">
            <span className="FlameSans_Regular text-[16px] max-sm:text-[15px] ">
              For more information on International franchising opportunities.
            </span>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="Flame_Regular w-full text-[16px] bg-[#d62300] text-white p-[8px_16px_8px_16px] rounded-3xl"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-[64px] mb-5">
          <h3 className="leading-[1.5rem] text-[20px] max-sm:text-[16px] FlameSans_Regular">
            Welcome to Burger King® Franchising. Discover the benefits of
            investing in one of the world’s leading and most loved restaurant
            brands and learn how to be crowned a BK franchisee.
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
}
