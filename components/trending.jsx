import React, { useEffect, useState } from 'react'
import Style from './recipeList.module.css'
import flameIcon from './fire-flame.png'

// API configuration
const apiKey = '716d2d891ccc4e788b471c105f5928e8'
const endpoint = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6`

function RecipeList({ query }) { // query is passed as a prop
  const [recipes, setRecipes] = useState([]) // State for storing recipes
  const [error, setError] = useState(null) // State for error handling

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(endpoint)

        // Check if API request was successful
        if (!response.ok) {
          throw new Error(`An error has occurred: ${response.status}`)
        }

        // Parse the response JSON
        const data = await response.json()

        // Ensure recipes exist in the response
        setRecipes(data?.recipes || [])
      } catch (error) {
        setError(error.message) // Capture error message
      }
    }

    fetchRecipes()
  }, []) // Dependency array ensures this runs only once

  // Filter recipes based on the query prop passed from the parent
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  )

    return (
        <div className={Style.topPicksPage}>
        {/* Page Title */}
        <h1 className={Style.heading}>
            Trending Dishes
            <img src={flameIcon} alt='flame' className={Style.icon} />
        </h1>

        {/* Recipe List */}
        <div className={Style.recipeContainer}>
            {error ? (
          <p className={Style.error}>Error: {error}</p> // Display error message
        ) : filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div key={recipe.id} className={Style.recipeCard}>
              <img src={recipe.image} alt={recipe.title} />
              <h2>
                <span>{recipe.title}</span>
              </h2>
            </div>
          ))
        ) : (
          <h1 className={Style.noRecipes}>No recipes founds.</h1>
        )}
      </div>
    </div>
  )
}

export default RecipeList
