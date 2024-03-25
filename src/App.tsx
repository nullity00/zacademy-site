import HomePage from "./pages/Home";
import FellowshipsPage from "./pages/Fellowships";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navbar, MobileNavbar } from "./modules/Navbar";
import MembersPage from "./pages/Members";
import ContactPage from "./pages/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
