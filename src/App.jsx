import "./App.css";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import ImageSlider from "./components/ImageSlider/ImageSlider";

import codmImage from "./assets/games/codm.jpg";
import csgoImage from "./assets/games/csgo.jpg";
import fallguysImage from "./assets/games/fallguys.jpg";
import fifa22Image from "./assets/games/fifa22.jpg";
import forzaImage from "./assets/games/forza.jpg";
import rocketLeagueImage from "./assets/games/rocket-league.jpg"
import tekkenImage from "./assets/games/tekken7.jpg";
import valorantImage from "./assets/games/valorant.jpg";

const slides = [
  {url: codmImage, title: 'CODM'},
  {url: csgoImage, title: 'csgo'},
  {url: fallguysImage, title: 'fallguys'},
  {url: fifa22Image, title: 'fifa22'},
  {url: forzaImage, title: 'forza'},
  {url: rocketLeagueImage, title: 'Rocket League'},
  {url: tekkenImage, title: 'tekken'},
  {url: valorantImage, title: 'valorant'},
];

function App() {

  const imageScrollIntervalMilliseconds = 5000;

  return (
    <div className="wrapper">

      <Navbar/>

      <ImageSlider slides={slides} scrollInterval={imageScrollIntervalMilliseconds}/>
        
      <div className="content" id="gallery-container">
        <Gallery title="Gallery" />
      </div>
    </div>
  );
}

export default App;
