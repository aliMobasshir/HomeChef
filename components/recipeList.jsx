import React, { useEffect, useState } from 'react'
import Style from './recipeList.module.css'
import arrowIcon from './right-arrow.png'

const apiKey = '716d2d891ccc4e788b471c105f5928e8'; //af3ad633e574425c90e2c0ef4a4fefc0 //3544e0a87f98468883e9169172546ac1 0d0e212f1a904e9cb772072f49167a4b 716d2d891ccc4e788b471c105f5928e8
const endpoint = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6`;

function RecipeList ({ query }) {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchRecipes () {
      try {
        const response = await fetch(endpoint)
        if (!response.ok)
          throw new Error(`An error has occurred: ${response.status}`)
        const data = await response.json()
        setRecipes(data.recipes)
      } catch (error) {
        setError(error.message)
      }
    }

    fetchRecipes()
  }, [])

  if (error) return <p>Error: {error}</p>

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className={Style.topPicksPage}>
      <h1 className={Style.heading}>
        Today's Top Picks
        <img src={arrowIcon} alt='arrow' className={Style.icon} />
      </h1>
      <div className={Style.recipeContainer}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div key={recipe.id} className={Style.recipeCard}>
              <img src={recipe.image} alt={recipe.title} />
              <h2>
                <span>{recipe.title}</span>
              </h2>
            </div>
          ))
        ) : (
          <h1>No recipes found. </h1>
        )}
      </div>
    </div>
  )
}

export default RecipeList
