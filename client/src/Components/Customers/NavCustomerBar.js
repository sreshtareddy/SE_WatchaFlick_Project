import React, { useState, useEffect } from 'react';
import { Button } from '../Common/Button';
import { Link } from 'react-router-dom';
import './CustomerHeader.css';
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";

function NavCustomerBar() {
    const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            WatchaFlick <span> &nbsp;&nbsp;    </span>
          
          <img src="images/logo.png" alt="logo" width={50} height={40} />
          </Link>
         
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
          
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
                </Link>
            </li>
            </div>
          </ul>
          {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
          
        </div>
      </nav>
   </>
  )
}

export default NavCustomerBar