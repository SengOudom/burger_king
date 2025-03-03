import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const pathname = window.location.pathname;
  const provider = ["/privacy-policy"];
  const CheckProvider = provider.includes(pathname);

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen w-full">
        {!CheckProvider && <Header />}
        <div className="overflow-auto">
          <Router />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
