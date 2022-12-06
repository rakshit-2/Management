import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//routes call here

import Auth from "./components/templates/auth/index";
import Dashboard from "./components/templates/dashboard/index";
import Err from "./components/templates/err/index";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>

        <Route path="/err" element={<Err />}></Route>
        <Route path="*" element={<Navigate to="/err" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
