import React, { useState, useEffect } from 'react';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import style from './SearchIngredient.module.css';
import IngredientData from '../IngredientData.js';
import apiImage from './api_error_image.gif';
import { useNavigate, Link } from 'react-router-dom';

const apiKeys = [
  '834e4826627e40619840c9f299b31f36',
  'cb830b43603108a2e1b0d922bac475a945a8404a',
  '0d0e212f1a904e9cb772072f49167a4b',
  'f2fbb965309246e7906f64251396be87',
  '5ce733c6c24d445ab2395b906ae5dc1',
  '5253113cb6ff4e67ad11c72ec6ae2ec0',
  'd2a320ed5a3a463ca1b8dce923cd49dc',
  'af3ad633e574425c90e2c0ef4a4fefc0',
  '3544e0a87f98468883e9169172546ac1',
  '716d2d891ccc4e788b471c105f5928e8',
  '3036c2facd2447e380f01fd8061794c4'
];

const SearchIngredient = () => {
  const [query, setQuery] = useState('');
  const [searchIngredientQuery, setSearchIngredientQuery] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [recipe, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAllData, setShowAllData] = useState(false);
  const [shouldFetchData, setShouldFetchData] = useState(false);
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0); // Track API key index
  const navigate = useNavigate();

  const endpoint = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${selectedIngredients.toString()}&apiKey=${apiKeys[currentKeyIndex]}&number=100`;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const fetchRecipes = async () => {
    if (!selectedIngredients.length) {
      setRecipes([]);
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        console.error(`Error with API Key: ${apiKeys[currentKeyIndex]}, Status: ${response.status}`);
        
        // Rotate API key on error
        if (currentKeyIndex + 1 < apiKeys.length) {
          setCurrentKeyIndex(currentKeyIndex + 1);
        } else {
          setError('All API keys are exhausted.');
        }
        return;
      }

      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (shouldFetchData) {
      fetchRecipes();
      setShouldFetchData(false);
    }
  }, [shouldFetchData, currentKeyIndex]); // Fetch again if API key changes

  const handleInput = (e) => {
    setSearchIngredientQuery(e.target.value);
  };

  const handleCheckbox = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient));
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const showAll = () => {
    if (selectedIngredients.length > 0) {
      setShowAllData(true);
      setShouldFetchData(true);
      window.scrollTo({
        top: 1000,
        behavior: 'smooth',
      });
    } else {
      setShowAllData(false);
    }
  };

  const ingredients = IngredientData.ingredients;
  const IngredientfilterData = ingredients.filter((ingredient) =>
    ingredient.toLowerCase().includes(searchIngredientQuery.toLowerCase())
  );

  const filterDishesData = recipe.filter((dishes) =>
    dishes.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Navigation setQuery={setQuery} />
      <div className={style.description}>
        <p>
          Find recipes that use as many of the given ingredients as possible and
          require as few additional ingredients as possible.
        </p>
      </div>

      <div className={style.searchContainer}>
        <input
          onInput={handleInput}
          className={style.searchInput}
          type='text'
          placeholder='Search by ingredients'
        />
        <button onClick={() => setSelectedIngredients(IngredientfilterData)} className={style.button}>
          Select All
        </button>
        <button
          onClick={() => {
            setSelectedIngredients([]);
            setSearchIngredientQuery('');
            setShowAllData(false);
          }}
          className={style.button}
        >
          Clear all
        </button>
        <button onClick={showAll} className={style.resultButton}>
          Show results
        </button>
      </div>

      <div className='selected_ingredients_container'>
        {selectedIngredients.length > 0 && (
          <div className={style.selected_ingredients_item_container}>
            <h2>Selected :</h2>
            {selectedIngredients.map((ingredient, index) => {
              return (
                <div key={index} className={style.ingredientItemContainer}>
                  <input
                    type='checkbox'
                    id={`selected-ingredient-${index}`}
                    onChange={() => handleCheckbox(ingredient)}
                    checked={selectedIngredients.includes(ingredient)}
                  />
                  <label htmlFor={`selected-ingredient-${index}`}>{ingredient}</label>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className={style.ingredientcontainerparent}>
        <div className={style.ingredientContainer}>
          {IngredientfilterData.length > 0 ? (
            IngredientfilterData.map((ingredient, index) => (
              <div key={index} className={style.ingredientItemContainer}>
                <input
                  type='checkbox'
                  id={`ingredient-${index}`}
                  onChange={() => handleCheckbox(ingredient)}
                  checked={selectedIngredients.includes(ingredient)}
                />
                <label htmlFor={`ingredient-${index}`}>{ingredient}</label>
              </div>
            ))
          ) : (
            <p>No ingredients found</p>
          )}
        </div>
      </div>

      <div className={style.result}>
        <h1>Resulted Recipes:</h1>

        {loading && <div className={style.loader}></div>}

        {!loading && !error && selectedIngredients.length === 0 && (
          <p className={style.no_recipes}>
            No recipes to display. Please select ingredients and try again.
          </p>
        )}

        {!loading &&
          !error &&
          selectedIngredients.length > 0 &&
          filterDishesData.length === 0 && (
            <p className={style.no_recipes}>
              No recipes match your selected ingredients. Try different
              ingredients.
            </p>
          )}

        {!loading && (
          <>
            {error && (
              <div>
                <div className={style.errorContainer}>
                  <img src={apiImage} alt='arrow' className={style.icon} />
                  <p>{error}</p>
                </div>

                <div className={style.btnContainer}>
                  <button className={style.btn} onClick={() => navigate(-1)}>
                    Go Back
                  </button>
                </div>
              </div>
            )}

            <div className={style.recipe_Container}>
              {showAllData && filterDishesData.length > 0 ? (
                filterDishesData.map((item, index) => (
                  <Link to={`/searchIngredientImage/${item.id}`} key={index}>
                    <div className={style.recipeCard}>
                      <img src={item.image} alt='Click Image' />
                      <h3>{item.title}</h3>
                    </div>
                  </Link>
                ))
              ) : (
                <p></p>
              )}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchIngredient;
