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

  // Toggle function to show/hide the menu
  const handler = () => {
    setMenuOpen(prev => !prev) // Toggle the menu visibility

  }

  return (
    <div className={Style.navigationContainer}>
      <nav className={Style.navigation}>
        <ul className={Style.navigationList}>
          <li className={Style.navigationItem}>
            <img src={img1} alt='Icon Image' className={Style.navigationIcon} />
            <img
              src={img2}
              alt='HomeChef Image'
              className={Style.navigationBrandImage}
            />
          </li>

          <li className={Style.navigationItem}>
            <Search setSearchOpen={setSearchOpen} setQuery={setQuery} />
          </li>

          {/* <li>
            <img onClick={handler} className={Style.hamburger} src={hamburger} alt="Click Here" />
          </li> */}

          {!isSearchOpen && (
            <img
              onClick={handler}
              className={Style.hamburger}
              src={hamburger}
              alt='Click Here'
            />
          )}

          {/* Links that should show when the menu is open */}
          <li className={Style.navigationItem}>
            <Link to='/' className={Style.navigationLink}>
              Home
            </Link>
          </li>

          <li className={Style.navigationItem}>
            <Link to='/about' className={Style.navigationLink}>
              About
            </Link>
          </li>

          <li className={Style.navigationItem}>
            <Link to='/contact' className={Style.navigationLink}>
              Contact
            </Link>
          </li>

          {/* Conditional Menu Content */}
          {isMenuOpen && (
            <div className={Style.menuContainer}>
              <img
                onClick={handler}
                className={Style.xmarkImage}
                src={xmark}
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
            </div>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation