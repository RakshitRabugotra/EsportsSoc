import "./Login.css";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import Heading from "../components/Heading/Heading";

const Login = () => {

    return (<>
    <div className="form-wrapper">
        <Heading>Register</Heading>
        
        <form className="form-wrapper__form" onSubmit={(e) => {e.preventDefault();}}>

            <label htmlFor="emailId"><EmailIcon/></label>
            <input type="email" name="emailId" placeholder="someone@example.com" required aria-label="email-id"/>

            <label htmlFor="username"><PersonIcon/></label>
            <input type="text" name="username" placeholder="Your Name" required aria-label="user-name"/>

            <label htmlFor="passwd"><KeyIcon/></label>
            <input type="password" name="passwd" minlength="8" placeholder="Password" required aria-label="user-name"/>

            {/* <input type="submit" className="submit"/> */}
        </form>
    </div>
    </>);
}

export default Login;