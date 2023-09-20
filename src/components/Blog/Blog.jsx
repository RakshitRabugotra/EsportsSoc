import "./Blog.css";
import ContactCard from "../ContactCard/ContactCard";

import contactImage1 from "../../assets/persons/rakshit.jpg";
import contactImage2 from "../../assets/persons/deepanshu.jpg";
import contactImage3 from "../../assets/persons/yashmit.jpg";
import contactImage4 from "../../assets/persons/virendra.jpg";
import contactImage5 from "../../assets/persons/varun.jpg";


const contacts = [
  {imageURL: contactImage1, personName: "Rakshit Rabugotra"},
  {imageURL: contactImage2, personName: "Deepanshu Saini"},
  {imageURL: contactImage3, personName: "Yashmit Sharma"},
  {imageURL: contactImage4, personName: "Virendra Lal"},
  {imageURL: contactImage5, personName: "Varun Gaur"},
]


const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-container__left-segment">
        <div className="content">
          <h1 style={{textAlign: "center"}}>About Us</h1>
        </div>
      </div>
  
      <div className="blog-container__right-segment">
        <div className="content">
          <h1>Our Team</h1>
          <div className="card-holder">
            {
              contacts.map((contact, index) => {
                return <ContactCard imageURL={contact.imageURL} personName={contact.personName} key={index}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
