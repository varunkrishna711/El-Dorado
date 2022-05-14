import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ user }) => {
  const show = () => {
    const dis = document.querySelector(".profile-info");
    dis.style.display = "block";
  };

  const hide = () => {
    const dis = document.querySelector(".profile-info");
    dis.style.display = "none";
  };
    
  const [isScrolled, setIsScrolled] = useState(false);

<<<<<<< HEAD
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };
    
  return (
    <div className={isScrolled ? "header scrolled" : "header"}>
      <h2>
        <a href="/" className="header_logo">
          NATIKA
        </a>
      </h2>

      <div className="header_nav">
        <a href="/" className="header_option">
          HOME
        </a>
        <a href="/book" className="header_option">
          SHOWS
        </a>
        <a href="/competitions" className="header_option">
          COMPETITIONS
        </a>
        <a href="/" className="header_option">
          LEARN
        </a>
        <div className="profile" onMouseEnter={show}>
          <img
            className="profile-image"
            src="https://imgs.search.brave.com/RvhPxGLIDyMWFDZ30YAFCIs0pvywQ_SANuu4g1HOV2k/rs:fit:481:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/UkdwZ0liZHNuanpr/YWRDQTM0MDJBSGFI/VCZwaWQ9QXBp"
            alt="profile"
          />
          <div className="profile-info" onMouseLeave={hide}>
            <div className="pro-button1 pro">
              <a href="/profile">Profile</a>
            </div>
            <div className="pro-button2 pro">
              <a href="/login">{user.loggedIn ? "Logout" : "Login"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// =======
//     // const [{basket, user}, dispatch] = useStateValue();

//     const handleHover = () => {
//         const dis = document.querySelector('.profile-info');
//         if(dis.style.display === 'none'){
//             dis.style.display = 'block';
//         }
//         else {
//             dis.style.display = 'none';
//         }
//     }

//     return ( 
//         <>
//             <link href="https://fonts.googleapis.com/css?family=Bungee+Inline" rel="stylesheet"></link>
//             <div className="header">
//                     <h2><a href='/' className='header_logo'>NATIKA</a></h2>

//                 <div className="header_nav">
//                             <a href='/' className="header_option" >HOME</a>
//                             <a href='/book' className="header_option">SHOWS</a>
//                             <a href='/competitions' className="header_option">COMPETITIONS</a>
//                             <a href='/' className="header_option">LEARN</a>
//                             <a href='/archives' className="header_option">ARCHIVES</a>
//                             <div className='profile' onClick={handleHover}>
//                                 <img className='profile-image' src = "https://imgs.search.brave.com/RvhPxGLIDyMWFDZ30YAFCIs0pvywQ_SANuu4g1HOV2k/rs:fit:481:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/UkdwZ0liZHNuanpr/YWRDQTM0MDJBSGFI/VCZwaWQ9QXBp" alt = "profile" />
//                                 <div className='profile-info' >
//                                     <button className='pro-button1'><a href='/profile' >Profile</a></button>
//                                     <button className='pro-button2'><a href='/login'>Login</a></button>
//                                 </div>
//                             </div>

//                 </div>
//             </div>
//         </>
//      );
// }
 
// export default Header;
// >>>>>>> 023ee37f1b01d4455a3d216b25e07db58e1b8cf6

export default Header;
