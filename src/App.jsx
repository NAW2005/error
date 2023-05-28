import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Addtocart from "./components/Addtocart";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/addtocart' element={<Addtocart />} />
      </Routes>
    </div>
  );
};

export default App;
