import React, { useState, useEffect } from 'react'; // Keep this version since useEffect is used later
import { Link } from 'react-router-dom';
import img1 from "./chef 1.svg";
import img2 from "./HomeChef.svg";
import Search from "./Search.jsx";
import Style from './Navigation.module.css';
import hamburger from "./Hamburger.svg";
import xmark from "./xmark.svg";


const Navigation = ({ setQuery }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // State to control visibility of navbar
  const [lastScrollY, setLastScrollY] = useState(0); // State to track the last scroll position

  const handler = () => {
    setMenuOpen((prev) => !prev);  // Toggle the menu visibility
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

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={Style.navigationContainer}>
      <nav className={Style.navigation}>
        <ul className={Style.navigationList}>
          <li className={Style.navigationItem}>
            <img src={img1} alt="Icon Image" className={Style.navigationIcon} />
            <img src={img2} alt="HomeChef Image" className={Style.navigationBrandImage} />
          </li>

          {/* Search Component */}
          <li className={Style.navigationItem}>
            <Search setSearchOpen={setSearchOpen} setQuery={setQuery} />
          </li>
          {!isSearchOpen && (
            <img onClick={handler} className={Style.hamburger} src={hamburger} alt="Click Here" />
          )}

          <li className={Style.navigationItem}>
            <Link to="/" className={Style.navigationLink}>Home</Link>
          </li>

          <li className={Style.navigationItem}>
            <Link to="/about" className={Style.navigationLink}>About</Link>
          </li>

          <li className={Style.navigationItem}>
            <Link to="/contact" className={Style.navigationLink}>Contact</Link>
          </li>
          
          {isMenuOpen && (
            <div className={Style.menuContainer}>
              <img onClick={handler} className={Style.xmarkImage} src={xmark} alt="Close Menu" />
              <Link to="/" className={Style.menuItem}>Home</Link>
              <Link to="/about" className={Style.menuItem}>About</Link>
              <Link to="/contact" className={Style.menuItem}>Contact</Link>
              <Link to="/SignUp" className={Style.menuItem}>Sign Up</Link>
              <Link to="/SignIn" className={Style.menuItem}>Sign In</Link>
              <Link to="/services" className={Style.menuItem}>Services</Link>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
