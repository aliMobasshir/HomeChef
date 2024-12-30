import React from 'react'
import style from './About.module.css'
import Navigation from './Navigation.jsx'
import Happycustomerbg from './happycustomer.svg'
import mission from './missionImage.svg'
import MobasshirImage from './MobasshirImage.svg';
import linkedinicon from './Linkedinicon.svg'
import externalIcon from './ExternalLinkicon.svg'
import DanishImage from './DanishImage.svg'
import Footer from './Footer.jsx'

// import { Link } from 'react-router-dom'


const About = () => {


  return (
    <div className='about'>
      <Navigation />
      <div className={style.aboutwebsite}>
        <div className={style.HeaderPage}>
          <h1>About HOMECHEF</h1>
          <p>know everything .... about us</p>
        </div>
        <div className={style.straightLine}></div>
        <div className={style.WhoWeAreContainer}>
          <h1>who we are</h1>
          <p>We are HomeChef, a platform designed to make discovering and cooking delicious meals easier and more enjoyable. Whether you're a seasoned chef or just starting out, we provide you with the tools and inspiration to create meals that suit your taste, dietary preferences, and skill level. Our mission is to bring the joy of cooking to everyone with a user-friendly, feature-rich experience.</p>
        </div>
        <div className={style.whatweoffercontainer}>
          <h1>what we offer</h1>
          <div className={style.cards}>
            <div className={style.card1}><p>Find
              Recipes</p></div>
            <div className={style.card2}><p>Explore
              categories</p></div>
            <div className={style.card3}><p>Ingredient Based Search</p></div>
            <div className={style.card4}><p>Vast Recipe
              Collection</p></div>
          </div>
        </div>

        <div className={style.whychoosehomechefcontainer}>
          <h1>why choose HomeChef</h1>
          <div className={style.textnimage}>
            <div className={style.textarea}>
              <h3>Customer Satisfaction:</h3>
              <p>We’re committed to providing a satisfying and reliable experience for all our users.</p>
              <h3>Easy-to-Use Platform:</h3>
              <p>A simple, intuitive interface makes recipe browsing quick and easy.</p>
              <h3>Extensive Recipe Library:</h3>
              <p>Thousands of recipes to meet every dietary need and taste preference.</p>
              <h3>Time-Saving:</h3>
              <p>Find recipes quickly and spend more time cooking.</p>
            </div>
            <div className={style.imageContainer}>
              <img src={Happycustomerbg} alt="happy customer" />
            </div>

          </div>
        </div>

        {/* our mission */}
        <div className={style.ourmission}>
          <h1>our mission</h1>
          <div className={style.textnimage}
          ><div className={style.imageContainer}>
              <img src={mission} alt="mission" />
            </div>
            <div className={style.missiontext}>
              <h3>At HomeChef, we aim to:</h3>
              <h4>Provide a platform where everyone can find and create memorable meals.</h4>
              <h4>Empower users to discover new flavors and expand their culinary horizons.</h4>
              <h4>Help save time by offering easy-to-follow recipes that fit into busy schedules.</h4>
              <h4>Encourage sustainability by reducing food waste with our ingredient-based search feature.</h4>
            </div>
          </div>
        </div>

        <div className={style.conclusion}>
          <h1>Start Your Culinary Journey Today</h1>
          <p>Join the HomeChef community and discovere the joy of cooking with HomeChef. Start exploring our diverse recipe collection, find the perfect dishes for your needs, and let us guide you to your next great meal.
            <br />Let's cook up something amazing together!
          </p>
          <div className={style.straightLine2}></div>
        </div>
      </div>


      <div className={style.aboutdeveloper}>
        <div className={style.header}>
          <h1>about the developers
          </h1>
        </div>
      </div>

      <div className={style.devdetail}>
        <div className={style.profileimgcontainer}>
          <img src={MobasshirImage} alt="Md Mobasshir ALi Image" />
        </div>
        <div className={style.devinfo}>
          <h1>Md Mobasshir ALi</h1>
          <p>3rd year Computer science engineering student at Integral University</p>
          <div class={style.linkedinbutton}>
            <img src={linkedinicon} alt="LinkedIn Icon" class={style.iconlefticon} />
            <span>Linked in</span>
            <img src={externalIcon} alt="External Link Icon" class={style.iconrighticon} />
          </div>

        </div>
      </div>

      <div className={style.straightLine}></div>

      <div className={style.devdetail}>

<div className={style.devinfo2}>
  <h1>Mohd danish</h1>
  <p>3rd year Computer science engineering student at Integral University</p>
  <div class={style.linkedinbutton}>
  <img src={linkedinicon} alt="LinkedIn Icon" class={style.iconlefticon} />
  <span>Linked in</span>
  <img src={externalIcon} alt="External Link Icon" class={style.iconrighticon} />
</div>
</div>
<div className={style.profileimgcontainer}>
  <img src={DanishImage} alt="Md Mobasshir ALi Image" />
</div>
      </div>
      <div className={style.straightLine}></div>
      <Footer />
    </div>
  )
}

export default About
