import './Header.css';
// import SearchIcon from '@material-ui/icons/Search';
// import ManageAccountsIcon from '@material-ui/icons/ManageAccounts';
import {Link} from 'react-router-dom';
// import { useStateValue } from "./StateProvider";


const Header = () => {

    // const [{basket, user}, dispatch] = useStateValue();

    const handleHover = () => {
        const dis = document.querySelector('.profile-info');
        if(dis.style.display === 'none'){
            dis.style.display = 'block';
        }
        else {
            dis.style.display = 'none';
        }
    }

    return ( 
        <div className="header">

                {/* <img className="header_logo" src="https://images-platform.99static.com//y9RHgjeD3dw1zFBSUhTmRkvoCs4=/298x1136:946x1784/fit-in/500x500/99designs-contests-attachments/135/135086/attachment_135086423" alt="logo" /> */}
                <h2><a href='/' className='header_logo'>NATIKA</a></h2>
            {/* <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon" />
            </div> */}

            <div className="header_nav">
                {/* <Link to={"/login"}> */}
                    {/* <div className="header_options"> */}
                        <a href='/' className="header_option" >HOME</a>
                        <a href='/book' className="header_option">SHOWS</a>
                        <a href='/competitions' className="header_option">COMPETITIONS</a>
                        <a href='/' className="header_option">LEARN</a>
                    {/* </div> */}
                         <div className='profile' onClick={handleHover}>
                            <img className='profile-image' src = "https://imgs.search.brave.com/RvhPxGLIDyMWFDZ30YAFCIs0pvywQ_SANuu4g1HOV2k/rs:fit:481:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/UkdwZ0liZHNuanpr/YWRDQTM0MDJBSGFI/VCZwaWQ9QXBp" alt = "profile" />
                            <div className='profile-info' >
                                <button className='pro-button1'><a href='/profile' >Profile</a></button>
                                <button className='pro-button2'><a href='/login'>Login</a></button>
                            </div>
                         </div>

            </div>
        </div>
     );
}
 
export default Header;

