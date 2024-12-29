import React, { useEffect, useState } from 'react'
import Style from './recipeList.module.css'
import QuickIcon from './Quick_Recipe_icon.png'
import apiImage from './api_error_image.gif'

// API configuration

const apiKey = '3544e0a87f98468883e9169172546ac1'
//cb830b43603108a2e1b0d922bac475a945a8404a
// 834e4826627e40619840c9f299b31f36
// f2fbb965309246e7906f64251396be87
// 5ce733c6c24d4454ab2395b906ae5dc1
// 5253113cb6ff4e67ad11c72ec6ae2ec0
// d2a320ed5a3a463ca1b8dce923cd49dc
// af3ad633e574425c90e2c0ef4a4fefc0
// 3544e0a87f98468883e9169172546ac1
// 0d0e212f1a904e9cb772072f49167a4b
// 716d2d891ccc4e788b471c105f5928e8
// 3036c2facd2447e380f01fd8061794c4

const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&maxReadyTime=20&number=6&sort=random`

function RecipeList ({ query }) {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRecipes () {
      try {
        const response = await fetch(endpoint)

        if (!response.ok) {
          throw new Error(`An error has occurred: ${response.status}`)
        }

        const data = await response.json()

        // Check if the response contains 'results'
        if (data?.results) {
          setRecipes(data.results)
        } else {
          setError('No recipes found in the response.')
        }
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false) // Ensure loading state is updated even after error
      }
    }

    fetchRecipes()
  }, [])

  if (error?.includes('402'))
    return (
      <div>
        <div className={Style.topPicksPage}>
          <h1 className={Style.heading}>
            Rapid Recipes
            <img src={QuickIcon} alt='flame' className={Style.icon} />
          </h1>
        </div>
        
        <div className={Style.errorContainer}>
          <img src={apiImage} alt='arrow' className={Style.icon} />

          <p>Failed to fetch recipes Data. Please Try after Some Time</p>
        </div>
      </div>
    )

  if (
    error?.includes('401') ||
    error?.includes('503') ||
    error?.includes('504')
  )
    return (
      <div className={Style.errorContainer}>
        <img
          src='https://cdn.dribbble.com/users/19381/screenshots/3471308/dribbble-500-animated.gif'
          alt='arrow'
          className={Style.icon}
        />

        <p>
          Failed to fetch recipe data due to a server error. Please try again
          later.
        </p>
      </div>
    )

  if (loading) {
    return (
      <div className={Style.loaderContainer}>
        <p className={Style.loader}></p>
      </div>
    )
  }

  // if (error) return <p>Error: {error}</p>;

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className={Style.topPicksPage}>
      <h1 className={Style.heading}>
        Rapid Recipes
        <img src={QuickIcon} alt='flame' className={Style.icon} />
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
          <h1 className={Style.noRecipes}>No recipes found.</h1>
        )}
      </div>
    </div>
  )
}

export default RecipeList
