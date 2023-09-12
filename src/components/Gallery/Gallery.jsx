import Img1 from "../../assets/img/1.jpg";
import Img2 from "../../assets/img/2.jpg";
import Img3 from "../../assets/img/3.jpg";
import Img4 from "../../assets/img/4.jpg";
import Img5 from "../../assets/img/5.jpg";
import Img6 from "../../assets/img/6.jpg";
import Img7 from "../../assets/img/7.jpg";
import Img8 from "../../assets/img/8.jpg";
import Img9 from "../../assets/img/9.jpg";
import Img10 from "../../assets/img/10.jpg";
import Img11 from "../../assets/img/11.jpg";
import Img12 from "../../assets/img/12.jpg";
import "./Gallery.css";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Heading from "../Heading/Heading";

let images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12];
images = images.map((item, index) => {
  return {
    id: index + 1,
    imgSrc: item,
  };
});

function Gallery(props) {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <h2 className="caption">Caption</h2>
        <img src={tempImgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>

      {props.title && (
        <Heading
          style={{ width: "100%", textAlign: "center", padding: "12px", fontSize: "78px" }}
        >
          {props.title}
        </Heading>
      )}

      <div className="gallery">
        {images.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
