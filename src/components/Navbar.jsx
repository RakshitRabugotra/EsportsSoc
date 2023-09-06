import '../Navbar.css';

function Navbar() {

    return (
        <div className="navigation">
            <nav>
                <ul className="nav-type">
                <li><a href="https://codepen.io/EneergeticTomy/" target="_blank" className="active">Home</a></li>
                <li><a href="https://codepen.io/TomikaBoy/full/LqMpaE" target="_blank" className="active1">About</a></li>
                <li><a href="https://codepen.io/" target="_blank" className="active2">Contact</a></li>
                <li><a href="https://w3schools.com/" target="_blank" className="active3">Support</a></li>
                <div className="line"></div>
                <li><a><i className="fa fa-search" onclick="show()">
                    </i></a></li>
                </ul>
            </nav>
        </div>
    );

}

export default Navbar;