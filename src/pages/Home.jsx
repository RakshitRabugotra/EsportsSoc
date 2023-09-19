import Navbar from "../components/Navbar/Navbar";
import Gallery from "../components/Gallery/Gallery";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import ContactUs from "../components/ContactUs/ContactUs"
import Blog from "../components/Blog/Blog";

import codmImage from "../assets/games/codm.jpg";
import csgoImage from "../assets/games/csgo.jpg";
import fallguysImage from "../assets/games/fallguys.jpg";
import fifa22Image from "../assets/games/fifa22.jpg";
import nbaImage from "../assets/games/nba2k.jpg";
import forzaImage from "../assets/games/forza.jpg";
import rocketLeagueImage from "../assets/games/rocket-league.jpg"
import tekkenImage from "../assets/games/tekken7.jpg";
import valorantImage from "../assets/games/valorant.jpg";


const slides = [
  {url: codmImage, title: 'CODM'},
  {url: csgoImage, title: 'csgo'},
  {url: fallguysImage, title: 'fallguys'},
  {url: fifa22Image, title: 'fifa22'},
  {url: nbaImage, title: 'NBA2K'},
  {url: forzaImage, title: 'forza'},
  {url: rocketLeagueImage, title: 'Rocket League'},
  {url: tekkenImage, title: 'tekken'},
  {url: valorantImage, title: 'valorant'},
];


const Home = () => {
    const imageScrollIntervalMilliseconds = 5000;

    return (
        <>
          {/* Header section */}
          <Navbar registerURL="login"/>
    
          {/* Main section */}
          <main>
            <section id="image-slider" className="image-slider-section">
              <ImageSlider slides={slides} scrollInterval={imageScrollIntervalMilliseconds}/>
            </section>
            
            <section id="blog" className="blog-section">

            </section>
              
            <section id="gallery" className="gallery-section">
              <Gallery title="Gallery"/>
            </section>

          </main>
        
          {/* Footer section */}
          <ContactUs/>
        </>
    );
}

export default Home;