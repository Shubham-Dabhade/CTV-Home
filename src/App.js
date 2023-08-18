import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route, Redirect,Navigate
} from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import OurPromise from "./pages/OurPromise/OurPromise";
import Navbar from "./components/Navbar/Navbar";
import Solutions from "./pages/Solutions/Solutions";
import OurEdge from "./pages/OurEdge/OurEdge";
import OurBrands from "./pages/OurBrands/OurBrands";
import ContactUs from "./pages/ContactUs/ContactUs";


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/ourpromise" element={<OurPromise/>} />
        <Route path="/solutions" element={<Solutions/>} />
        <Route path="/ouredge" element={<OurEdge/>} />
        <Route path="/ourbrands" element={<OurBrands/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
