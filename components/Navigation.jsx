<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 3cde12a7ba5070db138bc9514721611259e96ba6
import { Link } from 'react-router-dom';
import img1 from "./chef 1.svg";
import img2 from "./HomeChef.svg";
import Search from "./Search.jsx";
import Style from './Navigation.module.css';
import hamburger from "./Hamburger.svg";
import xmark from "./xmark.svg"

const Navigation = ({ setQuery}) => {
  // State to control the visibility of the menu
  const [isMenuOpen, setMenuOpen] = useState(false);
<<<<<<< HEAD
  const [isSearchOpen, setSearchOpen] = useState(false);
=======
  const [ isSearchOpen, setSearchOpen ] = useState(false)
>>>>>>> 3cde12a7ba5070db138bc9514721611259e96ba6

  // Toggle function to show/hide the menu
  const handler = () => {
<<<<<<< HEAD
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

=======
    setMenuOpen((prev) => !prev);  // Toggle the menu visibility
  }

  

>>>>>>> 3cde12a7ba5070db138bc9514721611259e96ba6
  return (
    <div className={Style.navigationContainer}>
      <nav className={Style.navigation}>
        <ul className={Style.navigationList}>

          <li className={Style.navigationItem}>
<<<<<<< HEAD
            <img src={img1} alt='Icon Image' className={Style.navigationIcon} />
            <img src={img2} alt='HomeChef Image' className={Style.navigationBrandImage} />
=======
            <img src={img1} alt="Icon Image" className={Style.navigationIcon} />
            <img src={img2} alt="HomeChef Image" className={Style.navigationBrandImage} />
>>>>>>> 3cde12a7ba5070db138bc9514721611259e96ba6
          </li>

          <li className={Style.navigationItem}>
            <Search setSearchOpen={setSearchOpen} setQuery={setQuery} />
          </li>

<<<<<<< HEAD
          {!isSearchOpen && (
            <img
              onClick={handler}
              className={Style.hamburger}
              src={hamburger}
              alt='Click Here'
            />
          )}

          <li className={Style.navigationItem}>
            <Link to='/' className={Style.navigationLink}>Home</Link>
=======

          {/* <li>
            <img onClick={handler} className={Style.hamburger} src={hamburger} alt="Click Here" />
          </li> */}

          {
            !isSearchOpen && (
              <img onClick={handler} className={Style.hamburger} src={hamburger} alt="Click Here" />
            )
          }

          {/* Links that should show when the menu is open */}
          <li className={Style.navigationItem}>
            <Link to="/" className={Style.navigationLink}>Home</Link>
>>>>>>> 3cde12a7ba5070db138bc9514721611259e96ba6
          </li>

          <li className={Style.navigationItem}>
<<<<<<< HEAD
            <Link to='/about' className={Style.navigationLink}>About</Link>
=======
            <Link to="/about" className={Style.navigationLink}>About</Link>
>>>>>>> 3cde12a7ba5070db138bc9514721611259e96ba6
          </li>

          <li className={Style.navigationItem}>
<<<<<<< HEAD
            <Link to='/contact' className={Style.navigationLink}>Contact</Link>
=======
            <Link to="/contact" className={Style.navigationLink}>Contact</Link>
>>>>>>> 3cde12a7ba5070db138bc9514721611259e96ba6
          </li>

          {/* Conditional Menu Content */}
          {isMenuOpen && (
            <div className={Style.menuContainer}>
<<<<<<< HEAD
              <img
                onClick={handler}
                className={Style.xmarkImage}
                src={xmark}
                alt='Close Menu'
              />
              <Link to='/' className={Style.menuItem}>Home</Link>
              <Link to='/about' className={Style.menuItem}>About</Link>
              <Link to='/contact' className={Style.menuItem}>Contact</Link>
              <Link to='/SignUp' className={Style.menuItem}>Sign Up</Link>
              <Link to='/SignIn' className={Style.menuItem}>Sign In</Link>
              <Link to='/services' className={Style.menuItem}>Services</Link>
=======

              <img onClick={handler} className={Style.xmarkImage} src={xmark} alt="" />
              <Link to="/" className={Style.menuItem}>Home</Link>
              <Link to="/about" className={Style.menuItem}>About</Link>
              <Link to="/contact" className={Style.menuItem}>Contact</Link>
              <Link to="/SignUp" className={Style.menuItem}>Sign Up</Link>
              <Link to="/SignIn" className={Style.menuItem}>Sign In</Link>
              <Link to="/services" className={Style.menuItem}>Services</Link>
>>>>>>> 3cde12a7ba5070db138bc9514721611259e96ba6
            </div>
          )}

        </ul>
      </nav>
    </div>
  );
<<<<<<< HEAD
};

export default Navigation;
=======
}

export default Navigation;
>>>>>>> 3cde12a7ba5070db138bc9514721611259e96ba6
