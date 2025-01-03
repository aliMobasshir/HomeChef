import React, { useEffect, useState } from 'react'
import Style from './Popular.module.css'
import { Link } from 'react-router-dom'

import apiImage from './api_error_image.gif'

const apiKeys = [
  
  '834e4826627e40619840c9f299b31f36',
  'f2fbb965309246e7906f64251396be87',
  '5ce733c6c24d4454ab2395b906ae5dc1',
  '5253113cb6ff4e67ad11c72ec6ae2ec0',
 
]

function RecommendedDesserts({ query }) {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0) // Track the current API key index
  const [usedKeys, setUsedKeys] = useState([]) // Track used keys

  const type = 'type'
  const name = 'dessert'

  const fetchRecipes = async () => {
    setLoading(true)
    setError(null)

    const currentApiKey = apiKeys[currentKeyIndex]
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?type=dessert&apiKey=${currentApiKey}&number=9` // Fixed endpoint

    try {
      console.log(`Using API key: ${currentApiKey}`) // Log the current API key being used
      const response = await fetch(endpoint)

      if (!response.ok) {
        console.log(`Error with API key: ${currentApiKey}, Status: ${response.status}`) // Log the error status
        // Rotate API key on 401 or 402 errors
        if (response.status === 401 || response.status === 402) {
          const newIndex = currentKeyIndex + 1

          if (newIndex < apiKeys.length) {
            setUsedKeys([...usedKeys, currentApiKey]) // Add to used keys
           
            setCurrentKeyIndex(newIndex) // Rotate to the next key
          } else {
            setError('All API keys are exhausted.')
          }
          return // Exit to retry with the next key
        }

        throw new Error(`An error has occurred: ${response.status}`)
      }

      console.log(`Successful fetch with API key: ${currentApiKey}`) // Log successful fetch
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
  }, [currentKeyIndex]) // Re-fetch when API key index changes

  if (loading)
    return (
      <div>
        <h1 className={Style.heading}>Recommended in Desserts</h1>
        <div className={Style.loader}></div>
      </div>
    )

  if (error?.includes('All API keys are exhausted.'))
    return (
      <div>
        <h1 className={Style.heading}>Recommended in Desserts</h1>
        <div className={Style.errorContainer}>
          <img src={apiImage} alt="Error" className={Style.icon} />
          <p>All API keys are exhausted. Please try again later.</p>
        </div>
      </div>
    )

  if (error)
    return (
      <div>
        <h1 className={Style.heading}>Recommended in Desserts</h1>
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

        <Link to="/showall/type/dessert">
          <button className={Style.show_all_button}>Show All</button>
        </Link>
      </div>

      <div className={Style.horizontalline}></div>
    </div>
  )
}

export default RecommendedDesserts
