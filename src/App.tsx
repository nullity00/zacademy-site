import HomePage from "./pages/Home";
import FellowshipsPage from "./pages/Fellowships";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navbar, MobileNavbar } from "./modules/Navbar";
import MembersPage from "./pages/Members";
import ContactPage from "./pages/Contact";
import ZblockPage from "./pages/Zblock";
import Zbloc2kPage from "./pages/Zblock2";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const pathName = useLocation();

  // This effect runs whenever the path name changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathName]);

  return null;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col bg-white text-black w-full font-default">
        {menuOpen ? (
          <MobileNavbar setMenuOpen={setMenuOpen} />
        ) : (
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fellowships" element={<FellowshipsPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/zBlock1" element={<ZblockPage />} />
          <Route path="/zBlock2" element={<Zbloc2kPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
