import "./Heading.css";

const Heading = ({children}) => {
    return (
        <div className="styled-heading">
            <h1>{children}</h1>
        </div>
    );
}

export default Heading;
