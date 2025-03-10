import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Account from "./components/List/Account";
import AboutBk from "./components/List/AboutBk";
import OfferTerms from "./components/List/OfferTerms";
import NutritionExpolrer from "./components/List/NutritionExpolrer";
import DeliveryTerms from "./components/List/DeliveryTerms";
import FranchiseBk from "./components/List/FranchiseBk";
import Faq from "./components/List/Faq";
import CrownCardFaq from "./components/List/CrownCardFaq";
import TermsOfService from "./components/List/TermsOfService";
import MobileOrderTerms from "./components/List/MobileOrderTerms";
import PrivacyPolicy from "./components/List/PrivacyPolicy";
import Trademarks from "./components/List/Trademarks";
import Accessibility from "./components/List/Accessibility";
import UnsolicitedIdeaPolicy from "./components/List/UnsolicitedIdeaPolicy";
import Attributions from "./components/List/Attributions";
import TermsConditionsRewards from "./components/List/TermsConditionsRewards";
import Diagnostics from "./components/List/Diagnostics";

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<>Not Found</>} />
      <Route path="/" element={<Main />} />
      <Route path="/account" element={<Account />} />
      <Route path="/about-bk" element={<AboutBk />} />
      <Route path="/franchise" element={<FranchiseBk />} />
      <Route path="/nutrition-explorer" element={<NutritionExpolrer />} />
      <Route path="/terms" element={<OfferTerms />} />
      <Route path="/delivery-terms" element={<DeliveryTerms />} />
      <Route path="/support" element={<>support</>} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/crown-card-faq" element={<CrownCardFaq />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/mobile-order-terms" element={<MobileOrderTerms />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/trademarks" element={<Trademarks />} />
      <Route path="/accessibility" element={<Accessibility />} />
      <Route path="/unsolicited-idea-policy" element={<UnsolicitedIdeaPolicy />} />
      <Route path="/attributions" element={<Attributions />} />  
      <Route path="/terms-conditions-rewards" element={<TermsConditionsRewards />} />  
      <Route path="/diagnostics" element={<Diagnostics />} />  
    </Routes>
  );
}
