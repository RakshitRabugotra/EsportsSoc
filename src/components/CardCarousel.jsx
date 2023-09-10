import "./CardCarousel.css";

function CardCarousel({ children }) {
  return (
    <div className="container">
        <div className="scroll-box">
            {children}
        </div>
    </div>
  );
}

export default CardCarousel;
