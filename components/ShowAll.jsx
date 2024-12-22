import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Style from './recipeList.module.css' // Reusing the same CSS
import arrowIcon from './right-arrow.png'
import Navigation from './Navigation'

const apiKey = 'af3ad633e574425c90e2c0ef4a4fefc0' // Replace with your actual API key

const ShowAll = () => {
  const { type, name } = useParams()
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')

  const endpoint = `https://api.spoonacular.com/recipes/complexSearch?${type}=${name}&apiKey=${apiKey}&number=200`

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(endpoint)
        if (!response.ok) throw new Error(`An error has occurred: ${response.status}`)
        const data = await response.json()
        setRecipes(data.results || [])
      } catch (error) {
        setError(error.message)
      }
    }

    fetchRecipes()
  }, [type, name])

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <Navigation setQuery={setQuery} />
      <div className={Style.topPicksPage}>
        <h1 className={Style.heading}>
           {type}: {name}'s Dishes
        </h1>

        {error ? (
          <p>Error: {error}</p>
        ) : (
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
              <h1>No recipes found.</h1>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default ShowAll
