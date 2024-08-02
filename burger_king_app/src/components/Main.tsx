import AppStore from "../assets/image/app-store.svg";
import GooglePlay from "../assets/image/google-play.svg";
import { FaMotorcycle } from "react-icons/fa";
import { PiStorefrontFill } from "react-icons/pi";

export default function Main() {
  return (
    <>
      <div className="lg:container mx-auto sm:p-[0_16px_0_16px] max-md:p-[0_16px_0_16px] overflow-x-hidden ">
        <div className="grid grid-row-1 max-[767px]:grid-row-1">
          <div className="grid grid-cols-3 max-[767px]:grid-cols-1">
            <div className="lg:w-3/4  md:w-full mt-[4rem] max-sm:mt-0  ">
              <span className="max-[767px]:text-[32px] max-md:text-[48px] text-[60px] max-[767px]:flex max-[767px]:justify-center mt-1 leading-[1.125em] text-[rgb(80, 35, 20)] tracking-[0] Flame_Bold text-cente">
                Start your BK® order.
              </span>
            </div>
            <div className="row-span-2 col-span-2 w-full  ">
              <div className="relative w-[120%] left-[-10%] ">
                <img
                  src={require("../assets/image/logo2.jpg")}
                  alt="logo2"
                  className="relative  z-[-1] max-[767px]:hidden"
                />
                <img
                  src={require("../assets/image/logo3.jpg")}
                  alt="logo3"
                  className="relative w-[100%] h-[100%] z-[-1] hidden  max-[767px]:block"
                />
              </div>
            </div>
            <div className="mb-5 lg:w-3/4 md:w-full lg:mt-[-4rem]  max-sm:mt-[2rem] ">
              <button className="bg-red-600 hover:bg-red-700 text-white space-x-2 flex text-[18px] items-center justify-center w-full md:w-[80%] Flame_Regular p-[16px] rounded-[40px]">
                <PiStorefrontFill fontSize={22} />
                <span>Order Pickup</span>s
              </button>
              <br />
              <button className="border-2 border-red-500 text-red-500 hover:bg-orange-00 space-x-2 flex md:text-[18px] items-center  justify-center w-full md:w-[80%]  Flame_Regular p-[16px] rounded-[40px]">
                <FaMotorcycle fontSize={22} />
                <span>Order Delivery</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-[38px] grid grid-cols-2 max-sm:grid-cols-1 gap-5">
          <div className="rounded-[16px] bg-white  ">
            <img
              src={require("../assets/image/pu1.jpg")}
              alt="Pu1"
              className="w-full rounded-t-[16px] "
            />
            <div className="text-[13px] FlameSans_Regular p-5">
              <div className="gird grid-row-4">
                <div className="mb-3">
                  <h3 className="Flame_Regular text-[24px] max-sm:text-[18px] leading-[24px]">
                    Woo-hoo! It’s Whopper® Wednesday
                  </h3>
                </div>
                <div className="mb-3">
                  <span>
                    Make your Wednesday sizzle with the delicious Whopper® deal
                    on the BK® App or bk.com.
                  </span>
                </div>
                <div className="mb-3">
                  <a href="/" className="underline ">
                    See Terms.
                  </a>
                </div>
                <div className="mb-[3rem]">
                  <button className="border border-red-500 text-red-500 text-[14px] Flame_Regular leading-[1.5em] float-right p-[8px_16px_8px_16px] rounded-[9999px]  hover:bg-orange-100 ">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[16px] bg-white  ">
            <img
              src={require("../assets/image/pu1.jpg")}
              alt="Pu2"
              className="w-full rounded-t-[16px] "
            />
            <div className="text-[13px] FlameSans_Regular p-5">
              <div className="gird grid-row-4">
                <div className="mb-3">
                  <h3 className="Flame_Regular text-[24px] max-sm:text-[18px] leading-[24px]">
                    Woo-hoo! It’s Whopper® Wednesday
                  </h3>
                </div>
                <div className="mb-3">
                  <span>
                    Make your Wednesday sizzle with the delicious Whopper® deal
                    on the BK® App or bk.com.
                  </span>
                </div>
                <div className="mb-3">
                  <a href="/" className="underline ">
                    See Terms.
                  </a>
                </div>
                <div className="mb-[3rem]">
                  <button className="border border-red-500 text-red-500 text-[14px] Flame_Regular leading-[1.5em] float-right p-[8px_16px_8px_16px] rounded-[9999px]  hover:bg-orange-100 ">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] bg-[#0000000a]">
        <div className="lg:container mx-auto sm:p-[0_16px_0_16px] max-md:p-[0_16px_0_16px]">
          <div className="grid grid-cols-2 gap-6 max-sm:gap-0">
            <div className="row-span-4 ">
              <div className="flex justify-center">
                <div className="w-[50%] max-sm:w-full relative bottom-14 max-sm:bottom-8">
                  <img
                    src={require("../assets/image/phone.jpg")}
                    alt="Phone"
                    className="w-full h-[100%]"
                  />
                </div>
              </div>
            </div>
            <div className="text-[48px] max-md:text-[30px]  max-sm:text-[24px] Flame_Bold leading-[1.125em]">
              <div className="flex-row items-center justify-center mt-14 max-md:mt-7">
                <span>Save $$$</span>
                <br />
                <span> With offers on demand</span>
              </div>
            </div>

            <div className="max-sm:col-span-2 ">
              <div className=" w-full flex max-sm:justify-center items-center space-x-6 max-md:space-x-3">
                <img
                  src={AppStore}
                  alt=""
                  className="w-[200px] max-md:w-[125px] max-sm:w-[155px]"
                />
                <img
                  src={GooglePlay}
                  alt=""
                  className="w-[200px] max-md:w-[125px] max-sm:w-[155px]"
                />
              </div>
            </div>

            <span className=" max-sm:col-span-2 FlameSans_Regular mb-5 max-sm:text-center max-sm:mt-6 ">
              Apple and the Apple logo are trademarks of Apple Inc., registered
              in the U.S. and other countries. App Store is a service mark of
              Apple Inc. Google Play is a trademark of Google Inc. Terms apply.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#502314] p-[16px] leading-[24px] ">
        <div className="flex items-center justify-center max-sm:block FlameSans_Regular text-[#f5ebdc] text-[12px] ">
          <span>
            TM & Copyright 2023 Burger King Company LLC. All Rights Reserved.
          </span>
          <p className="max-sm:hidden m-1">I</p>
          <br />
          <a href="/" className="underline flex justify-center ">
            Do Not Sell Or Share My Personal Information
          </a>
        </div>
      </div>
    </>
  );
}
