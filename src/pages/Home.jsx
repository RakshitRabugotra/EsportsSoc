import Navbar from "../components/Navbar/Navbar";
import Gallery from "../components/Gallery/Gallery";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import ContactUs from "../components/ContactUs/ContactUs"

import codmImage from "../assets/games/codm.jpg";
import csgoImage from "../assets/games/csgo.jpg";
import fallguysImage from "../assets/games/fallguys.jpg";
import fifa22Image from "../assets/games/fifa22.jpg";
import forzaImage from "../assets/games/forza.jpg";
import rocketLeagueImage from "../assets/games/rocket-league.jpg"
import tekkenImage from "../assets/games/tekken7.jpg";
import valorantImage from "../assets/games/valorant.jpg";

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


const Home = () => {
    const imageScrollIntervalMilliseconds = 5000;

    return (
        <>
          <Navbar registerURL="login"/>
    
          <ImageSlider slides={slides} scrollInterval={imageScrollIntervalMilliseconds}/>
            
          <div className="content" id="gallery-container">
            <Gallery title="Gallery" />
          </div>
        
          <ContactUs/>
        </>
    );
}

export default Home;