import React, { useState, useEffect } from 'react'
import Style from './recipeList.module.css'

const SearchResult = ({ query }) => {
  const [recipes, setRecipes] = useState([]) // State to store fetched recipes
  const [error, setError] = useState(null) // State to handle errors

  // Fetch recipes when query changes
  useEffect(() => {
    if (query.trim() === '') {
      setRecipes([]) // Clear recipes if query is empty
      return
    }

    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=d2a320ed5a3a463ca1b8dce923cd49dc&number=100`)
        const data = await response.json()

        if (data.results) {
          setRecipes(data.results) // Set fetched recipes
        } else {
          setRecipes([]) // If no recipes found, clear the results
        }
      } catch (error) {
        setError('Failed to fetch recipes') // Handle errors
      }
    }

    fetchRecipes()
  }, [query]) // Re-run the effect when query changes

  // Render error message if fetching fails
  if (error) {
    return (
      <div className={Style.errorContainer}>
        <img
          src="https://cdn.dribbble.com/users/19381/screenshots/3471308/dribbble-500-animated.gif"
          alt="error animation"
          className={Style.icon}
        />
        <p>{error}</p>
      </div>
    )
  }

  // Render recipes or "No recipes found" message
  return (
    <div className={Style.topPicksPage}>
      <h1 className={Style.heading}>Search Results:</h1>
      <div className={Style.recipeContainer}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className={Style.recipeCard}>
              <img src={recipe.image} alt={recipe.title} />
              <h2>
                <span>{recipe.title}</span>
              </h2>
            </div>
          ))
        ) : (
          <h1>No recipes found.</h1>
        )}
      </div>
    </div>
  )
}

export default SearchResult
