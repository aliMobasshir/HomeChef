import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './Image.module.css'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'

const apiKey = 'f2fbb965309246e7906f64251396be87' // f2fbb965309246e7906f64251396be87 // 3036c2facd2447e380f01fd8061794c4

const Image = () => {
  const { id } = useParams()
  const [recipes, setRecipes] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const endpoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
  const baseImageUrl = 'https://spoonacular.com/cdn/ingredients_100x100/'

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(endpoint)
        if (!response.ok) {
          throw new Error(`An error has occurred: ${response.status}`)
        }
        const data = await response.json()
        setRecipes(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchRecipes()
  }, [id])

  const sanitizeAndLimitSummary = summary => {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = summary

    const links = tempDiv.querySelectorAll('a')
    links.forEach(link => link.remove())

    const sanitizedText = tempDiv.textContent || tempDiv.innerText || ''
    const sentences = sanitizedText.split('.')
    return sentences.slice(0, 7).join('. ') + '.'
  }
  if (error) {
    return <p className={style.error}>Error: {error}</p>
  }

  if (loading) {
    return <p className={style.loading}>Loading...</p>
  }


  if (!recipes) {
    return <p className={style.error}>No recipe data found!</p>
  }

  return (
    <div>
      <Navigation />
      <div className={style.instructionPageContainer}>
        <div className={style.imagePara}>
          <div className={style.image}>
            <img src={recipes.image} alt={recipes.title || 'Recipe Image'} />
          </div>
          <div className={style.para}>
            <h2>{recipes.title}</h2>
            <p>{sanitizeAndLimitSummary(recipes.summary)}</p>
          </div>
        </div>

        <h1 className={style.ingredientHeading}>Ingredients needed:</h1>

        <div className={style.ingredientContainer}>
          {recipes.extendedIngredients.map((ingredient, index) => (
            <div key={index} className={style.ingredient}>
              <p>{ingredient.name}</p>
              <img
                src={`${baseImageUrl}${ingredient.image}`}
                alt={ingredient.name}
                className={style.ingredientImage}
              />
            </div>
          ))}
        </div>

        <h1 className={style.instructionsHeading}>Instructions:</h1>
        {recipes.analyzedInstructions && recipes.analyzedInstructions.length > 0 ? (
          recipes.analyzedInstructions.map((instruction, instructionIndex) => (
            instruction.steps && instruction.steps.length > 0 && (
              <div key={instructionIndex} className={style.instructionsContainer}>
                {instruction.steps.map((step, index) => (
                  <div key={index} className={style.instructionContainer}>
                    <div className={style.instruction}>
                      <h2>Step {index + 1}:</h2>
                      <p>{step.step}</p>
                    </div>

                    {step.ingredients && step.ingredients.length > 0 && (
                      <div className={style.stepIngredients}>
                        <h3 className={style.ingredientStep}>
                          Ingredients used here:
                        </h3>
                        <div>
                          {step.ingredients.map((ingredient, ingredientIndex) => (
                            <div key={ingredientIndex} className={style.ingredientHere}>
                              <ul className={style.ingredientList}>
                                <li>{ingredient.name}</li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.equipment && step.equipment.length > 0 && (
                      <div className={style.stepEquipment}>
                        <h3 className={style.equipmentStep}>
                          Equipments needed here:
                        </h3>
                        <div>
                          {step.equipment.map((equipment, equipmentIndex) => (
                            <div key={equipmentIndex} className={style.equipmentHere}>
                              <ul className={style.equipmentList}>
                                <li>{equipment.name}</li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )
          ))
        ) : (
          <p>No instructions available.</p>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Image
