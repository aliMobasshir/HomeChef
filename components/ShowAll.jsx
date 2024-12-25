import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Style from './recipeList.module.css' // Reusing the same CSS
import arrowIcon from './right-arrow.png'
import Navigation from './Navigation'

const apiKey = '0d0e212f1a904e9cb772072f49167a4b' // 5253113cb6ff4e67ad11c72ec6ae2ec0 // af3ad633e574425c90e2c0ef4a4fefc0 // // 3036c2facd2447e380f01fd8061794c4 Replace with your actual API key

const ShowAll = () => {
  const { type, name } = useParams()
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)

  const endpoint = `https://api.spoonacular.com/recipes/complexSearch?${type}=${name}&apiKey=${apiKey}&number=200`

  useEffect(() => {
    async function fetchRecipes () {
      try {
        const response = await fetch(endpoint)
        if (!response.ok)
          throw new Error(`An error has occurred: ${response.status}`)
        const data = await response.json()
        setRecipes(data.results || [])
        setLoading(false)
      } catch (error) {
        setError(error.message)
      }
    }

    fetchRecipes()
  }, [type, name])

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  )

  if (error) return <p>Error: {error}</p>

  if (loading) return <p>Loading...</p>

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
                <Link
                  to={`/image/${type}/${name}/${recipe.id}`}
                  key={recipe.id}
                >
                  <div className={Style.recipeCard}>
                    <img src={recipe.image} alt={recipe.title} />
                    <h2>
                      <span>{recipe.title}</span>
                    </h2>
                  </div>
                </Link>
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
