import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import apiImage from './api_error_image.gif';
import style from './SearchIngredientImage.module.css';

const apiKeys = [
  'cb830b43603108a2e1b0d922bac475a945a8404a',
  '5253113cb6ff4e67ad11c72ec6ae2ec0',
  '834e4826627e40619840c9f299b31f36',
  'f2fbb965309246e7906f64251396be87',
  '5ce733c6c24d4454ab2395b906ae5dc1',
];

const baseImageUrl = 'https://spoonacular.com/cdn/ingredients_100x100/';

const SearchIngredientImage = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);

    try {
      const currentApiKey = apiKeys[currentKeyIndex];
      const endpoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${currentApiKey}`;

      const response = await fetch(endpoint);

      if (!response.ok) {
        console.error(`Error with API Key: ${currentApiKey}, Status: ${response.status}`);
        // Rotate API key on error
        if (currentKeyIndex + 1 < apiKeys.length) {
          setCurrentKeyIndex(currentKeyIndex + 1);
        } else {
          setError('All API keys are exhausted.');
        }
        return; // Exit to retry with the next key
      }

      const data = await response.json();
      console.log(`Successful fetch with API Key: ${currentApiKey}`);
      setRecipes(data);
    } catch (error) {
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [id, currentKeyIndex]); // Retry fetch when the API key changes

  const sanitizeAndLimitSummary = (summary) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = summary;

    const links = tempDiv.querySelectorAll('a');
    links.forEach((link) => link.remove());

    const sanitizedText = tempDiv.textContent || tempDiv.innerText || '';
    const sentences = sanitizedText.split('.');
    return sentences.slice(0, 7).join('. ') + '.';
  };

  if (error) {
    return (
      <div>
        <div className={style.errorContainer}>
          <img src={apiImage} alt="Error" className={style.icon} />
          <p>{error}</p>
        </div>
        <div className={style.btnContainer}>
          <button className={style.btn} onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={style.loaderContainer}>
        <p className={style.loader}></p>
      </div>
    );
  }

  if (!recipes) {
    return <p className={style.error}>No recipe data found!</p>;
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
        {recipes.analyzedInstructions?.length > 0 ? (
          recipes.analyzedInstructions.map((instruction, instructionIndex) =>
            instruction.steps?.length > 0 && (
              <div key={instructionIndex} className={style.instructionsContainer}>
                {instruction.steps.map((step, index) => (
                  <div key={index} className={style.instructionContainer}>
                    <div className={style.instruction}>
                      <h2>Step {index + 1}:</h2>
                      <p>{step.step}</p>
                    </div>

                    {step.ingredients?.length > 0 && (
                      <div className={style.stepIngredients}>
                        <h3 className={style.ingredientStep}>Ingredients used here:</h3>
                        <ul>
                          {step.ingredients.map((ingredient, ingredientIndex) => (
                            <li key={ingredientIndex}>{ingredient.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {step.equipment?.length > 0 && (
                      <div className={style.stepEquipment}>
                        <h3 className={style.equipmentStep}>Equipment needed:</h3>
                        <ul>
                          {step.equipment.map((equipment, equipmentIndex) => (
                            <li key={equipmentIndex}>{equipment.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )
          )
        ) : (
          <p>No instructions available.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchIngredientImage;
