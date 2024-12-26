import React, { useEffect, useState } from 'react'
import Style from './Popular.module.css'
import { Link } from 'react-router-dom'
const apiKey = '0d0e212f1a904e9cb772072f49167a4b' //af3ad633e574425c90e2c0ef4a4fefc0 //3544e0a87f98468883e9169172546ac1 0d0e212f1a904e9cb772072f49167a4b 716d2d891ccc4e788b471c105f5928e8
const endpoint = `https://api.spoonacular.com/recipes/complexSearch?type=dessert&apiKey=${apiKey}&number=9&offset=21`

function RecommendedDesserts ({ query }) {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchRecipes () {
      try {
        const response = await fetch(endpoint)
        if (!response.ok)
          throw new Error(`An error has occurred: ${response.status}`)
        const data = await response.json()
        setRecipes(data.results)
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
    <div>
      <h1 className={Style.heading}>Recommended in Desserts</h1>
      <div className={Style.RecommendedPage}>
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

        <Link to='/showall/type/dessert'>
          <button className={Style.show_all_button}>Show All</button>
        </Link>
      </div>

      <div className={Style.horizontalline}></div>
    </div>
  )
}

export default RecommendedDesserts
