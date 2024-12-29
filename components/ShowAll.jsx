import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Style from './recipeList.module.css' // Reusing the same CSS
import arrowIcon from './right-arrow.png'
import Navigation from './Navigation'

<<<<<<< HEAD
const apiKey = '5ce733c6c24d4454ab2395b906ae5dc1' // 5253113cb6ff4e67ad11c72ec6ae2ec0 // af3ad633e574425c90e2c0ef4a4fefc0 // Replace with your actual API key
=======
const apiKey = '5ce733c6c24d4454ab2395b906ae5dc1'
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
>>>>>>> mobasshir

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

  if (loading) return <div className={Style.loaderContainer}>
        <p className={Style.loader}></p>
      </div>  

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
