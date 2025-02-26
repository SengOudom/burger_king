import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function CrownCardFaq() {
  const CrowncardFAQ = [
    {
      text: "Where can I get a BK® Crown Card?",
      details:
        "BK® Crown Cards can be purchased at your local BK® Restaurant, or online at bk.wgiftcard.com. ",
    },
    {
      text: "What BURGER KING® locations in my area are participating in the BK® Crown Card Program?",
      details:
        "All BURGER KING® Restaurants located in North America should be participating in the BK® Crown Card program. Please visit www.bk.com to find your nearest location. ",
    },
    {
      text: "How can I check my card balance? ",
      details:
        "Simply go to bk.wgiftcard.com and you will be able to check your balance. ",
    },
    {
      text: "Approximately, how long will cards purchased online take to reach the buyer? ",
      details:
        "Traditional plastic card orders are processed and shipped within five (5) business days, excluding holidays, and delivery time will be determined by the method selected. Virtual gift cards are delivered immediately or date purchaser selects. ",
    },
    {
      text: "Can the card that I purchased or received in the US/Canada be used overseas? ",
      details: "No, unfortunately, your card will not work overseas. ",
    },
    {
      text: "Can a US card be used in Canada and vice versa",
      details:
        "Yes, you should be able to use your US Card in Canada and vice versa",
    },
    {
      text: "If my card will not work what do I do? ",
      details:
        "Contact bk.com/support for assistance. We will send your information along to the appropriate department that will be able to take the necessary steps to send you a replacement card. A new card will be issued in 7 to 10 days. ",
    },
    {
      text: "I purchased a BK® Crown Card at the restaurant but they didn’t load my funds, what do I do? When I made a purchase the BURGER KING® restaurant charged my BK® Crown Card twice how do I get my money back? ",
      details:
        "You will need to take the receipt that shows the balance that you purchased and your card back to the location and ask to speak to the Manager on Duty. Explain what happened and they should be able to help you. If you are not receiving the assistance that you need from the Manager, we can take your name, contact information and Card # and escalate your concerns. Your information will be forwarded along to the appropriate department who will get in touch with the management at the location on your behalf to attempt to resolve the situation. ",
    },
    {
      text: "When I tried to place an order for a BK® Crown Card over $500, it gave my Failed Merchant Rule error? ",
      details:
        "The website will not allow an order over $500 to be processed. You will need to decrease the amount that you are looking to purchase or visit your local BK® restaurant to obtain a card with this full amount on it.",
    },
    {
      text: "Why is it when I try to use my card the cashier tells me the cars is “Unable to Read”?",
      details:
        "The strip on the back of the card may be worn out or de-magnetized which means it can’t be read by the machine that it is swiped through. We will need to replace your card. Contact bk.com/support for assistance.",
    },
    {
      text: "When I am online and trying to re-load my card, why am I getting an error that says my order was declined for Fraud and the funds are put on hold?",
      details:
        "The strip on the back of the card may be worn out or de-magnetized which means it can’t be read by the machine that it is swiped through. We will need to replace your card. Contact bk.com/support for assistance.",
    },
    {
      text: "When I am online and trying to re-load my card, why am I getting an error that says my order was declined for Fraud and the funds are put on hold?",
      details:
        "If an order is denied due to fraud risk, an email will be sent confirming that the order was cancelled and you will receive a full refund of the purchase amount. The rules for ordering and re-loading on the BK® Crown Card website are extremely high to rule out fraud. Check to make sure that your billing information matches what you have provided your bank/Credit Card company. Everything must match exactly including punctuation, abbreviations, uppercase/lowercase letters etc. ",
    },
    {
      text: "Why can’t the cashiers at the restaurant just key in the number to my card?",
      details:
        "Some of our BK® locations do not support the ability to be able to simply type in your card number. The employee that you spoke with may simply not know how to do this. Please ask the employee to check with the manager. If the issue is not resolved, please contact bk.com/support for assistance. We will ensure that your feedback is forwarded to the location. ",
    },
    {
      text: "How does a Gift Token® work? ",
      details: "A Gift Token® works the same as a BK eGift Card. ",
    },
    {
      text: "Do BK® Crown Cards expire or have any fees? ",
      details:
        "No, BK® Crown Cards do not expire, nor do they have any fees associated with them.",
    },
    {
      text: "Does a consumer have to pay any fees when purchasing a BK eGift Card? ",
      details:
        "There are no delivery or handling charges. You will only pay for the value of the eGift Card.",
    },
    {
      text: "Can I change the value of the purchase or cancel the transaction after I have submitted it? ",
      details:
        "No, all gift card transactions are final. However, you may add additional funds to your gift card via a separate transaction. ",
    },
    {
      text: "Can I send myself an eGift Card?",
      details:
        "Yes, you can send yourself an eGift Card. Once you receive it, if you want to give it to another person, you can forward the email to others or print it for them.",
    },
    {
      text: "How will the recipient know that I sent them an eGift Card? ",
      details:
        "The receipt of an eGift Card will receive an email with the eGift Card and any personal messages or images you chose. ",
    },
    {
      text: "How will I know that the recipient opened their eGift Card?",
      details:
        "You will receive an email notification when the recipient opens the email containing their eGift Card. ",
    },
    {
      text: "How long does it take for an eGift Card to reach the recipient? ",
      details:
        "All eGift Cards are subject to credit card and security processing. This typically occurs within 0 minutes of the purchase, however, it could take up to 24 hours. If the eGift Card is not received within 24 hours, please contact customer support.",
    },
    {
      text: "What steps should I take if I purchased an eGift Card but it has not arrived? ",
      details:
        "Occasionally eGift Cards are intercepted by spam filters, please check with the recipient to see if their gift card is in their spam or junk folders. Please also check the email address you entered for the recipient. ",
    },
    {
      text: "Can I schedule an eGift Card to be delivered at a future date and time?",
      details:
        "This is a very popular feature if you want your gift card to arrive at that very special moment. eGift Cards can be delivered immediately (subject to credit card and security processing time) or at any future date and time.",
    },
    {
      text: "The recipient never received my eGift Card. How can I resend it?",
      details:
        'To resend your eGift Card, enter your email address and confirmation number, then select the "Track" button. Once your gift card appears, select the "Send" button. Enter the appropriate email address and select "Submit." Your gift card has now been resent.',
    },
    {
      text: "I sent my eGift Card to the wrong email address. Can I send it to a different email address / mobile phone number?",
      details:
        'To resend your gift card, enter your email address and confirmation number, then select the "Track" button. Once the gift card appears, select the "Send" button. Enter the appropriate email address and select "Submit." The gift card has now been resent.',
    },
    {
      text: "Where is my plastic gift card order?",
      details:
        "Online gift card orders for plastic cards received by 12pm CST are processed the following business day. Our basic shipping method is regular mail and we allow 10 business days for arrival before reissuing an order.",
    },
    {
      text: "I didn't want to send an eGift Card, I wanted to send a plastic one. How can I send a plastic gift card?",
      details:
        "Unfortunately, we are unable to convert an eGift Card to a plastic one. The eGift Card can be sent to you for printing and forwarding, the same way you would forward a plastic card. Remember that eGift Cards can be personalized with audio, images, and text messages which make it a truly unique gift.",
    },
    {
      text: "I am having trouble viewing my gift card email. How can I access it?",
      details:
        'Some email systems and browsers are set to block images and pop-ups which can prevent a recipient from receiving their eGift Card. Please click on the "via web browser" link which is located in the upper right hand corner of the email. Also, check to ensure the pop-up blocker is temporarily disabled; this is typically a yellow box of text just below the browser tabs.',
    },
    {
      text: "I inadvertently deleted my eGift Card before I could use it. How do I request a replacement?",
      details:
        "The purchaser of the gift card has the ability to resend your gift card using their confirmation number and email address. Please contact the purchaser and have them resend the gift card. If you are the purchaser of the gift card, please contact our support center for assistance. Our phone number can be found at the bottom of the website where you purchased the gift card.",
    },
    {
      text: "I lost my eGift Card print out. How do I request a replacement?",
      details:
        "If you misplaced your eGift Card, click on the link in the original email to access it. If you no longer have the original email, please contact the purchaser of the gift card and have them resend it to you.",
    },
  ];

  const [ToggleCrowncardFAQ, setToggleCrowncardFAQ] = useState("");

  return (
    <>
      <div className="bg-[#502314] leading-none max-lg:p-5 p-9">
        <h1 className="container mx-auto text-[96px] max-lg:text-[48px] text-[#f5ebdc] Flame_Regular text-center">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="container mx-auto h-auto pb-12">
        <h3 className="text-[24px] py-9 Flame_RegularSans font-medium px-3">
          Crowncard FAQ
        </h3>
        <div className="flex flex-col w-full pb-3">
          {CrowncardFAQ.map((item, i) => {
            const toggle = ToggleCrowncardFAQ === item.text;
            let setToggle = "";
            if (!toggle) setToggle = item.text;
            const last_index = i === CrowncardFAQ.length - 1;

            return (
              <div
                className={`px-3 py-5 space-x-1 cursor-pointer ${
                  last_index ? "" : "border-b border-b-[#9f816f]"
                }`}
                onClick={() => setToggleCrowncardFAQ(setToggle)}
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
