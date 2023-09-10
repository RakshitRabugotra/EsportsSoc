import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import ImageSlider from "./components/ImageSlider";
import ContactUs from "./components/ContactUs/ContactUs"

import csgoImage from "./assets/games/csgo.jpg";
import fallguysImage from "./assets/games/fallguys.jpg";
import fifa22Image from "./assets/games/fifa22.jpg";
import forzaImage from "./assets/games/forza.jpg";
import valorantImage from "./assets/games/valorant.jpg";
import tekkenImage from "./assets/games/tekken7.jpg";

const slides = [
  {url: csgoImage, title: 'csgo'},
  {url: fallguysImage, title: 'fallguys'},
  {url: fifa22Image, title: 'fifa22'},
  {url: forzaImage, title: 'forza'},
  {url: valorantImage, title: 'valorant'},
  {url: tekkenImage, title: 'tekken'}
];

function App() {
  return (
    <div>
    <div className="wrapper">

      <Navbar/>

      <ImageSlider slides={slides}/>
        
      <div className="content">
        <Gallery title="Gallery" />
      </div>
    </div>
      <ContactUs/>
    </div>
  );
}

export default App;
