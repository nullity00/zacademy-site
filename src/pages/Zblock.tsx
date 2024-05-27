// src/App.tsx
import React from 'react';
import Module1 from '../modules/Zblock1/Module1';
import Module2 from '../modules/Zblock1/Module2';
import Module3 from '../modules/Zblock1/Module3';
import Footer from '../modules/Footer';



export default function ZblockPage() {
  return (
    <>
      <div className="p-8">
        <Module1 />
        <Module2 />
        <Module3 />
      </div>
      <Footer />
    </>
  );
};


