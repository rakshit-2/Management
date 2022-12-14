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
import IssuedBooks from "./components/templates/issuedBook/index";
import Visitors from "./components/templates/visitors/index";
import ReturnedBook from "./components/templates/returnedBook/index";
import Profile from "./components/templates/profile/index";
import OverduBook from "./components/templates/overdueBook/index";
import ChangePassword from "./components/organisms/auth/ChangePassword";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChangePassword />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/issued-book" element={<IssuedBooks />}></Route>
        <Route path="/returned-book" element={<ReturnedBook />}></Route>
        <Route path="/visitors" element={<Visitors />}></Route>
        <Route path="/overdue-book" element={<OverduBook />}></Route>
        <Route path="/err" element={<Err />}></Route>
        <Route path="*" element={<Navigate to="/err" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
