import React, { useEffect, useState } from 'react'
import Style from './Popular.module.css'
import { Link } from 'react-router-dom'
const apiKey = '834e4826627e40619840c9f299b31f36'
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

const endpoint = `https://api.spoonacular.com/recipes/complexSearch?diet=whole30&apiKey=${apiKey}&number=9&offset=21`

function RecommendedWhole30 ({ query }) {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const type = 'type'
  const name = 'whole30'

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

  if (error) return <p>Error: {error}</p>

  if (loading)  return  <div className={Style.loaderContainer}>
      <p className={Style.loader}></p>
    </div>

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
              <Link to={`/image/${type}/${name}/${recipe.id}`}>
                <div key={recipe.id} className={Style.recipeCard}>
                  <img src={recipe.image} alt={recipe.title} />
                  <h2>
                    <span>{recipe.title}</span>
                  </h2>
                </div>
              </Link>
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
