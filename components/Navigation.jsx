import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from "./chef 1.svg";
import img2 from "./HomeChef.svg";
import Search from "./Search.jsx";
import Style from './Navigation.module.css';
import hamburger from "./Hamburger.svg";
import xmark from "./xmark.svg";

const Navigation = ({ setQuery }) => {
  const [isVisible, setIsVisible] = useState(true); // Toggle visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 60) {
        // Scrolling down and past the threshold: hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up: show navbar
        setIsVisible(true);
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`${Style.navigationContainer} ${isVisible ? Style.visible : Style.hidden}`}>
      <nav className={Style.navigation}>
        <ul className={Style.navigationList}>
          <li className={Style.navigationItem}>
            <img src={img1} alt="Icon Image" className={Style.navigationIcon} />
            <img src={img2} alt="HomeChef Image" className={Style.navigationBrandImage} />
          </li>
          <li className={Style.navigationItem}>
            <Search setQuery={setQuery} />
          </li>
          <li className={Style.navigationItem}>
            <Link to="/" className={Style.navigationLink}>Home</Link>
          </li>
          <li className={Style.navigationItem}>
            <Link to="/about" className={Style.navigationLink}>About</Link>
          </li>
          <li className={Style.navigationItem}>
            <Link to="/contact" className={Style.navigationLink}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
