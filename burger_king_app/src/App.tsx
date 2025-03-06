import { useState, useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import Router from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const [pathname, setPathname] = useState("");
  // const pathname = window.location.pathname;
  const provider = [
    "/privacy-policy",
    "/attributions",
    "/terms-conditions-rewards",
    "/diagnostics",
  ];

  const CheckProvider = provider.includes(pathname.toLowerCase());

  return (
    <BrowserRouter>
      <PathTracker setPathname={setPathname} />
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

function PathTracker({ setPathname }: { setPathname: (path: string) => void }) {
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname, setPathname]);

  return null; 
}
