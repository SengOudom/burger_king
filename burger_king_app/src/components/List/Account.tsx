import React from "react";
import { MdLocationPin } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Text from "../../assets/image/text.svg";

type MyProps = {};

interface Mystate {
  ListType?: any;
}

class Account extends React.Component<MyProps, Mystate> {
  state: Mystate = {
    ListType: [
      {
        name: "About BKC",
        li: [
          { name: "About Bk", link: "/about-bk" },
          { name: "Careers", link: "https://careers.bk.com/" },
          { name: "Franchising", link: "/franchise" },
          { name: "Nutrition", link: "/nutrition-explorer" },
          {
            name: "Allergen Information",
            link: "https://bk-use1-prod.sites.rbictg.com/nutrition/allergens.pdf",
          },
          { name: "Offer Terms", link: "/terms" },
          { name: "Delivery Terms ", link: "/delivery-terms" },
        ],
      },
      {
        name: "Support",
        li: [
          { name: "Contact", link: "/support" },
          { name: "FAQ", link: "/faq" },
          { name: "Crown Card", link: "/crown-card-faq" },
          { name: "Restaurant Survey", link: "https://www.mybkexperience.com/" },
        ],
      },
      {
        name: "Legal",
        li: [
          { name: "Tearms of Service", link: "/terms-of-service" },
          { name: "Mobile Order and Payment Terms", link: "/" },
          { name: "Privacy Policy", link: "/" },
          { name: "Trademarks", link: "/" },
          { name: "Accessibility", link: "/accessibility" },
          { name: "Unsolicited Idea Policy ", link: "/" },
          { name: "Attributions", link: "/" },
          { name: "Do Not Sell Or Share My Personal Information", link: "/" },
        ],
      },
      {
        li: [{ name: "Royal Perks", link: "/" }],
      },
      {
        li: [
          { name: "Royal Perks Terms of Service", link: "/" },
          { name: "Diagnostics", link: "/" },
        ],
      },
    ],
  };

  componentDidMount(): void {
    document.title = "My Accouont - Burger King";
  }

  render() {
    const st = this.state;

    return (
      <React.Fragment>
        <div className="min-h-[87.1vh] mb-4">
          <div className="lg:container mx-auto sm:p-[0_16px_0_16px] max-md:p-[0_16px_0_16px] mt-5 ">
            <div className="FlameSans_Regular tracking-normal lg:p-[0_120px_0_120px] md:p-[0_10rem_0_10rem] max-sm:p-[0_16px_0_16px] ">
              <div className="mb-4 tracking-normal">
                <div className="hidden  max-sm:block mb-12">
                  <div className="text-center">
                    <h2 className="text-[24px] Flame_Regular mb-6">
                      Create an Account to Get Started With
                    </h2>
                    <div className="flex justify-center mb-1">
                      <img src={Text} alt="Text" />
                    </div>
                    <div className="p-2">
                      <button className="Flame_Regular bg-[#d62300] p-[8px_16px_8px_16px] rounded-3xl  text-white w-full">
                        Sign Up Now
                      </button>
                    </div>
                    <div>
                      <span className="">Already have an account?</span>
                      <Link to="/" className="Flame_Regular ml-1">
                        Sign In
                      </Link>
                    </div>
                  </div>
                </div>

                <Link to="/" className="flex space-x-1 mb-3 max-sm:hidden">
                  <CgProfile fontSize={24} />
                  <span>Log In or Create Account</span>
                </Link>
                <Link to="/" className="flex space-x-1 Flame_Regular mb-4">
                  <MdLocationPin fontSize={24} />
                  <span>Find a Restaurant</span>
                </Link>
              </div>

              <ul className="">
                {st.ListType.map(
                  (
                    items: {
                      name: string;
                      link: string;
                      li?: any;
                    },
                    i: number
                  ) => {
                    let rowLi: any = [];
                    if (items.li) {
                      items.li.map(
                        (li: { name: string; link: string }, j: number) => {
                          return rowLi.push(
                            <li
                              className={classNames(
                                `${items.name ? "mb-2" : "mt-[20px]"}`
                              )}
                              key={j}
                            >
                              <Link
                                to={li.link}
                                className={classNames(
                                  `${
                                    li.name === "Diagnostics"
                                      ? "text-[16px]"
                                      : "text-[14px]"
                                  }`
                                )}
                              >
                                {li.name}
                              </Link>
                            </li>
                          );
                        }
                      );
                    }

                    return (
                      <React.Fragment key={i}>
                        <li className="  border-t-black border-t-[1px] mt-4 leading-[3rem]">
                          <h3 className="text-[16px] Flame_Regular -mb-1">
                            {items.name}
                          </h3>
                        </li>
                        {rowLi}
                      </React.Fragment>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Account;
