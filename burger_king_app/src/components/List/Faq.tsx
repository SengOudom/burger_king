import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import IconBk from "../../assets/image/iconBk.svg";

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

  const MobileAppSupport = [
    {
      text: "I was charged an incorrect amount for my order. How can I resolve this?",
      details:
        "We apologize that you are experiencing technical difficulties. Please confirm the card number and ZIP code tied to your card are entered correctly on your profile. If the issue persists, please contact your financial institution. If this does not resolve the issue, please contact our Digital Support team for assistance: bk.com/support",
    },
    {
      text: "I tried to place an order through the App but was unable to complete the transaction. How can I get my order fulfilled?",
      details:
        "We apologize that you are experiencing technical difficulties. Please confirm the card number and ZIP code tied to your card are entered correctly on your profile. If the issue persists, please contact your financial institution. If this does not resolve the issue, please contact our Digital Support team for assistance: bk.com/support",
    },
    {
      text: "My order did not go through, but I was charged anyways.",
      details:
        "We apologize that you are experiencing technical difficulties. Please contact our Digital Support team for assistance: bk.com/support",
    },
    {
      text: "I placed an order through the App, but my order never arrived.",
      details:
        "We apologize that your order did not arrive. Please contact our Digital Support team for assistance: bk.com/support",
    },
    {
      text: "I placed an order, but would like to cancel it.",
      details:
        "We do not support canceled orders at this time. Please contact our Digital Support team if you require further assistance: bk.com/support",
    },
    {
      text: "My order was delivered, but the contents were damaged.",
      details:
        "We apologize that your order did not arrive as expected. Please contact the restaurant for assistance: bk.com/store-locator. If this does not resolve your issue, please contact our Digital Support team for further assistance here: bk.com/support",
    },
    {
      text: "My order was delivered, but the contents were not what I ordered.",
      details:
        "We apologize that your order did not arrive as expected. Please contact the restaurant for assistance: bk.com/store-locator. If this does not resolve your issue, please contact our Digital Support team for further assistance here: bk.com/support",
    },
    {
      text: "I used a coupon with my order, but the promotion was not applied correctly.",
      details:
        "Please visit bk.com/offers to ensure your coupon is still valid. If this does not resolve your issue, please contact our Digital Support team for assistance here: bk.com/support",
    },
    {
      text: "Can a guest receive a refund for their charitable donation to the Burger King Foundation?",
      details:
        "If a guest receives a refund for their entire check and a donation to the Burger King Foundation was included in the check, then the guest will receive a refund for their charitable contribution to the Burger King Foundation. If a guest only asks for a refund of a portion of their check, the guest would need to specifically ask for a refund of their charitable contribution. Finally, if a guest has already receive a refund for a portion of their check, they cannot ask for an additional refund at a later date. ",
    },
    {
      text: "Can a guest obtain written documentation from the Burger King Foundation for their charitable contributions made via the App?",
      details:
        "Yes, if a guest donates more than $250 to the Burger King Foundation in a calendar year, the guest can send their receipts proving such donations to the Burger King Foundation at bkfoundation@rbi.com and the Burger King Foundation will issue a written acknowledgment directly to the guest.",
    },
  ];

  const OurFood = [
    {
      text: "Where can I find the Nutritional Information for Burger King products?",
      details:
        "Please visit bk.com/nutrition for more details on nutritional information for Burger King products.",
    },
    {
      text: "How do I find information about food allergens?",
      details:
        "Please go to origin.bk.com/pdfs/allergens.pdf for more details on food allergens in Burger King products.",
    },
    {
      text: "Is a Whopper a sandwich?",
      details:
        "Yup, it's a sandwich built for you and JUST you. The Whopper is crafted only at Burger King to satisfy Your Way no matter what.",
    },
  ];

  const EmploymentInformation = [
    {
      text: "I would like to apply to a position at Burger King. How can I do this?",
      details:
        "We look forward to reviewing your application! Please visit careers.bk.com or contact one of our restaurant locations here to apply: bk.com/store-locator",
    },
    {
      text: "I am a Burger King employee and need information regarding my employment.",
      details:
        "Please contact your restaurant for assistance here: bk.com/store-locator",
    },
  ];

  const OtherInformation = [
    {
      text: "Where can I find Burger King's company policies?",
      details:
        "Please go to company.bk.com/corp-policies for more information regarding Burger King's policies.",
    },
    {
      text: "How can I stay updated on the most recent information regarding Burger King?",
      details:
        "For the latest on Burger King, please follow us on Facebook (facebook.com/burgerking/), Twitter (twitter.com/BurgerKing) and Instagram (instagram.com/burgerking/).",
    },
    {
      text: "Where is the nearest Burger King location? What are the restaurant's hours?",
      details:
        "Please find your nearest Burger King and its hours of operation here: bk.com/store-locator",
    },
    {
      text: "How can I provide feedback for an experience I had in a restaurant?",
      details:
        "We would love your feedback to improve your Burger King experience! Please contact our customer support team here: bk.com/contact-us",
    },
  ];

  const About = [
    {
      text: "About Burger King",
      details:
        "Every day, more than 11 million guests visit BURGER KING® restaurants around the world. And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food. Founded in 1954, BURGER KING® is the second largest fast food hamburger chain in the world. The original HOME OF THE WHOPPER®, our commitment to premium ingredients, signature recipes, and family-friendly dining experiences is what has defined our brand for more than 50 successful years.",
    },
  ];

  const [ToggleTopQuestions, setToggleTopQuestions] = useState("");
  const [ToggleMobileAppSupport, setToggleMobileAppSupport] = useState("");
  const [ToggleOurFood, setToggleOurFood] = useState("");
  const [ToggleEmploymentInformation, setToggleEmploymentInformation] =
    useState("");
  const [ToggleOtherInformation, setToggleOtherInformation] = useState("");
  const [ToggleAbout, setToggleAbout] = useState("");

  return (
    <>
      <div className="bg-[#502314] leading-none max-lg:p-5 p-9">
        <h1 className="container mx-auto text-[96px] max-lg:text-[48px] text-[#f5ebdc] Flame_Regular text-center">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="container mx-auto h-auto">
        <h3 className="text-[24px] py-9 Flame_RegularSans font-medium px-3">
          Top Questions
        </h3>
        <div className="flex flex-col w-full pb-3">
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
        <h3 className="text-[24px] py-9 Flame_RegularSans font-medium px-3">
          Mobile App Support
        </h3>
        <div className="flex flex-col w-full pb-3">
          {MobileAppSupport.map((item, i) => {
            const toggle = ToggleMobileAppSupport === item.text;
            let setToggle = "";
            if (!toggle) setToggle = item.text;
            const last_index = i === MobileAppSupport.length - 1;

            return (
              <div
                className={`px-3 py-5 space-x-1 cursor-pointer ${
                  last_index ? "" : "border-b border-b-[#9f816f]"
                }`}
                onClick={() => setToggleMobileAppSupport(setToggle)}
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
        <h3 className="Flame_Bold text-[30px] max-md:text-[18px] px-1 py-6">
          Crown Card
        </h3>
        <h3 className="Flame_RegularSans font-medium text-[30px] max-md:text-[18px] px-1 py-6">
          For questions on your BK Crown Card, go to our
          <Link to="crown-card-faq" className="text-[#d62300]">
            Crown Card FAQ
          </Link>{" "}
          page.
        </h3>
        <h3 className="text-[24px] py-9 Flame_RegularSans font-medium px-3">
          Our Food
        </h3>
        <div className="flex flex-col w-full pb-3">
          {OurFood.map((item, i) => {
            const toggle = ToggleOurFood === item.text;
            let setToggle = "";
            if (!toggle) setToggle = item.text;
            const last_index = i === OurFood.length - 1;

            return (
              <div
                className={`px-3 py-5 space-x-1 cursor-pointer ${
                  last_index ? "" : "border-b border-b-[#9f816f]"
                }`}
                onClick={() => setToggleOurFood(setToggle)}
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
        <h3 className="text-[24px] py-9 Flame_RegularSans font-medium px-3">
          Employment Information
        </h3>
        <div className="flex flex-col w-full pb-3">
          {EmploymentInformation.map((item, i) => {
            const toggle = ToggleEmploymentInformation === item.text;
            let setToggle = "";
            if (!toggle) setToggle = item.text;
            const last_index = i === EmploymentInformation.length - 1;

            return (
              <div
                className={`px-3 py-5 space-x-1 cursor-pointer ${
                  last_index ? "" : "border-b border-b-[#9f816f]"
                }`}
                onClick={() => setToggleEmploymentInformation(setToggle)}
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
        <h3 className="text-[24px] py-9 Flame_RegularSans font-medium px-3">
          Other Information
        </h3>
        <div className="flex flex-col w-full pb-3">
          {OtherInformation.map((item, i) => {
            const toggle = ToggleOtherInformation === item.text;
            let setToggle = "";
            if (!toggle) setToggle = item.text;
            const last_index = i === OtherInformation.length - 1;

            return (
              <div
                className={`px-3 py-5 space-x-1 cursor-pointer ${
                  last_index ? "" : "border-b border-b-[#9f816f]"
                }`}
                onClick={() => setToggleOtherInformation(setToggle)}
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
        <h3 className="text-[24px] py-9 Flame_RegularSans font-medium px-3">
          About
        </h3>
        <div className="flex flex-col w-full pb-3">
          {About.map((item, i) => {
            const toggle = ToggleAbout === item.text;
            let setToggle = "";
            if (!toggle) setToggle = item.text;
            const last_index = i === About.length - 1;

            return (
              <div
                className={`px-3 py-5 space-x-1 cursor-pointer ${
                  last_index ? "" : "border-b border-b-[#9f816f]"
                }`}
                onClick={() => setToggleAbout(setToggle)}
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
        <div className="px-3 flex flex-col pb-12">
          <div className="flex justify-center">
            <img
              src={IconBk}
              alt="IconBk"
              className=" max-sm:w-[100%] w-[50%]"
            />
          </div>
          <div className="Flame_Regular text-[18px] pb-6 text-center">Need More Help?</div>
          <div className="Flame_RegularSans font-medium text-[15px] py-6">Don't hesitate to reach out to our team and share your thoughts</div>
          <button type="button" className="Flame_Regular text-[16px] bg-[#d62300] text-black w-full rounded-full p-2">Contact Us</button>
        </div>
      </div>
    </>
  );
}
