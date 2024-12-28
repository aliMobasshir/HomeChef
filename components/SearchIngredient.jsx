import React, { useState, useEffect } from 'react' // Import useEffect
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'
import style from './SearchIngredient.module.css'
import IngredientData from '../IngredientData.js' // Ensure the path is correct
import { Link } from 'react-router-dom'

const apiKey = '0d0e212f1a904e9cb772072f49167a4b'

const SearchIngredient = () => {
  const [query, setQuery] = useState('')
  const [searchIngredientQuery, setSearchIngredientQuery] = useState('')
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [recipe, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showAllData, setShowAllData] = useState(false)
  const [shouldFetchData, setShouldFetchData] = useState(false) // State to control fetching

  const handleInput = e => {
    setSearchIngredientQuery(e.target.value)
  }

  const handleCheckbox = ingredient => {
    if (selectedIngredients.includes(ingredient)) {
      // Uncheck - Remove ingredient from selected list
      setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient))
    } else {
      // Check - Add ingredient to selected list
      setSelectedIngredients([...selectedIngredients, ingredient])
    }
  }

  const showAll = () => {
    if (selectedIngredients.length > 0) {
      setShowAllData(true)
      setShouldFetchData(true) // Trigger data fetch when the button is clicked
    } else {
      setShowAllData(false) // If no ingredients are selected, show no recipes
    }
  }

  const selectedData = selectedIngredients.toString()

  const endpoint = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${selectedData}&apiKey=${apiKey}&number=100`

  const fetchRecipes = async () => {
    if (!selectedData) {
      setRecipes([]) // If no ingredients selected, clear the recipes
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
      setLoading(false) // Stop loading after API call
    }
  }

  // Trigger data fetch only when `shouldFetchData` is true
  useEffect(() => {
    if (shouldFetchData && selectedData) {
      fetchRecipes()
      setShouldFetchData(false) // Reset the flag after fetching data
    } else if (shouldFetchData && selectedIngredients.length === 0) {
      // If no ingredients selected, clear results
      setRecipes([])
      setShowAllData(false) // Hide results
      setShouldFetchData(false) // Reset flag
    }
  }, [shouldFetchData, selectedData, selectedIngredients]) // Trigger when ingredients are selected or show results button is pressed

  const ingredients = IngredientData.ingredients // Access the ingredients array

  const IngredientfilterData = ingredients.filter(ingredient =>
    ingredient.toLowerCase().includes(searchIngredientQuery.toLowerCase())
  )

  const filterDishesData = recipe.filter(dishes =>
    dishes.title.toLowerCase().includes(query.toLowerCase())
  )

  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <Navigation setQuery={setQuery} />
      {/* Heading and Description */}
      <div className={style.description}>
        <p>
          Find recipes that use as many of the given ingredients as possible and
          require as few additional ingredients as possible.
        </p>
      </div>

      {/* Search bar, Select All, Clear, and Show buttons */}
      <div className={style.searchContainer}>
        <input
          onInput={handleInput}
          className={style.searchInput}
          type="text"
          placeholder="Search by ingredients"
        />
        <button
          onClick={() => setSelectedIngredients(IngredientfilterData)} // Select all visible ingredients
          className={style.button}
        >
          Select All
        </button>

        <button
          onClick={() => {
            setSelectedIngredients([]) // Clear selected ingredients
            setSearchIngredientQuery('') // Clear search query as well
            setShowAllData(false) // Hide recipes when all ingredients are cleared
          }}
          className={style.button}
        >
          Clear all
        </button>

        <button onClick={showAll} className={style.resultButton}>
          Show results
        </button>
      </div>

      {/* Selected ingredients */}
      <div className="selected_ingredients_container">
        {selectedIngredients.length > 0 && (
          <div className={style.selected_ingredients_item_container}>
            <h2>Selected Ingredients :</h2>
            {selectedIngredients.map((ingredient, index) => {
              return (
                <div key={index} className={style.ingredientItemContainer}>
                  <input
                    type="checkbox"
                    id={`selected-ingredient-${index}`}
                    onChange={() => handleCheckbox(ingredient)}
                    checked={selectedIngredients.includes(ingredient)} // Make checkbox controlled
                  />
                  <label htmlFor={`selected-ingredient-${index}`}>{ingredient}</label>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Checkboxes and Ingredient list */}
      <div className={style.ingredientcontainerparent}>
        <div className={style.ingredientContainer}>
          {IngredientfilterData.length > 0 ? (
            IngredientfilterData.map((ingredient, index) => (
              <div key={index} className={style.ingredientItemContainer}>
                <input
                  type="checkbox"
                  id={`ingredient-${index}`}
                  onChange={() => handleCheckbox(ingredient)}
                  checked={selectedIngredients.includes(ingredient)} // Make checkbox controlled
                />
                <label htmlFor={`ingredient-${index}`}>{ingredient}</label>
              </div>
            ))
          ) : (
            <p>No ingredients found</p>
          )}
        </div>
      </div>

      {/* Recipes */}
      <div className={style.result}>
        <h1>Resulted Recipes:</h1>
        <div className={style.recipe_Container}>
          {loading && <p>Loading...</p>}
          {showAllData &&
            filterDishesData.length > 0 &&
            filterDishesData.map((item, index) => {
              return (
                <Link to={`/searchIngredientImage/${item.id}`} key={index}>
                  <div className={style.recipeCard}>
                    <img src={item.image} alt="Click Image" />
                    <h3>{item.title}</h3>
                  </div>
                </Link>
              )
            })}
          {!showAllData && !loading && selectedIngredients.length === 0 && (
            <p>No recipes to display. Please select ingredients and try again.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SearchIngredient
