import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <>
      <div className="bg-[#502314] leading-none max-lg:p-5 p-9">
        <h1 className="container mx-auto text-[96px] max-lg:text-[48px] text-[#f5ebdc] Flame_Regular text-center">
          Trademarks
        </h1>
      </div>
      <div className="container mx-auto h-auto text-[16px] Flame_RegularSans font-medium leading-1 px-1 pb-12">
        <div className="py-3">
          The following is a non-exhaustive list of Burger King Corporation’s
          trademarks and service marks (collectively, the “marks”) that may be
          used on Burger King Corporation’s digital platforms.
        </div>
        <div className="py-3">
          Permission from Burger King Corporation is required in order to use
          any of Burger King Corporation’s marks. Please reach out to{" "}
          <Link to="" className="text-[#d62300]">
            mediainquiries@whopper.com
          </Link>{" "}
          to coordinate such permissions and to ensure the marks are being used
          appropriately. These marks may only be used for the specific purpose
          for which Burger King Corporation grants permission.
        </div>
        <div className="py-3">
          As a general guideline, when using Burger King Corporation’s marks in
          publications that will be distributed only in the United States,
          include the appropriate trademark symbol, as detailed further below,
          at least on first use.
        </div>
        <div className="py-3">
          If using Burger King Corporation’s marks in publications that will be
          distributed outside the United States, do not include trademark
          symbols. Instead, use an appropriate trademark attribution notice, for
          example: WHOPPER and CROISSAN'WICH are trademarks of Burger King
          Corporation registered in the U.S. and other countries.
        </div>
        <div className="py-3">
          The absence of a tagline, product or service name or logo from this
          list does not constitute a waiver of Burger King Corporation’s
          trademark or other intellectual property rights concerning that
          tagline, product or service name or logo.
        </div>
        <div className="py-3 Flame_Bold text-[28px] max-md:text-[18px] font-medium">
          Trademarks
        </div>
        <div className="py-3">
          • BURGER KING®• BURGER KING & Crescent Design• WHOPPER®• AMERICA'S
          FAVORITE BURGER®• ANGRY WHOPPER®• BK®• BK Logo Your Way®• BURGER KING
          & Crescent Design• BURGER KING & Crescent Design YOUR WAY•
          CROISSAN'WICH®• CROWN STANDARD®• FLAME GRILLED & Design• HAVE IT YOUR
          WAY®• HAVE IT YOUR WAY (Stylized)• Heritage Man Logo• HOME OF FLAME
          BROILING®• HOME OF THE WHOPPER®• KING DEALS®• KING JR®• RODEO®• TASTE
          IS KING®• WHOPPER JR. Logo• WHOPPER Logo• PRETZEL BACON KING™• STACKER
          KING™• BACON KING™• Single Quarter Pound KING™• Double Quarter Pound
          KING™• EGG-NORMOUS BURRITO™
        </div>
        <div className=" max-sm:text-center text-[36px] max-sm:text-[16px] py-6 font-normal">
          THIRD PARTY TRADEMARKS (www.bk.com)
        </div>
        <div className=" max-sm:text-center text-[36px] max-sm:text-[16px]  font-normal">
          USED WITH PERMISSION AND/OR UNDER LICENSE
        </div>
        <div>
          • © 2019 The Coca-Cola Company. COCA-COLA®, Diet Coke®, Coca-Cola®
          Zero Sugar, Sprite®, Mello-Yello®, Fanta®, Barq's® and MINUTE MAID®
          are registered trademarks of The Coca-Cola Company.• DR PEPPER® is a
          trademark of Dr Pepper/Seven UP, Inc.• ICEE® is a trademark of Icee of
          America, Inc.• CAPRI-SUN® and the Pouch Shape™ are licensed trademarks
          of the Capri Sun Group.• NESTLE®, NESTLE PURE LIFE are trademarks of
          Société des Produits Nestlé S.A.• HERSHEYS® is a trademark of Hershey
          Chocolate & Confectionery Corporation.• OREO is a trademark of
          Mondelēz International group, used under license.• TWIX® is a
          trademark of Mars, Incorporated.• MOTT’S® is a trademark of Mott's
          LLP.• UBEREATS® is a trademark of Uber Technologies, Inc.• IMPOSSIBLE
          is a trademark of Impossible Foods Inc.
        </div>
      </div>
    </>
  );
}
