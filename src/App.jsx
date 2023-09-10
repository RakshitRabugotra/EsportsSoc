import "./App.css";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import ImageSlider from "./components/ImageSlider/ImageSlider";

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
    <div className="wrapper">

      <Navbar/>

      <ImageSlider slides={slides}/>
        
      <div className="content" id="gallery-container">
        <Gallery title="Gallery" />
      </div>
    </div>
  );
}

export default App;
