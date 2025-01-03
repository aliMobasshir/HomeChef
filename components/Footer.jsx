import React from 'react'
import style from './Footer.module.css'
import image from './HomeChefLogo.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
  const handleButton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={style.footer_container}>
      <div className={style.footerContent}>
        <div className='LogoImage' >  <Link to ='/'>
          <img onClick={handleButton} className={style.image} src={image} alt='HomeChef logo' />
          </Link>
        </div>

        <div className={style.navigation}>
          <h3>Navigation</h3>
          <ul>
            <li onClick={handleButton}> <Link to ='/'>Home </Link></li>
            <li onClick={handleButton}> <Link to='/about' >About</Link></li>
            <li>Privacy Policy</li>
            <li>Terms And Conditions</li>
          </ul>
        </div>

        <div className={style.quickLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li> <Link to='/showall/diet/vegan'>Vegan Recipes</Link></li>
            <li> <Link to='/showall/type/salad'>Healthy Salads </Link></li>
            <li> <Link to='/showall/cuisine/Indian'>Indian Recipes </Link></li>
            <li> <Link to ='/exploreCategory'>Explore Categories</Link></li>
            <li> <Link to ='/SearchIngredient'>Search by Ingredients</Link></li>
          </ul>
        </div>

        <div className={style.contact}>
          <h3 >Contact Us</h3>
          <ul>
            <li onClick={handleButton}> <Link to ='/contact'>Write to us </Link></li>
          </ul>
        </div>

        <div className={style.socialMedia}>
          <h3>Social (dummy)</h3>
          <ul>
            <li>
              <i className='fa-brands fa-facebook'></i>
            </li>
            <li>
              <i className='fa-brands fa-instagram'></i>
            </li>
            <li>
              <i className='fa-brands fa-x-twitter'></i>
            </li>
            <li>
              <i className='fa-brands fa-youtube'></i>
            </li>
          </ul>
        </div>
      </div>

      <div className={style.horizontal_line}>
        <div className={style.line}></div>
      </div>
      <div className={style.copyright}>
        <p>© 2024 HomeChef | All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
