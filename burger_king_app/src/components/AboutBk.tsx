import React from "react";

export default function AboutBk() {
  return (
    <div className="min-h-[88.8vh]">
      <div className="bg-[#502314]">
        <h1 className="text-[96px] max-sm:text-[48px]  text-[#f5ebdc] Flame_Regular text-center ml-[-100px] max-sm:ml-[-20px]">
          About Us
        </h1>
      </div>
      <div className="lg:container mx-auto sm:p-[0_16px_0_16px] max-md:p-[0_16px_0_16px]  min-h-min">
        <div className="text-[30px]  max-sm:text-[18px] leading-6 mt-[32px] ">
          <span className="mt-[32px] Flame_Regular">
            Great Food Comes First
          </span>
          <div className="mt-5">
            <span className="text-[20px] max-sm:text-[16px] FlameSans_Regular">
              Every day, more than 11 million guests visit Burger King
              restaurants around the world. And they do so because our
              restaurants are known for serving high-quality, great-tasting, and
              affordable food. Founded in 1954, Burger King is the second
              largest fast food hamburger chain in the world. The original Home
              of the Whopper, our commitment to premium ingredients, signature
              recipes, and family-friendly dining experiences is what has
              defined our brand for more than 50 successful years.
            </span>
          </div>
        </div>
        <div className="text-[30px]  max-sm:text-[18px] leading-6 mt-[32px] mb-3">
          <span className="mt-[32px] Flame_Regular">Contact</span>
          <div className="mt-5">
            <span className="text-[20px] max-sm:text-[16px] Flame_Regular">
              Burger King Corporation
            </span>
            <br />
            <span className="text-[20px] max-sm:text-[16px] FlameSans_Regular">
              Phone Number: 1-866-394-2493
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
