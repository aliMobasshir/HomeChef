import React from 'react'; 
import { Link } from 'react-router-dom';
import img1 from "./chef 1.svg";
import img2 from "./HomeChef.svg";
import Search from "./Search.jsx";
import Style from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={Style.navigationContainer}>

      <nav className={Style.navigation}>

        <ul className={Style.navigationList}>

          <li className={Style.navigationItem}>
            <img src={img1} alt="Icon Image" className={Style.navigationIcon} />
            <img src={img2} alt="HomeChef Image" className={Style.navigationBrandImage} />
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

          <li className={Style.navigationItem}>
            <Search />
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
