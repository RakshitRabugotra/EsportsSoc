import "./Login.css";
import Heading from "../components/Heading/Heading";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    return (<>
    <div className="form-wrapper">
        <div className="back-btn" onClick={() => {navigate("/")}}>
            <ArrowBackIcon/>
        </div>
        
        <Heading>Register</Heading>

        <form className="form-wrapper__form" onSubmit={(e) => {e.preventDefault();}}>

            <label htmlFor="emailId"><EmailIcon/></label>
            <input type="email" name="emailId" placeholder="someone@example.com" required aria-label="email-id"/>

            <label htmlFor="username"><PersonIcon/></label>
            <input type="text" name="username" placeholder="Your Name" required aria-label="user-name"/>

            <label htmlFor="passwd"><KeyIcon/></label>
            <input type="password" name="passwd" minLength={8} placeholder="Password" required aria-label="user-name"/>

            <label></label>
            <button type="submit" className="submit-btn"><span>Let's Go</span></button>
        </form>
    </div>
    </>);
}

export default Login;