import { BrowserRouter as Router, Routes, Route, Link, Form } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import AllProducts from "./Components/Product/AllProducts"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <Router>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Products"> All Products</Link>
          </li>
          <li>
            <Link to="/Contact"> Contact Us</Link>
          </li>
        </ul>

        <hr />

        {/*
        A <Routes> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Routes> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AllProducts />} />
            <Route path="/contact" element={<Form />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
