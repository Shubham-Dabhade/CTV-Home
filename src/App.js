import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route, Redirect,Navigate
} from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import OurPromise from "./pages/OurPromise/OurPromise";


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/ourpromise" element={<OurPromise/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
