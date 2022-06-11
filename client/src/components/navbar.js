import './navbar.css'

const Navbar = ({ setLoggedIn}) => {

  function logoutHandler(e){
    e.preventDefault();
    //make a popup to confirm logout
    setLoggedIn(false);

  }

  return (
    <div className='navbar'>
      <button id="logout-btn" onClick={logoutHandler} >Logout</button>
    </div>
   );
}

export default Navbar;