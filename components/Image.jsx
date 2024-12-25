import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './Image.module.css'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'
// import Footer from './Footer.jsx'  
const apiKey = '3544e0a87f98468883e9169172546ac1' // 834e4826627e40619840c9f299b31f36 // f2fbb965309246e7906f64251396be87 // 5ce733c6c24d4454ab2395b906ae5dc1 // 5253113cb6ff4e67ad11c72ec6ae2ec0

const Image = () => {
  const { id } = useParams()
  const [recipes, setRecipes] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const endpoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
  const baseImageUrl = 'https://spoonacular.com/cdn/ingredients_100x100/'

  useEffect(() => {
    async function fetchRecipes () {
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

    // Remove all <a> tags
    const links = tempDiv.querySelectorAll('a')
    links.forEach(link => link.remove())

    // Extract sanitized text and limit it to 6-7 sentences
    const sanitizedText = tempDiv.textContent || tempDiv.innerText || ''
    const sentences = sanitizedText.split('.')
    return sentences.slice(0, 7).join('. ') + '.'
  }
  // Loading Page 
  if (loading) {
    return <p className={style.loading}>Loading...</p>
  }

  if (error) {
    return <p className={style.error}>Error: {error}</p>
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
      <div className={style.instructionsContainer}>
        {recipes.analyzedInstructions &&
          recipes.analyzedInstructions[0] &&
          recipes.analyzedInstructions[0].steps.map((step, index) => (
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

                <div> {step.ingredients.map((ingredient, ingredientIndex) => (
                    <div key={ingredientIndex} className={style.ingredientHere}>
                      <ul className={style.ingredientList} key={ingredientIndex} >
                        <li>{ingredient.name}</li>
                      </ul>
                    </div>
                  ))}</div>
                 
                </div>
              )}

              {/* Equipment for this step in a separate div */}

              {step.equipment && step.equipment.length > 0 && (
                <div className={style.stepEquipment}>
                  <h3 className={style.equipmentStep}>
                    Equipments needed here:
                  </h3>
                  <div>
                  {step.equipment.map((equipment, equipmentIndex) => (
                    <div key={equipmentIndex} className={style.equipmentHere}>
                      <ul className={style.equipmentList} key={equipmentIndex}>
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

    </div>
      <Footer />
    </div>
    
  )
}

export default Image
