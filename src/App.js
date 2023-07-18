import "./App.css"
import AboutUs from "./components/Home/AboutUs/AboutUs";
import Carousel from "./components/Home/Carousel/Carousel";
import InfoBlock1 from "./components/Home/InfoBlock1/InfoBlock1";
import InfoBlock2 from "./components/Home/InfoBlock2/InfoBlock2";
import OtherBrands from "./components/Home/OtherBrands/OtherBrands";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <InfoBlock1/>
      <InfoBlock2/>
      <AboutUs/>
      <OtherBrands/>
    </div>
  );
}

export default App;
