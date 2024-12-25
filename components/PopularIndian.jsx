import React, { useEffect, useState } from 'react'
import Style from './Popular.module.css'
import PopularIndianData from '../PopularIndian.js'
import { Link } from 'react-router-dom'

const apiKey = '3036c2facd2447e380f01fd8061794c4'

function Popular ({ query }) {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const endpoint = `https://api.spoonacular.com/recipes/complexSearch?cuisine=Indian&apiKey=${apiKey}&number=9&offset=21`

  const type = 'cuisine'
  const name = 'Indian'

  useEffect(() => {
    try {
      // Directly set the `results` from imported data
      const data = PopularIndianData
      if (data.results && Array.isArray(data.results)) {
        setRecipes(data.results) // Ensure the results array is used
        setLoading(false)
      } else {
        throw new Error('No results found in data.')
      }
    } catch (error) {
      setError('Failed to load data.')
    }
  }, []) // Empty dependency array to mimic componentDidMount behavior

  if (error) return <p>Error: {error}</p>

  if (loading) return <p>Loading...</p>

  const filteredRecipes = Array.isArray(recipes)
    ? recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <div>
      <h1 className={Style.heading}>Popular in Indian</h1>
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
            <h1>No recipes found.</h1>
          )}
        </div>
        <Link to='/showall/cuisine/Indian'>
          <button className={Style.show_all_button}>Show All</button>
        </Link>
      </div>
      <div className={Style.horizontalline}></div>
    </div>
  )
}

export default Popular
