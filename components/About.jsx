import React, { useState } from 'react';
import diet from '../Diet.js';
import style from './About.module.css';
import Navigation from './Navigation.jsx';
import cuisines from '../Cuisines.js';
import mealTypes from '../Mealtypes.js';
import Footer from './Footer.jsx';

const About = () => {
  const [query, setQuery] = useState('');
  const [showDietAll, setShowDietAll] = useState(false); 
  const [showCuisineAll, setShowCuisineAll] = useState(false);
  const [showMealAll, setShowMealAll] = useState(false);

  // Toggle "Show All" or "Back to Slider" for Diets
  const toggleDietSlider = () => {
    setShowDietAll(!showDietAll);
  };

  // Toggle "Show All" or "Back to Slider" for Cuisines
  const toggleCuisineSlider = () => {
    setShowCuisineAll(!showCuisineAll);
  };

  // Toggle "Show All" or "Back to Slider" for Meals
  const toggleMealSlider = () => {
    setShowMealAll(!showMealAll);
  };

  return (
    <div className="about">
      <Navigation setQuery={setQuery} />

      {/* Diets Section */}
      <h1 className={style.diet_heading}>Diets</h1>
      <div className={style.diets_container}>
        <div className={`${style.sliderContainer} ${showDietAll ? style.expanded : ''}`}>
          <div className={`${style.diets} ${showDietAll ? style.showAllImages : ''}`}>
            {diet.map(item => (
              <div key={item.id} className={`${style.diet} ${showDietAll ? style.dietRow : ''}`}>
                <div className={style.diet_image}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={style.diet_name}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.show_all}>
          {!showDietAll ? (
            <button
              className={style.show_all_button}
              onClick={toggleDietSlider}
            >
              Show All
            </button>
          ) : (
            <button
              className={style.show_all_button}
              onClick={toggleDietSlider}
            >
              Back to Slider
            </button>
          )}
        </div>
      </div>

      <div className={style.horizontalline}></div>

      {/* Cuisines Section */}
      <div className={style.cuisines_container}>
        <h1 className={style.cuisine_heading}>Cuisines</h1>
        <div className={`${style.cuisine_sliderContainer} ${showCuisineAll ? style.expanded : ''}`}>
          <div className={`${style.cuisines} ${showCuisineAll ? style.showAllImages : ''}`}>
            {cuisines.map(item => (
              <div key={item.id} className={`${style.cuisine} ${showCuisineAll ? style.cuisineRow : ''}`}>
                <div className={style.cuisine_image}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={style.cuisine_name}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.cuisine_show_all}>
          {!showCuisineAll ? (
            <button
              className={style.cuisine_show_all_button}
              onClick={toggleCuisineSlider}
            >
              Show All
            </button>
          ) : (
            <button
              className={style.cuisine_show_all_button}
              onClick={toggleCuisineSlider}
            >
              Back to Slider
            </button>
          )}
        </div>
      </div>

      <div className={style.horizontalline}></div>

      {/* Meals Section */}
      <div className={style.meals_container}>
        <h1 className={style.meal_heading}>Meals</h1>
        <div className={`${style.meal_sliderContainer} ${showMealAll ? style.expanded : ''}`}>
          <div className={`${style.meals} ${showMealAll ? style.showAllImages : ''}`}>
            {mealTypes.map(item => (
              <div key={item.id} className={`${style.meal} ${showMealAll ? style.mealRow : ''}`}>
                <div className={style.meal_image}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={style.meal_name}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.meal_show_all}>
          {!showMealAll ? (
            <button
              className={style.meal_show_all_button}
              onClick={toggleMealSlider}
            >
              Show All
            </button>
          ) : (
            <button
              className={style.meal_show_all_button}
              onClick={toggleMealSlider}
            >
              Back to Slider
            </button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
