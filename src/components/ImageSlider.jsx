import { useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {

        const isFirstSlide = (currentIndex === 0);
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = (currentIndex === slides.length-1);
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    }

    // CSS variable
    const primary = "#e9a401";

    const slideStyles = {
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
        transition: "all 100ms ease"
    }

    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer'
    }

    return (    
        <div className="slider">
            <div className="nav-arrow left">
                <ChevronLeftIcon className="arrow" onClick={goToPrevious}/>
            </div>
            <div className="nav-arrow right">
                <ChevronRightIcon className="arrow" onClick={goToNext}/>
            </div>
            <div style={slideStyles} className="slide"></div>
            <div className="slider-dots">
                {slides.map((slide, slideIndex) => {
                    return (
                        <div key={slideIndex} style={dotStyles}>
                            <HorizontalRuleIcon className={slideIndex === currentIndex ? "indicator active" : "indicator"} onClick={() => setCurrentIndex(slideIndex)}/> 
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ImageSlider;