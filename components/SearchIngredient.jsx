import React, { useState, useEffect } from 'react'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'
import style from './SearchIngredient.module.css'
import IngredientData from '../IngredientData.js'
import apiImage from './api_error_image.gif'
import { useNavigate } from 'react-router-dom'

const apiKey = '834e4826627e40619840c9f299b31f36'

const SearchIngredient = () => {
  const [query, setQuery] = useState('')
  const [searchIngredientQuery, setSearchIngredientQuery] = useState('')
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [recipe, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showAllData, setShowAllData] = useState(false)
  const [shouldFetchData, setShouldFetchData] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const handleInput = e => {
    setSearchIngredientQuery(e.target.value)
  }

  const handleCheckbox = ingredient => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(
        selectedIngredients.filter(item => item !== ingredient)
      )
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient])
    }
  }

  const showAll = () => {
    if (selectedIngredients.length > 0) {
      setShowAllData(true)
      setShouldFetchData(true)
      window.scrollTo({
        top: 1000,
        behavior: 'smooth'
      })
    } else {
      setShowAllData(false)
    }
  }

  const selectedData = selectedIngredients.toString()

  const endpoint = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${selectedData}&apiKey=${apiKey}&number=100`

  const fetchRecipes = async () => {
    if (!selectedData) {
      setRecipes([])
      return
    }
    setLoading(true)

    try {
      const response = await fetch(endpoint)
      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`)
      }
      const data = await response.json()
      setRecipes(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (shouldFetchData && selectedData) {
      fetchRecipes()
      setShouldFetchData(false)
    } else if (shouldFetchData && selectedIngredients.length === 0) {
      setRecipes([])
      setShowAllData(false)
      setShouldFetchData(false)
    }
  }, [shouldFetchData, selectedData, selectedIngredients])

  const ingredients = IngredientData.ingredients

  const IngredientfilterData = ingredients.filter(ingredient =>
    ingredient.toLowerCase().includes(searchIngredientQuery.toLowerCase())
  )

  const filterDishesData = recipe.filter(dishes =>
    dishes.title.toLowerCase().includes(query.toLowerCase())
  )

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
        <button
          onClick={() => setSelectedIngredients(IngredientfilterData)}
          className={style.button}
        >
          Select All
        </button>
        <button
          onClick={() => {
            setSelectedIngredients([])
            setSearchIngredientQuery('')
            setShowAllData(false)
          }}
          className={style.button}
        >
          Clear all
        </button>
        <button onClick={() => showAll()} className={style.resultButton}>
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
                  <label htmlFor={`selected-ingredient-${index}`}>
                    {ingredient}
                  </label>
                </div>
              )
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
          <p className={style.no_recipes}>No recipes to display. Please select ingredients and try again.</p>
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
            {error?.includes('402') && (
              <div>
                <div className={style.errorContainer}>
                  <img src={apiImage} alt='arrow' className={style.icon} />
                  <p>
                    Failed to fetch recipes Data. Please Try after Some Time
                  </p>
                </div>

                <div className={style.btnContainer}>
                  <button className={style.btn} onClick={() => navigate(-1)}>
                    Go Back
                  </button>
                </div>
              </div>
            )}
            {(error?.includes('401') ||
              error?.includes('503') ||
              error?.includes('504')) && (
              <div>
                <div className={style.errorContainer}>
                  <img
                    src='https://cdn.dribbble.com/users/19381/screenshots/3471308/dribbble-500-animated.gif'
                    alt='arrow'
                    className={style.icon}
                  />
                  <p>
                    Failed to fetch recipe data due to a server error. Please
                    try again later.
                  </p>
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
                <p>
                  
                </p>
              )}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default SearchIngredient
