import { Link } from "react-router-dom";

export default function UnsolicitedIdeaPolicy() {
  return (
    <>
      <div className="bg-[#502314] leading-none max-lg:p-5 p-9">
        <h1 className="container mx-auto text-[96px] max-lg:text-[48px] text-[#f5ebdc] Flame_Regular text-center">
          Unsolicited Idea Policy
        </h1>
      </div>
      <div className="container mx-auto h-auto text-[16px] Flame_RegularSans font-medium leading-1 px-1 pb-12">
        <div className="py-3">
          In order to avoid misunderstandings regarding the ownership of ideas
          or suggestions, it is Burger King's policy not to review any
          unsolicited ideas, proposals, or submissions, including, without
          limitation, those related to products, services, technologies,
          marketing strategy, advertising campaigns, promotions, processes, or
          operational improvements. We appreciate your interest in presenting us
          ideas, but our staff already extends much effort toward the
          development and implementation of new services, products, techniques,
          and equipment.
        </div>
        <div className="py-3 Flame_Regular font-medium">Guest Feedback</div>
        <div className="py-3">
          Burger King does, however, encourages feedback from guests regarding
          Burger King’s existing business. If you do wish to submit feedback
          about your experience at a Burger King restaurant or use of the BK
          mobile app or website, please do so by visiting bk.com/support or
          replying to the feedback email sent to your account’s registered email
          address.
        </div>
        <div className="py-3">
          By submitting your feedback, you agree that Burger King may use your
          feedback for any purpose and in any way, including but not limited to
          using it to improve or develop current or new Burger King products,
          services, or technologies. Your feedback will automatically become the
          property of Burger King Corporation, without any compensation to you.
          Please note that while we value your feedback, we have no obligation
          to respond to you in any way or to keep your feedback confidential.
        </div>
        <div className="py-3">Burger King <Link to="/terms-of-service" className="text-[#d62300]">Terms of Service</Link> apply.</div>
        <div className="py-3">To contact Burger King <Link to="/contact-us" className="text-[#d62300]">here</Link>.</div>
        <div className="py-3">
          BKC reserves the right to update these terms at any time.
        </div>
      </div>
    </>
  );
}
