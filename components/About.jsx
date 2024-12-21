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
<<<<<<< HEAD
  
  
  const [mealStartIndex, setMealStartIndex] = useState(0) // State for meal section
  const [showMealAll, setShowMealAll] = useState(false) // To track "Show All" for meal section
=======
  const [showDietAll, setShowDietAll] = useState(false)
  const [showCuisineAll, setShowCuisineAll] = useState(false)
  const [showMealAll, setShowMealAll] = useState(false)
>>>>>>> main

  const scrollLeft = className => {
    const container = document.querySelector(`.${className}`)
    container.scrollLeft -= 200
  }

  const scrollRight = className => {
    const container = document.querySelector(`.${className}`)
    container.scrollLeft += 200
  }

<<<<<<< HEAD
  // Handle left and right button clicks for Cuisines
  const handleCuisineLeftClick = () => {
    if (cuisineStartIndex > 0) {
      setCuisineStartIndex(cuisineStartIndex - imagesPerPage) // Move to the previous set of images
    }
  }

  const handleCuisineRightClick = () => {
    if (cuisineStartIndex + imagesPerPage < cuisines.length) {
      setCuisineStartIndex(cuisineStartIndex + imagesPerPage) // Move to the next set of images
    }
  }

  const handleShowDietAllClick = () => {
    setShowDietAll(true) // Show all images for Diets
  }

  const handleShowCuisineAllClick = () => {
    setShowCuisineAll(true) // Show all images for Cuisines
  }

  const handleShowMealAllClick = () => {
    setShowMealAll(true) // Show all images for Meals
  }

  const handleShowSliderClick = () => {
    setShowDietAll(false) // Switch back to the slider view for Diets
    setShowCuisineAll(false) // Switch back to the slider view for Cuisines
    setShowMealAll(false) // Switch back to the slider view for Meals
  }

  const handleMealLeftClick = () => {
    if (mealStartIndex > 0) {
      setMealStartIndex(mealStartIndex - imagesPerPage) // Move to previous set of meal images
    }
  }

  const handleMealRightClick = () => {
    if (mealStartIndex + imagesPerPage < mealTypes.length) {
      setMealStartIndex(mealStartIndex + imagesPerPage) // Move to next set of meal images
    }
  }

  // Displayed images based on the showAll state
  const displayedDiets = showDietAll
    ? diet
    : diet.slice(dietStartIndex, dietStartIndex + imagesPerPage)
  const displayedCuisines = showCuisineAll
    ? cuisines
    : cuisines.slice(cuisineStartIndex, cuisineStartIndex + imagesPerPage)
  const displayedMeals = showMealAll
    ? mealTypes
    : mealTypes.slice(mealStartIndex, mealStartIndex + imagesPerPage)

  return (
    <div className='about'>
      <Navigation setQuery={setQuery}/>

      {/* Diets Section */} 
      <div className={style.diets_container}>
        <h1 className={style.diet_heading}>Diets</h1>

        <div className={style.sliderContainer}>
          {/* Show Left button only if not in "Show All" mode */}
          {!showDietAll && (
            <button className={style.leftButton} onClick={handleDietLeftClick}>
              ←
            </button>
          )}

          <div
            className={`${style.diets} ${showDietAll ? style.showAllImages : ''}`}
            style={{
              transform: !showDietAll
                ? `translateX(-${dietStartIndex * imageWidth}px)` // Move 5 images at once
                : 'none' // Keep images in place when in "Show All" mode
            }}
          >
            {displayedDiets.map(item => (
              <div key={item.id} className={style.diet}>
                <div className={style.diet_image}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={style.diet_name}>{item.name}</div>
              </div>
            ))}
=======
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
>>>>>>> main
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
<<<<<<< HEAD
              →
            </button>
          )}
        </div>

        <div className={style.show_all}>
          {!showDietAll ? (
            <button
              className={style.show_all_button}
              onClick={handleShowDietAllClick}
            >
              Show All
            </button>
          ) : (
            <button
              className={style.show_all_button}
              onClick={handleShowSliderClick}
            >
              Back to Slider
            </button>
          )}
        </div>
      </div>

      <div className={style.horizontalline}></div>

      {/* {/* Cuisines Section} */}
      <div className={style.cuisines_container}>
        <h1 className={style.cuisine_heading}>Cuisines</h1>

        <div className={style.cuisine_sliderContainer}>
          {/* Show Left button only if not in "Show All" mode */}
          {!showCuisineAll && (
            <button
              className={style.cuisine_leftButton}
              onClick={handleCuisineLeftClick}
            >
              ←
            </button>
          )}

          <div
            className={`${style.cuisines} ${showCuisineAll ? style.cuisine_showAllImages : ''}`}
            style={{
              transform: !showCuisineAll
                ? `translateX(-${cuisineStartIndex * imageWidth}px)` // Move 5 images at once
                : 'none' // Keep images in place when in "Show All" mode
            }}
          >
            {displayedCuisines.map(item => (
              <div key={item.id} className={style.cuisine}>
                <div className={style.cuisine_image}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={style.cuisine_name}>{item.name}</div>
=======
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
>>>>>>> main
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

<<<<<<< HEAD
          {/* Show Right button only if not in "Show All" mode */}
          {!showCuisineAll && (
            <button
              className={style.cuisine_rightButton}
              onClick={handleCuisineRightClick}
            >
              →
            </button>
          )}
        </div>

        <div className={style.cuisine_show_all}>
          {!showCuisineAll ? (
            <button
              className={style.cuisine_show_all_button}
              onClick={handleShowCuisineAllClick}
            >
              Show All
            </button>
          ) : (
            <button
              className={style.cuisine_show_all_button}
              onClick={handleShowSliderClick}
            >
              Back to Slider
            </button>
          )}
        </div>
      </div>

      <div className={style.horizontalline}></div>
        
        {/* {/* MealType Section} */}
      <div className={style.meals_container}>
        <h1 className={style.meal_heading}>Meals</h1>

        <div className={style.meal_sliderContainer}>
          {/* Left Button for Meal */}
          {!showMealAll && (
            <button
              className={style.meal_leftButton}
              onClick={handleMealLeftClick}
            >
              ←
            </button>
          )}

          <div
            className={`${style.meals} ${showMealAll ? style.meal_showAllImages : ''}`}
            style={{
              transform: !showMealAll
                ? `translateX(-${mealStartIndex * imageWidth}px)` // Move meal images by width
                : 'none' // Do not move images in "Show All" mode
            }}
          >
            {displayedMeals.map(item => (
              <div key={item.id} className={style.meal}>
                <div className={style.meal_image}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={style.meal_name}>{item.name}</div>
              </div>
            ))}
=======
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
>>>>>>> main
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
