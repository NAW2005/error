import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Addtocart from "./components/Addtocart";
import Search from "./components/Search";
import Routegaurd from "./components/Routegaurd";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/addtocart' element={<Addtocart />} />
        <Route
          path='/search'
          element={
            <Routegaurd>
              <Search />
            </Routegaurd>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
