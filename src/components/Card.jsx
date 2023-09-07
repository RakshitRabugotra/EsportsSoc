import "./Card.css";
import placeholder from "../assets/placeholder.png";
import csgoImage from "../assets/csgo.png";
import valorantImage from "../assets/valorant.png"
import fallguysImage from "../assets/fallguys.png";
import fifa22Image from "../assets/fifa22.png";
import forzaImage from "../assets/forza.png";

function Card() {
  return (
    <div className="container">
      <div className="item item1"><img src={csgoImage} alt="" /></div>
      <div className="item item2"><img src={valorantImage} alt="" /></div>
      <div className="item item3"><img src={fallguysImage} alt="" /></div>
      <div className="item item4"><img src={fifa22Image} alt="" /></div>
      <div className="item item5"><img src={forzaImage} alt="" /></div>
      
    </div>
  );
}

export default Card;
