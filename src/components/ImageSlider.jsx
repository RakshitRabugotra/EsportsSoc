import { useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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

    const sliderStyles = {
        height: "100%",
        position: "relative",
        marginTop: "12vh",
        padding: "10px 0px",
    }

    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
        transition: "all 100ms ease"
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '12px',
        color: '#fff',
        zIndex: 3,
        cursor: "pointer"
    }
    
    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '12px',
        color: '#fff',
        zIndex: 3,
        cursor: "pointer"
    }

    const dotContainerStyles = {
        display: 'flex',
        justifyContent: 'center'
    }
    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer'
    }

    return (    
        <div style={sliderStyles}>
            <div style={leftArrowStyles}>
                <ChevronLeftIcon style={{width: "100px", height: "100px"}} onClick={goToPrevious}/>
            </div>
            <div style={rightArrowStyles}>
                <ChevronRightIcon style={{width: "100px", height: "100px"}} onClick={goToNext}/>
            </div>
            <div style={slideStyles}></div>
            <div style={dotContainerStyles}>
                {slides.map((slide, slideIndex) => {
                    return (
                        <div key={slideIndex} style={dotStyles}>
                            <FiberManualRecordIcon style={{width: "20px", color: (slideIndex === currentIndex) ? "#e9a401" : "#fff"}} onClick={() => setCurrentIndex(slideIndex)}/> 
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ImageSlider;