import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import HomePage from "./Components/HomePage/HomePage";
import AllProducts from "./Components/Product/AllProducts"
import Footer from "./Components/Footer/Footer"
import Form from "./Components/Form/Form"
// import reportWebVitals from "./reportWebVitals";

//Nav Bar

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <HomePage/>
    <AllProducts/>
    <Footer/>
    <Form/>
    
  </React.StrictMode>,
);
// reportWebVitals();
