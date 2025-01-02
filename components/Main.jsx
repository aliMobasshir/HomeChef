import React from 'react'
import Style from './Main.module.css'
import restaurant from './restaurant 1.svg'
import Data from '../FakeData.js'

const Main = ({ query }) => {
  const handleButton = () => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth'
    })
  }
  const filter = Data.filter(
    item => item.title && item.title.toLowerCase().includes(query.toLowerCase())
  )

  // When there's no search query, show the home page
  if (!query) {
    return (
      <main>
        <div className={Style.mainContainer} id='main-container'>
          <div className={Style.textContainer} id='container1'>
            <h1 className={Style.h1_text}>
              FIND RECIPES FOR THE FOOD YOU LOVE
            </h1>

            <p className={Style.p_text} id='p_text'>
              Discover delicious recipes by browsing ingredients you have on
              hand, or explore by category!
            </p>

            <button onClick={handleButton} className={Style.button} id='button'>
              <span className={Style.buttonText}>GET STARTED</span>{' '}
            </button>
          </div>

          <div className={Style.container2} id='container2'>
            <img
              src={restaurant}
              className={Style.Restaurant_Img}
              alt=' resturant'
            />
          </div>
        </div>

        <div className={Style.mainFooter}>
          <ul>
            <li className={Style.featuresText}>Nutritional Information</li>
            <li className={Style.featuresPartition}></li>
            <li className={Style.featuresText}>2000+ Recipes</li>
            <li className={Style.featuresPartition}></li>
            <li className={Style.featuresText}>26+ Cuisines</li>
            <li className={Style.featuresPartition}></li>
            <li className={Style.featuresText}>Step-by-Step Guidance</li>
          </ul>
        </div>
      </main>
    )
  }

  // Display search results here (optional, if you want to show results)
  //   return (
  //     <main>
  //       {/* Render search results */}
  //       {filter.map(item => (
  //         <div key={item.id}>{item.title}</div>
  //       ))}
  //     </main>
  //   );
}

export default Main
