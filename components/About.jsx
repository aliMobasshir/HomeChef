import React, { useState } from 'react'
import diet from '../Diet.js'
import style from './About.module.css'
import Navigation from './Navigation.jsx'
import cuisines from '../Cuisines.js'
import mealTypes from '../Mealtypes.js'
import Footer from './Footer.jsx'

const About = () => {
  const [mealStartIndex, setMealStartIndex] = useState(0) // State for meal section
  const [showMealAll, setShowMealAll] = useState(false) // To track "Show All" for meal section

  const [dietStartIndex, setDietStartIndex] = useState(0) // Separate state for Diets
  const [cuisineStartIndex, setCuisineStartIndex] = useState(0) // Separate state for Cuisines
  const [showDietAll, setShowDietAll] = useState(false) // Track if "Show All" is clicked for Diets
  const [showCuisineAll, setShowCuisineAll] = useState(false) // Track if "Show All" is clicked for Cuisines
  const imagesPerPage = 5 // Number of images per page (chunk size)
  const imageWidth = 120 // Width of a single image (adjust based on your styling)

  // Handle left and right button clicks for Diets
  const handleDietLeftClick = () => {
    if (dietStartIndex > 0) {
      setDietStartIndex(dietStartIndex - imagesPerPage) // Move to the previous set of images
    }
  }

  const handleDietRightClick = () => {
    if (dietStartIndex + imagesPerPage < diet.length) {
      setDietStartIndex(dietStartIndex + imagesPerPage) // Move to the next set of images
    }
  }

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
    : mealTypes.slice(mealStartIndex, mealStartIndex + imagesPerPage) // Fixing missing `displayedMeals`

  return (
    <div className='about'>
      <Navigation />

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
          </div>

          {/* Show Right button only if not in "Show All" mode */}
          {!showDietAll && (
            <button
              className={style.rightButton}
              onClick={handleDietRightClick}
            >
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
              </div>
            ))}
          </div>

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
          </div>

          {/* Right Button for Meal */}
          {!showMealAll && (
            <button
              className={style.meal_rightButton}
              onClick={handleMealRightClick}
            >
              →
            </button>
          )}
        </div>

        <div className={style.meal_show_all}>
          {!showMealAll ? (
            <button
              className={style.meal_show_all_button}
              onClick={handleShowMealAllClick}
            >
              Show All
            </button>
          ) : (
            <button
              className={style.meal_show_all_button}
              onClick={handleShowSliderClick}
            >
              Back to Slider
            </button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
