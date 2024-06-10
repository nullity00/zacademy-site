// src/App.tsx
import React from "react";
import ZBlock1Modules from "../modules/Zblock1/zBlock1";
import Footer from "../modules/Footer";

export default function ZblockPage() {
  return (
    <>
      <div className="p-8 my-16 lg:mx-32">
        <ZBlock1Modules />
      </div>
      <Footer />
    </>
  );
}
