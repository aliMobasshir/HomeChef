import React, { useEffect, useState } from 'react'
import Style from './Popular.module.css'
import { Link } from 'react-router-dom'
const apiKey = '3544e0a87f98468883e9169172546ac1' //af3ad633e574425c90e2c0ef4a4fefc0 //3544e0a87f98468883e9169172546ac1 0d0e212f1a904e9cb772072f49167a4b 716d2d891ccc4e788b471c105f5928e8
const endpoint = `https://api.spoonacular.com/recipes/complexSearch?diet=whole30&apiKey=${apiKey}&number=9&offset=5`

function RecommendedWhole30 ({ query }) {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRecipes () {
      try {
        const response = await fetch(endpoint)
        if (!response.ok)
          throw new Error(`An error has occurred: ${response.status}`)
        const data = await response.json()
        setRecipes(data.results)
        setLoading(false)
      } catch (error) {
        setError(error.message)
      }
    }

    fetchRecipes()
  }, [])

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error: {error}</p>

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <h1 className={Style.heading}>Recommended in Whole30 Diet</h1>
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

        <Link to='/showall/diet/whole30'>
          <button className={Style.show_all_button}>Show All</button>
        </Link>
      </div>
    </div>
  )
}

export default RecommendedWhole30
