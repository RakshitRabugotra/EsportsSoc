import "./Card.css";
import "./Cards.scss";
import placeholder from "../assets/placeholder.png";
import csgoImage from "../assets/csgo.png";
import valorantImage from "../assets/valorant.png"
import fallguysImage from "../assets/fallguys.png";
import fifa22Image from "../assets/fifa22.png";
import forzaImage from "../assets/forza.png";

function Card() {
  return (
    <div class="wrapper">

  <section id="section1">
    <a href="#section3" class="arrow__btn left-arrow">‹</a>
    <div class="item">
      <a href="#">
        <img
          src={valorantImage}
          alt="Describe Image"></img>

          <h1 class="heading">Heading One</h1>
          <p class="duration">Duration: 10 min</p>
      </a>
    </div>
    <div class="item">

      <a href="#">
      <img
        src={fallguysImage}
        alt="Describe Image"></img>
        
        <h1 class="heading">Heading One</h1>
        <p class="duration">Duration: 10 min</p>
        
      </a>
    </div>
    <div class="item">
      
      <a href="#">
      <img
        src={fallguysImage}
        alt="Describe Image"></img>
        <h1 class="heading">Heading One</h1>
        <p class="duration">Duration: 10 min</p>
      </a>
    </div>
    <div class="item">
      <a href="#">
      <img
        src={csgoImage}
        alt="Describe Image"></img>
        
        <h1 class="heading">Heading One</h1>
        <p class="duration">Duration: 10 min</p>
      </a>
    </div>
    <div class="item">
      <a href="#">
      <img
        src={fifa22Image}
        alt="Describe Image"></img>
        <h1 class="heading">Heading One</h1>
        <p class="duration">Duration: 10 min</p>
        </a>
    </div>
    <a href="#section2" class="arrow__btn right-arrow">›</a>
  </section>

  <section id="section2">
    <a href="#section1" class="arrow__btn left-arrow">‹</a>
    <div class="item">
      <img
        src={forzaImage}
        alt="Describe Image"></img>
    </div>
    <div class="item">
      <img
        src={fallguysImage}
        alt="Describe Image"></img>
    </div>
    <div class="item">
      <img
        src={fallguysImage}
        alt="Describe Image"></img>
    </div>
    <div class="item">
      <img
        src={fallguysImage}
        alt="Describe Image"></img>
    </div>
    <div class="item">
      <img
        src={fallguysImage}
        alt="Describe Image"></img>
    </div>
    


    <a href="#section1" class="arrow__btn right-arrow">›</a>
  </section>
</div>
  );
}

export default Card;
