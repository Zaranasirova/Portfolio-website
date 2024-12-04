import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopHeader from "./components/TopHeader";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <TopHeader />
     <main>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
     </main>
    </>
  );
};

export default App;
