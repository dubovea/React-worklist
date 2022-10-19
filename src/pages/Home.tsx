import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Table from "../components/Table";

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="content__top"></div>
      <Table />
    </div>
  );
};
export default Home;
