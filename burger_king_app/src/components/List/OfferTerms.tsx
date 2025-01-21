import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import className from "classnames";

type Props = {};
interface State {
  scroll: {
    id: string;
    name: string;
  }[];
  underline: string;
}

class OfferTerms extends Component<Props, State> {
  state: State = {
    scroll: [
      { id: "whopper", name: "$5 Whopper Jr Duo" },
      {
        id: "crispy_chicken",
        name: "$12 BK® Royal Crispy Chicken Wraps Meal Deal",
      },
      { id: "delivery", name: "Delivery on the BK App and bk.com" },
      { id: "royal_perks", name: "Royal Perks Terms" },
      { id: "experience", name: "My BK Experience Offer" },
      { id: "free_fries", name: "Free Fries! (with any purchase)" },
    ],
    underline: "",
  };

  onUnderlin(name: string): void {
    this.setState({ underline: name });
  }
  render() {
    const st = this.state;
    return (
      <React.Fragment>
        <div className="bg-[#502314]">
          <h1 className="max-sm:text-[48px] text-[96px] text-[#f5ebdc] Flame_Regular text-center leading-[1em] p-14 max-sm:p-7">
            Offer Terms
          </h1>
        </div>
        <div className="flex justify-center ">
          <div className="border-y-[2px] max-sm:w-[95%] w-full border-[#d7c7b5] FlameSans_Regular text-[14px] mt-4 mb-[32px]">
            <div className="lg:container mx-auto sm:p-[0_16px_0_16px] max-md:p-[0_16px_0_16px]  min-h-min">
              <div className="lg:flex justify-start space-x-8 p-[20px_0_20px_0] text-center max-sm:leading-[2.25rem]">
                {st.scroll.map(
                  (items: { id: string; name: string }, j: number) => {
                    return (
                      <div key={j}>
                        <ScrollIntoView selector={`#${items.id}`}>
                          <button
                            className={className(
                              "mdl-button mdl-js-button mdl-button--raised",
                              `${
                                st.underline === items.name ? "underline" : ""
                              }`
                            )}
                            onClick={() => this.onUnderlin(items.name)}
                          >
                            {items.name}
                          </button>
                        </ScrollIntoView>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:container mx-auto sm:p-[0_16px_0_16px] max-md:p-[0_16px_0_16px] min-h-min ">
          <div className="FlameSans_Regular text-[20px] max-sm:text-[16px]">
            <div className="w-[85%] max-sm:w-full">
              <h1
                className="text-[30px] max-sm:text-[18px] Flame_Bold mb-[32px]"
                id="whopper"
              >
                $5 Whopper Jr Duo
              </h1>
              <p className="pt-32px ">
                Price & participation vary. U.S. only. Choose two from the
                featured options. Must ask for offer in restaurant, otherwise a
                la carte pricing applies. Single item at regular menu price. No
                substitutions. Tax extra.
              </p>
              <br />
              <p className="pt-32px ">TM & © 2023 Burger King Company LLC.</p>
              <h1
                className="text-[30px] max-sm:text-[18px] Flame_Bold mt-[32px] mb-[32px]"
                id="crispy_chicken"
              >
                $12 BK® Royal Crispy Chicken Wraps Meal Deal
              </h1>
              <p className="mt-32px">
                Meal Deal includes choice of 2 Royal Crispy Chicken Wraps
                (Choose from Classic, Spicy or Honey Mustard) plus 2 small soft
                drinks & 2 small french fries. Offer available from 10/23/2023
                until 12/02/2023 during regular business hours at participating
                Las Vegas, NV area Burger King® restaurants only. Valid
                in-restaurant and on the BK® App and{" "}
                <Link to="https://www.bk.com/" className="text-[#d62300]">
                  bk.com
                </Link>
                . To purchase via the App or online, Royal Perks Account
                Registration is required. Members must log into their Royal
                Perks account and add the participating menu items in their
                cart. Tax extra. Upsizes extra. No substitutions. Not valid with
                any other coupons or offers. Not valid on delivery orders.
              </p>
              <h1
                className="text-[30px] max-sm:text-[18px] Flame_Bold mt-[32px] mb-[32px]"
                id="delivery"
              >
                Delivery on the BK App and bk.com
              </h1>
              <p className="mt-32px">
                Delivery offered at participating U.S. restaurants on the BK App
                and bk.com. Minimum $5 order required (before taxes and fees).
                Prices may be higher than at restaurants. BK account
                registration is required. Delivery powered by third-party
                delivery providers, and subject to availability and restaurant
                delivery hours. Delivery not available in Alaska and Hawaii.
                Print coupons are not valid on delivery orders. Not all digital
                offers are available on delivery. Check digital offer terms at
                bk.com/offers before ordering.
              </p>
              <br />
              <p>
                <span className="Flame_Regular">
                  Delivery Order Fees for Orders $5 - $9.99:
                </span>
                $1 delivery fee plus 15% service fee (excl. taxes and fees) and
                a $2.50 small cart fee. California Orders Only: Additional $2
                geographical fee is charged by the delivery aggregator.
              </p>
              <br />
              <p>
                <span className="Flame_Regular">
                  Delivery Order Fees for Orders $10+:
                </span>
                $1 delivery fee plus 15% service fee (excl. taxes and fees).
                California Orders Only: Additional $2 geographical fee is
                charged by the delivery aggregator.
              </p>
              <h1
                className="text-[30px] max-sm:text-[18px] Flame_Bold mt-[32px] mb-[32px]"
                id="royal_perks"
              >
                Royal Perks Terms
              </h1>
              <p>
                Program available at participating U.S. restaurants. Account
                registration required. Earn 10 Crowns for every $1 spent on
                eligible transactions at a participating restaurant (after
                discounts, before applicable taxes and fees). Redeem Crowns for
                eligible menu items. Not available in AK & HI. See full terms
                and details at bk.com/rewards-terms.
              </p>
              <h1
                className="text-[30px] max-sm:text-[18px] Flame_Bold mt-[32px] mb-[32px]"
                id="experience"
              >
                My BK Experience Offer
              </h1>
              <p>
                Visit mybkexperience.com and complete survey within 48 hours of
                purchase to get a Free Whopper, Original Chicken Sandwich or
                Croissan’wich with purchase of S/M/L drink and fries (coffee and
                Hash Browns for Croissan’wich). At participating U.S.
                restaurants only. Validated receipt good for one month from date
                of purchase. Validated receipt required. Cannot be combined with
                any other offer or discount. Not valid on delivery or digital
                orders. One survey per guest per month.
              </p>
              <h1
                className="text-[30px] max-sm:text-[18px] Flame_Bold mt-[32px] mb-[32px]"
                id="free_fries"
              >
                Free Fries! (with any purchase){" "}
              </h1>
              <p className="mb-5">
                Royal Perks Members will receive 1 free fry (with purchase), per
                week until December 31, 2023. Royal Perks account registration
                required. Must sign up before December 31, 2023. Offer valid
                from April 25, 2022 to December 31, 2023 11:59 PM EST at
                participating U.S. Burger King® restaurants, on the BK® App and
                BK.com. Limit one per week/account. Not valid on delivery
                orders. Must add offer to cart before placing order. Not valid
                with any other coupons or offers. Not valid with Mix & Match,
                Mix & Match Meals, and Your Way Meal. Not valid in AK, HI, and
                U.S. territories. Void where prohibited. Offer expires every
                Sunday at 11:59 PM EST. A new offer will be added each Monday
                for the duration of the term. No cash value or substitutions.
                Royal Perks terms apply. See bk.com/rewards-terms.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OfferTerms;
