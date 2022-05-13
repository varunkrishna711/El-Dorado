import "./Footer.scss";  
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faInstagram,
//   faLinkedinIn,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Facebook ,Instagram,Twitter} from "@mui/icons-material";
// import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      <div className="container">
        <div className="list-container">
          <div className="title">
              <h1 className="companyname">Natika</h1>
            <div className="address">
              <a href="tel:+919747121112" className="phno">
                  {/* <FontAwesomeIcon icon={faPhoneAlt} /> 9747121112{" "} */}
                  1234567890
              
              </a>

              <p>
                Natika <br />
                Bal Chand Lane, <br />
                Allahabad <br />
                India <br />
                689 110 (India) <br /> <br />
                
              </p>
            </div>
          </div>
          <div className="details">
            <ul className="list-footer">
              <li className="">
                <a href="/">About</a        >
              </li>
              <li className="">
                <Link to="/">Contact us</Link>
              </li>
              <li className="">
                <Link to="/"> How it works </Link>
              </li>
            </ul>
          </div>
          <div className="socialmedia">
            <ul className="icons-footer">
              <li className="" style={{ color: "#1a73e8" }}>
                  <Facebook/>
                <a target="_blank" rel="noreferrer" href="https://facebook.com">
                  {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                  Facebook
                </a>
              </li>
              <li className="" style={{ color: "#b0487b" }}>
              <Instagram/>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com"
                >
                  {/* <FontAwesomeIcon icon={faInstagram} /> */}
                    Instagram
                </a>
              </li>
              <li className="" style={{ color: "#4ea6e8" }}>
              <Twitter/>
                <a target="_blank" rel="noreferrer" href="https://twitter.com">
                  {/* <FontAwesomeIcon icon={faTwitter} /> */}
                  Twitter
                </a>
              </li>
              <li className="" style={{ color: "#2874b0" }}>
                <a target="_blank" rel="noreferrer" href="https://linkedin.com">
                    {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
