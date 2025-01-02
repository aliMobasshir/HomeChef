import React, { useEffect, useState } from 'react'
import Style from './recipeList.module.css'
import RandomIcon from './Random_icon.png'
import apiImage from './api_error_image.gif'
import { Link } from 'react-router-dom'

const apiKeys = [
  '834e4826627e40619840c9f299b31f36',
  'cb830b43603108a2e1b0d922bac475a945a8404a',
  '0d0e212f1a904e9cb772072f49167a4b',
  'f2fbb965309246e7906f64251396be87',
  '5ce733c6c24d445ab2395b906ae5dc1',
  '5253113cb6ff4e67ad11c72ec6ae2ec0',
  'd2a320ed5a3a463ca1b8dce923cd49dc',
  'af3ad633e574425c90e2c0ef4a4fefc0',
  '3544e0a87f98468883e9169172546ac1',
  '716d2d891ccc4e788b471c105f5928e8',
  '3036c2facd2447e380f01fd8061794c4'
]

function RecipeList ({ query }) {
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0)
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  const [usedKeys, setUsedKeys] = useState([])

  const fetchRecipes = async () => {
    const currentApiKey = apiKeys[currentKeyIndex]
    const endpoint = `https://api.spoonacular.com/recipes/random?apiKey=${currentApiKey}&number=6`

    try {
      const response = await fetch(endpoint)

      if (!response.ok) {
        // Handle 402 or 401 errors and rotate the API key
        if (response.status === 402 || response.status === 401) {
          const newIndex = currentKeyIndex + 1

          if (newIndex < apiKeys.length) {
            // Move current key to `usedKeys` and update `currentKeyIndex`
            console.log('Api', apiKeys[currentKeyIndex])
            setUsedKeys([...usedKeys, currentApiKey])
            setCurrentKeyIndex(newIndex)
          } else {
            // All API keys are exhausted
            setError('All API keys are exhausted.')
          }
        } else {
          throw new Error(`An error has occurred: ${response.status}`)
        }
      } else {
        const data = await response.json()
        setRecipes(data.recipes)
        console.log('Api', apiKeys[currentKeyIndex])
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecipes()
  }, [currentKeyIndex])

  console.log(error) // Log error for debugging

  if (error && error.includes('All API keys are exhausted.'))
    return (
      <div>
        <div className={Style.topPicksPage}>
          <h1 className={Style.heading}>
            Random Picks
            <img src={RandomIcon} alt='arrow' className={Style.icon} />
          </h1>
        </div>
        <div className={Style.errorContainer}>
          <p>{error}</p>
        </div>
      </div>
    )

  if (
    error?.includes('401') ||
    error?.includes('503') ||
    error?.includes('504')
  ) {
    return (
      <div>
        <div className={Style.topPicksPage}>
          <h1 className={Style.heading}>
            Random Picks
            <img src={apiImage} alt='arrow' className={Style.icon} />
          </h1>
        </div>
        <div className={Style.errorContainer}>
          <img
            src='https://cdn.dribbble.com/users/19381/screenshots/3471308/dribbble-500-animated.gif'
            alt='loading'
            className={Style.icon}
          />
          <p>
            Failed to fetch recipe data due to a server error. Please try again
            later.
          </p>
        </div>
      </div>
    )
  }

  if (loading)
    return (
      <div>
        <div className={Style.topPicksPage}>
          <h1 className={Style.heading}>
            Random Picks
            <img src={RandomIcon} alt='arrow' className={Style.icon} />
          </h1>
        </div>
        <div className={Style.loader}></div>
      </div>
    )

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className={Style.topPicksPage}>
      <h1 className={Style.heading}>
        Random Picks
        <img src={RandomIcon} alt='arrow' className={Style.icon} />
      </h1>
      <div className={Style.recipeContainer}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <Link key={recipe.id} to={`/searchIngredientImage/${recipe.id}`}>
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
    </div>
  )
}

export default RecipeList
