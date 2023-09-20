import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./ContactCard.css";

const ContactCard = (props) => {
  
  return (
    <div className="contact-card">
      <img src={props.imageURL} alt={props.personName} />
      <div className="contact-card__info">
        <h3 style={{
            textAlign: "center",
            textTransform: "uppercase"
        }}>{props.personName}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InstagramIcon className="social" />
          <TwitterIcon className="social" />
          <LinkedInIcon className="social" />
          <GitHubIcon className="social" />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
