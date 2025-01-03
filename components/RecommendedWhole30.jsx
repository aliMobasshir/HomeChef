import React, { useEffect, useState } from 'react'
import Style from './Popular.module.css'
import { Link } from 'react-router-dom'

import apiImage from './api_error_image.gif'

const apiKeys = [
  '834e4826627e40619840c9f299b31f36',
  'f2fbb965309246e7906f64251396be87',
  '5ce733c6c24d4454ab2395b906ae5dc1',
  '5253113cb6ff4e67ad11c72ec6ae2ec0'
]

function RecommendedWhole30({ query }) {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0)
  const [usedKeys, setUsedKeys] = useState([])

  const type = 'type'
  const name = 'whole30'

  const fetchRecipes = async () => {
    setLoading(true)
    setError(null)

    const currentApiKey = apiKeys[currentKeyIndex]
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?diet=whole30&apiKey=${currentApiKey}&number=9`

    try {
      console.log(`Using API key: ${currentApiKey}`)
      const response = await fetch(endpoint)

      if (!response.ok) {
        console.log(`Error with API key: ${currentApiKey}, Status: ${response.status}`)
        if (response.status === 401 || response.status === 402) {
          const newIndex = currentKeyIndex + 1

          if (newIndex < apiKeys.length) {
            setUsedKeys([...usedKeys, currentApiKey])
            setCurrentKeyIndex(newIndex)
          } else {
            setError('All API keys are exhausted.')
          }
          return
        }

        throw new Error(`An error has occurred: ${response.status}`)
      }

      console.log(`Successful fetch with API key: ${currentApiKey}`)
      const data = await response.json()
      setRecipes(data.results || [])
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecipes()
  }, [currentKeyIndex])

  if (loading) {
    return (
      <div>
        <h1 className={Style.heading}>Recommended in Whole30 Diet</h1>
        <div className={Style.loader}></div>
      </div>
    )
  }

  if (error?.includes('All API keys are exhausted.')) {
    return (
      <div>
        <h1 className={Style.heading}>Recommended in Whole30 Diet</h1>
        <div className={Style.errorContainer}>
          <img src={apiImage} alt="Error" className={Style.icon} />
          <p>All API keys are exhausted. Please try again later.</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <h1 className={Style.heading}>Recommended in Whole30 Diet</h1>
        <div className={Style.errorContainer}>
          <img
            src="https://cdn.dribbble.com/users/19381/screenshots/3471308/dribbble-500-animated.gif"
            alt="Error"
            className={Style.icon}
          />
          <p>Error: {error}</p>
        </div>
      </div>
    )
  }

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
              <Link key={recipe.id} to={`/image/${type}/${name}/${recipe.id}`}>
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

        <Link to="/showall/diet/whole30">
          <button className={Style.show_all_button}>Show All</button>
        </Link>
      </div>
    </div>
  )
}

export default RecommendedWhole30
