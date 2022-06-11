import './navbar.css'
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = ({ setLoggedIn}) => {

  function logoutHandler(e){
    e.preventDefault();
    //make a popup to confirm logout
    setLoggedIn(false);

  }

  return (
    <div className="navbar">
    <div className="brand-title">Journify</div>
    <div class="navbar-links">
      <ul>
        <li><a title="Home"><HomeIcon /></a></li>
        <li><a title="Profile"><PersonIcon/></a></li>
        <li><a title="Contact Us"><CallIcon/></a></li>
        <li><a title="Support Us"><HandshakeIcon/></a></li>

        <li onClick={logoutHandler}><a title="Logout"><LogoutIcon/></a></li>


      </ul>
    </div>
    {/* <div className='navbar'>
      <button id="logout-btn" onClick={logoutHandler} >Logout</button>
    </div> */}
    </div>
   );
}

export default Navbar;