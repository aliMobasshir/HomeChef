import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Style from './recipeList.module.css'
import Navigation from './Navigation'
import apiImage from './api_error_image.gif'

const apiKey = '25a0399599c74ee1bf6d2193351c8ec6'
// '25a0399599c74ee1bf6d2193351c8ec6',
//834e4826627e40619840c9f299b31f36

const ShowAll = () => {
  const { type, name } = useParams()
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0) // Added offset for pagination
  const navigate = useNavigate()

  const fetchRecipes = async () => {
    setLoading(true)
    setError(null)

    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?${type}=${name}&apiKey=${apiKey}&number=50&offset=${offset}`

    try {
      const response = await fetch(endpoint)
      if (!response.ok)
        throw new Error(`An error has occurred: ${response.status}`)
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
  }, [type, name, offset]) // Re-fetch when offset changes

  const handleNextPage = () => {
    console.log(offset)
    setOffset(prevOffset => prevOffset + 50)
    console.log(offset)
  }

  const handlePreviousPage = () => {
    if (offset > 0) setOffset(prevOffset => prevOffset - 50)
  }

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  )

  if (loading)
    return (
      <div className={Style.loaderContainer}>
        <p className={Style.loader}></p>
      </div>
    )

  if (error?.includes('402'))
    return (
      <div>
        <div className={Style.errorContainer}>
          <img src={apiImage} alt='Error' className={Style.icon} />
          <p>Failed to fetch recipes data. Please try again later.</p>
        </div>
        <div className={Style.btnContainer}>
          <button className={Style.btn} onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    )

  if (
    error?.includes('401') ||
    error?.includes('503') ||
    error?.includes('504')
  )
    return (
      <div>
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

        <div className={Style.btnContainer}>
          <button className={Style.btn} onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
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
              <>
                <h1>No recipes found.</h1>
              </>
            )}
          </div>
        )}

        {error ? (
          <p>Error: {error}</p>
        ) : (
          <div className={Style.paginationContainer}>
            <button
              className={Style.paginationBtn}
              onClick={handlePreviousPage}
              disabled={offset === 0}
            >
              Previous Page
            </button>
            <button
              className={Style.paginationBtn}
              onClick={handleNextPage}
              disabled={recipes.length < 50}
            >
              Next Page
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default ShowAll
