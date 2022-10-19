import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Loadable from "react-loadable";
import "./App.css";
import "./scss/app.scss";

const App: React.FC = () => (
  <div className="wrapper">
    <Header />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={<Suspense fallback={<h1>Идёт загрузка...</h1>}></Suspense>}
        />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  </div>
);

export default App;
