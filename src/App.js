import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "./Orders";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="orders" element= {<Orders />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
