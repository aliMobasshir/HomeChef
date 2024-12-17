<<<<<<< HEAD
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from './chef 1.svg'
import img2 from './HomeChef.svg'
import Search from './Search.jsx'
import Style from './Navigation.module.css'
import hamburger from './Hamburger.svg'
import xmark from './xmark.svg'

const Navigation = ({ setQuery }) => {
  // State to control the visibility of the menu
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isSearchOpen, setSearchOpen] = useState(false)
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from './chef 1.svg';
import img2 from './HomeChef.svg';
import Search from './Search.jsx';
import Style from './Navigation.module.css';
import hamburger from './Hamburger.svg';
import xmark from './xmark.svg';

const Navigation = ({ setQuery }) => {
  // State for menu toggle and search visibility
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
>>>>>>> mobasshir

  // Scroll visibility state
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle function for menu visibility
  const handler = () => {
<<<<<<< HEAD
    setMenuOpen(prev => !prev) // Toggle the menu visibility
  }

=======
    setMenuOpen((prev) => !prev);
  };

  // Handle scroll event to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsVisible(true); // Always show navbar at top
      } else if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

>>>>>>> mobasshir
  return (
    <div className={`${Style.navigationContainer} ${isVisible ? Style.visible : Style.hidden}`}>
      <nav className={Style.navigation}>
        <ul className={Style.navigationList}>
          <li className={Style.navigationItem}>
            <img src={img1} alt='Icon Image' className={Style.navigationIcon} />
<<<<<<< HEAD
            <img
              src={img2}
              alt='HomeChef Image'
              className={Style.navigationBrandImage}
            />
=======
            <img src={img2} alt='HomeChef Image' className={Style.navigationBrandImage} />
>>>>>>> mobasshir
          </li>

          <li className={Style.navigationItem}>
            <Search setSearchOpen={setSearchOpen} setQuery={setQuery} />
          </li>

<<<<<<< HEAD
          {/* <li>
            <img onClick={handler} className={Style.hamburger} src={hamburger} alt="Click Here" />
          </li> */}

=======
>>>>>>> mobasshir
          {!isSearchOpen && (
            <img
              onClick={handler}
              className={Style.hamburger}
              src={hamburger}
              alt='Click Here'
            />
          )}

<<<<<<< HEAD
          {/* Links that should show when the menu is open */}
          <li className={Style.navigationItem}>
            <Link to='/' className={Style.navigationLink}>
              Home
            </Link>
=======
          <li className={Style.navigationItem}>
            <Link to='/' className={Style.navigationLink}>Home</Link>
>>>>>>> mobasshir
          </li>
          <li className={Style.navigationItem}>
<<<<<<< HEAD
            <Link to='/about' className={Style.navigationLink}>
              About
            </Link>
=======
            <Link to='/about' className={Style.navigationLink}>About</Link>
>>>>>>> mobasshir
          </li>
          <li className={Style.navigationItem}>
<<<<<<< HEAD
            <Link to='/contact' className={Style.navigationLink}>
              Contact
            </Link>
=======
            <Link to='/contact' className={Style.navigationLink}>Contact</Link>
>>>>>>> mobasshir
          </li>

          {/* Conditional Menu Content */}
          {isMenuOpen && (
            <div className={Style.menuContainer}>
              <img
                onClick={handler}
                className={Style.xmarkImage}
                src={xmark}
<<<<<<< HEAD
                alt=''
              />
              <Link to='/' className={Style.menuItem}>
                Home
              </Link>
              <Link to='/about' className={Style.menuItem}>
                About
              </Link>
              <Link to='/contact' className={Style.menuItem}>
                Contact
              </Link>
              <Link to='/SignUp' className={Style.menuItem}>
                Sign Up
              </Link>
              <Link to='/SignIn' className={Style.menuItem}>
                Sign In
              </Link>
              <Link to='/services' className={Style.menuItem}>
                Services
              </Link>
=======
                alt='Close Menu'
              />
              <Link to='/' className={Style.menuItem}>Home</Link>
              <Link to='/about' className={Style.menuItem}>About</Link>
              <Link to='/contact' className={Style.menuItem}>Contact</Link>
              <Link to='/SignUp' className={Style.menuItem}>Sign Up</Link>
              <Link to='/SignIn' className={Style.menuItem}>Sign In</Link>
              <Link to='/services' className={Style.menuItem}>Services</Link>
>>>>>>> mobasshir
            </div>
          )}
        </ul>
      </nav>
    </div>
<<<<<<< HEAD
  )
}

export default Navigation
=======
  );
};

export default Navigation;
>>>>>>> mobasshir
