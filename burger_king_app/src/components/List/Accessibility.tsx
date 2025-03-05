import { Link } from "react-router-dom";

export default function Accessibility() {
  return (
    <>
      <div className="bg-[#502314] leading-none max-lg:p-5 p-9">
        <h1 className="container mx-auto text-[96px] max-lg:text-[48px] text-[#f5ebdc] Flame_Regular text-center">
          Accessibility
        </h1>
      </div>
      <div className="container mx-auto h-auto text-[16px] Flame_RegularSans font-medium leading-1 px-1 pb-12">
        <div className="py-3">
          Burger King is committed to making its website usable by all people,
          including those with disabilities by meeting or exceeding the
          requirements of the Web Content Accessibility Guidelines 2.1 Level
          A/AA (WCAG 2.1 A/AA).We strive to make our site an equal experience
          for everyone.
        </div>
        <div className="py-3">
          We continue to monitor our site and make sure that all content
          provided is accessible to all visitors.In order to help us in this
          process, we have engaged{" "}
          <Link to="https://www.boia.org/" className="text-[#d62300]">
            The Bureau of Internet Accessibility
          </Link>
          , an accessibility consulting company, to conduct a full accessibility
          audit consisting of both automated and manual testing of our website
          using BoIA’s A11Y® platform which provides us with specific
          recommendations that will assist us in ensuring that our Web presence
          is in conformance with the WCAG 2.1 A/AA.
        </div>
        <div className="py-3 Flame_Regular font-medium">Disclaimer</div>
        <div className="py-3">
          It is important to note that efforts to the website are ongoing as we
          work to implement the relevant improvements to meet WCAG 2.1 A/AA
          guidelines over time.
        </div>
        <div className="py-3">Our Commitment to Help</div>
        <div className="py-3">
          We are dedicated to meeting all of your accessibility needs. Should
          you have specific questions or concerns about the accessibility of
          this site or need assistance in using the processes found within this
          site, we have trained individuals here at Burger King to assist you.
        </div>
        <div className="py-3">
          Please contact us at{" "}
          <Link to="support" className="text-[#d62300]">
            bk.com/support
          </Link>{" "}
          and be sure to specify the web page so we can look into making that
          page accessible for you. We greatly value your questions and comments.
        </div>
        <div className="py-3">Third Party Applications</div>
        <div className="py-3">
          While you are visiting our site, you will notice that we make use of
          third-party sites such as Instagram, Facebook, YouTube, Twitter, and
          Google Maps to provide information about Burger King.Though
          individuals may have challenges with access to these particular sites,
          Burger Kingdoes not control or remedy the way content is portrayed.
        </div>
      </div>
    </>
  );
}
