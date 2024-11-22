import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopHeader from "./components/TopHeader";

const App = () => {
  return (
    <>
      <TopHeader />
     <main>
     <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
     </main>
    </>
  );
};

export default App;
