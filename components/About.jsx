import React, { useState } from 'react'
import diet from '../Diet.js'
import style from './About.module.css'
import Navigation from './Navigation.jsx'
import cuisines from '../Cuisines.js'
import mealTypes from '../Mealtypes.js'
import Footer from './Footer.jsx'
import leftArrow from './left-arrow-scroll.png'
import rightArrow from './right-arrow-scroll.png'
import Popular from './PopularIndian.jsx'
import RecommendedDesserts from './RecommendedDesserts.jsx'
import RecommendedWhole30 from './RecommendedWhole30.jsx'

const About = () => {
  const [query, setQuery] = useState('')
  const [showDietAll, setShowDietAll] = useState(false)
  const [showCuisineAll, setShowCuisineAll] = useState(false)
  const [showMealAll, setShowMealAll] = useState(false)

  const scrollLeft = className => {
    const container = document.querySelector(`.${className}`)
    container.scrollLeft -= 200
  }

  const scrollRight = className => {
    const container = document.querySelector(`.${className}`)
    container.scrollLeft += 200
  }

  const isSearchActive = query.trim() !== ''

  return (
    <div className="about">
      <Navigation setQuery={setQuery} />

      {isSearchActive ? (
        <>
          {/* Render search results */}
          <Popular query={query} />
          <RecommendedDesserts query={query} />
          <RecommendedWhole30 query={query} />
        </>
      ) : (
        <>
          {/* Render original sections when no search query */}
          {/* Diets Section */}
          <div className={style.dietheadingnknowmore}>
            <h1 className={style.diet_heading}>Diets</h1>
            <p>Know More About Diets</p>
          </div>

          <div className={style.diets_container}>
            {!showDietAll && (
              <button
                className={style.arrow_left}
                onClick={() => scrollLeft(style.diets)}
              >
                <img src={leftArrow} alt="leftarrow" width="20px" />
              </button>
            )}
            <div
              className={`${style.sliderContainer} ${
                showDietAll ? style.expanded : ''
              }`}
            >
              <div
                className={`${style.diets} ${
                  showDietAll ? style.showAllImages : ''
                }`}
              >
                {diet.map(item => (
                  <div
                    key={item.id}
                    className={`${style.diet} ${
                      showDietAll ? style.dietRow : ''
                    }`}
                  >
                    <div className={style.diet_image}>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className={style.diet_name}>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
            {!showDietAll && (
              <button
                className={style.arrow_right}
                onClick={() => scrollRight(style.diets)}
              >
                <img src={rightArrow} alt="rightarrow" width="20px" />
              </button>
            )}
          </div>

          <div className={style.show_all}>
            {!showDietAll ? (
              <button
                className={style.show_all_button}
                onClick={() => setShowDietAll(true)}
              >
                Show All
              </button>
            ) : (
              <button
                className={style.show_all_button}
                onClick={() => setShowDietAll(false)}
              >
                Show Less
              </button>
            )}
          </div>

          <div className={style.horizontalline}></div>

          {/* Cuisines Section */}
          <h1 className={style.cuisine_heading}>Cuisines</h1>
          <div className={style.cuisines_container}>
            {!showCuisineAll && (
              <button
                className={style.arrow_left}
                onClick={() => scrollLeft(style.cuisines)}
              >
                <img src={leftArrow} alt="leftarrow" width="20px" />
              </button>
            )}
            <div
              className={`${style.sliderContainer} ${
                showCuisineAll ? style.expanded : ''
              }`}
            >
              <div
                className={`${style.cuisines} ${
                  showCuisineAll ? style.showAllImages : ''
                }`}
              >
                {cuisines.map(item => (
                  <div
                    key={item.id}
                    className={`${style.cuisine} ${
                      showCuisineAll ? style.cuisineRow : ''
                    }`}
                  >
                    <div className={style.cuisine_image}>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className={style.cuisine_name}>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
            {!showCuisineAll && (
              <button
                className={style.arrow_right}
                onClick={() => scrollRight(style.cuisines)}
              >
                <img src={rightArrow} alt="rightarrow" width="20px" />
              </button>
            )}
          </div>

          <div className={style.show_all}>
            {!showCuisineAll ? (
              <button
                className={style.show_all_button}
                onClick={() => setShowCuisineAll(true)}
              >
                Show All
              </button>
            ) : (
              <button
                className={style.show_all_button}
                onClick={() => setShowCuisineAll(false)}
              >
                Show Less
              </button>
            )}
          </div>

          <div className={style.horizontalline}></div>

          {/* Meals Section */}
          <h1 className={style.meal_heading}>Meals</h1>
          <div className={style.meals_container}>
            {!showMealAll && (
              <button
                className={style.arrow_left}
                onClick={() => scrollLeft(style.meals)}
              >
                <img src={leftArrow} alt="leftarrow" width="20px" />
              </button>
            )}
            <div
              className={`${style.sliderContainer} ${
                showMealAll ? style.expanded : ''
              }`}
            >
              <div
                className={`${style.meals} ${
                  showMealAll ? style.showAllImages : ''
                }`}
              >
                {mealTypes.map(item => (
                  <div
                    key={item.id}
                    className={`${style.meal} ${
                      showMealAll ? style.mealRow : ''
                    }`}
                  >
                    <div className={style.meal_image}>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className={style.meal_name}>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
            {!showMealAll && (
              <button
                className={style.arrow_right}
                onClick={() => scrollRight(style.meals)}
              >
                <img src={rightArrow} alt="rightarrow" width="20px" />
              </button>
            )}
          </div>

          <div className={style.show_all}>
            {!showMealAll ? (
              <button
                className={style.show_all_button}
                onClick={() => setShowMealAll(true)}
              >
                Show All
              </button>
            ) : (
              <button
                className={style.show_all_button}
                onClick={() => setShowMealAll(false)}
              >
                Show Less
              </button>
            )}
          </div>

          <div className={style.horizontalline}></div>

          <Popular query={query} />
          <RecommendedDesserts query={query} />
          <RecommendedWhole30 query={query} />

          <Footer />
        </>
      )}
    </div>
  )
}

export default About