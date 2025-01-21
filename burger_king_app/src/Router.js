import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Account from "./components/List/Account";
import AboutBk from "./components/List/AboutBk";
import OfferTerms from "./components/List/OfferTerms";
import NutritionExpolrer from "./components/List/NutritionExpolrer";
import DeliveryTerms from "./components/List/DeliveryTerms";
import FranchiseBk from "./components/List/FranchiseBk";

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
    </Routes>
  );
}
