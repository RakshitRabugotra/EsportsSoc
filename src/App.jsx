import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import CardCarousel from "./components/CardCarousel";
import Card from "./components/Card";

import csgoImage from "./assets/csgo.png";
import fallguysImage from "./assets/fallguys.png";
import fifa22Image from "./assets/fifa22.png";
import forzaImage from "./assets/forza.png";
import valorantImage from "./assets/valorant.png";
import tekkenImage from "./assets/tekken.png";

const imgs = [
  csgoImage,
  fallguysImage,
  fifa22Image,
  forzaImage,
  valorantImage,
  tekkenImage,
];

function App() {
  return (
    <div className="wrapper">
      {/* <Navbar/> */}

      <CardCarousel>
        {
          imgs.map((item, index) => {
            return <Card img={item} key={index}/>
          })
        }
      </CardCarousel>

      <div className="content">
        <Gallery title="Gallery" />
      </div>
    </div>
  );
}

export default App;
