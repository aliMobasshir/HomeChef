import React from 'react';
import style from './Footer.module.css';
import image from './HomeChef.svg';

const Footer = () => {
  return (
    <div className={style.footer_container}>
      <div className='LogoImage'>
        <img className={style.image} src={image} alt='HomeChef logo' />
      </div>

      <div className={style.navigation}>
        <h3>Navigation</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Terms And Conditions</li>
        </ul>
      </div>

      <div className={style.quickLinks}>
        <h3>Quick Links</h3>
        <ul>
          <li>Veg Recipes</li>
          <li>Non-Veg Recipes</li>
          <li>Indian Recipes</li>
          <li>Explore Categories</li>
          <li>Search by Ingredients</li>
        </ul>
      </div>

      <div className={style.contact}>
        <h3>Contact Us</h3>
        <ul>
          <li>HomeChef@gmail.com</li>
          <li>9999999</li>
        </ul>
      </div>

      <div className={style.socialMedia}>
        <h3>Social</h3>
        <ul>
          <li><i className='fa-brands fa-facebook'></i></li>
          <li><i className='fa-brands fa-instagram'></i></li>
          <li><i className='fa-brands fa-x-twitter'></i></li>
          <li><i className='fa-brands fa-youtube'></i></li>
        </ul>
      </div>

      <div className={style.horizontal_line}>
        <div className={style.line}></div>
        <p>© 2023 HomeChef. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
