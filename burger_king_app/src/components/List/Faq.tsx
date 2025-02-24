import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Faq() {
  const TopQuestions = [
    {
      text: "I tried to place an order through the App but was unable to complete the transaction. How can I get my order fulfilled?",
      details:
        "We apologize that you are experiencing technical difficulties. Please confirm the card number and ZIP code tied to your card are entered correctly on your profile. If the issue persists, please contact your financial institution. If this does not resolve the issue, please contact our Digital Support team for assistance: bk.com/support",
    },
    {
      text: "I would like to check the balance of my Crown Card.",
      details:
        "Please visit bk.wgiftcard.com for more details on your Crown Card balance and account information.",
    },
    {
      text: "I would like to apply to a position at Burger King. How can I do this?",
      details:
        "We look forward to reviewing your application! Please visit careers.bk.com or contact one of our restaurant locations here to apply: bk.com/store-locator",
    },
    {
      text: "Where can I find the Nutritional Information for Burger King products?",
      details:
        "Please visit bk.com/nutrition for more details on nutritional information for Burger King products.",
    },
    {
      text: "Where is the nearest Burger King location? What are the restaurant's hours?",
      details:
        "Please find your nearest Burger King and its hours of operation here: bk.com/store-locator",
    },
    {
      text: "Is a Whopper a sandwich?",
      details:
        "Yup, it's a sandwich built for you and JUST you. The Whopper is crafted only at Burger King to satisfy Your Way no matter what.",
    },
  ];

  const [ToggleTopQuestions, setToggleTopQuestions] = useState("");

  return (
    <>
      <div className="bg-[#502314] leading-none max-lg:p-5 p-9">
        <h1 className="container mx-auto text-[96px] max-lg:text-[48px] text-[#f5ebdc] Flame_Regular text-center">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="container mx-auto h-screen">
        <h3 className="text-[24px] py-9 Flame_RegularSans font-medium px-3">
          Top Questions
        </h3>
        <div className="flex flex-col w-full ">
          {TopQuestions.map((item, i) => {
            const toggle = ToggleTopQuestions === item.text;
            let setToggle = "";
            if (!toggle) setToggle = item.text;
            const last_index = i === TopQuestions.length - 1;

            return (
              <div
                className={`px-3 py-5 space-x-1 cursor-pointer ${
                  last_index ? "" : "border-b border-b-[#9f816f]"
                }`}
                onClick={() => setToggleTopQuestions(setToggle)}
                key={i}
              >
                <div
                  className={`flex items-center ${toggle && "text-[#d62300]"}`}
                >
                  <span className="Flame_RegularSans font-[500] text-[18px] leading-1 w-full">
                    {item.text}
                  </span>
                  <IoClose
                    className={`transform duration-500 ease-in-out ${
                      toggle ? "rotate-90" : "rotate-45"
                    }`}
                    fontSize={30}
                  />
                </div>
                {toggle && (
                  <div className="py-3 text-[#9f816f] FlameSans_Regular font-medium">
                    {item.details}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
