import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout/Layout";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Layout />, wrapper) : false;