import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from './Image.module.css';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import apiImage from './api_error_image.gif';

const apiKeys = [
  'cb830b43603108a2e1b0d922bac475a94',
  '0d0e212f1a904e9cb772072f49167a4b',
  '834e4826627e40619840c9f299b31f36',
  'f2fbb965309246e7906f64251396be87',
  '25a0399599c74ee1bf6d2193351c8ec6',
];

const Image = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0); // Tracks current API key index
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);

    try {
      const currentApiKey = apiKeys[currentKeyIndex];
      console.log(`Using API Key: ${currentApiKey}`);
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${currentApiKey}`
      );

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
          {recipes.extendedIngredients ? (
            recipes.extendedIngredients.map((ingredient, index) => (
              <div key={index} className={style.ingredient}>
                <p>{ingredient.name}</p>
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                  alt={ingredient.name}
                  className={style.ingredientImage}
                />
              </div>
            ))
          ) : (
            <p>No ingredients available.</p>
          )}
        </div>

        <h1 className={style.instructionsHeading}>Instructions:</h1>
        {recipes.analyzedInstructions &&
        recipes.analyzedInstructions.length > 0 ? (
          recipes.analyzedInstructions.map((instruction, instructionIndex) =>
            instruction.steps &&
            instruction.steps.length > 0 && (
              <div
                key={instructionIndex}
                className={style.instructionsContainer}
              >
                {instruction.steps.map((step, index) => (
                  <div key={index} className={style.instructionContainer}>
                    <div className={style.instruction}>
                      <h2>Step {index + 1}:</h2>
                      <p>{step.step}</p>
                    </div>

                    {/* Ingredients used in this step */}
                    {step.ingredients && step.ingredients.length > 0 && (
                      <div className={style.stepIngredients}>
                        <h3>Ingredients used in this step:</h3>
                        <ul>
                          {step.ingredients.map((ingredient, ingredientIndex) => (
                            <li key={ingredientIndex}>{ingredient.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Equipment needed for this step */}
                    {step.equipment && step.equipment.length > 0 && (
                      <div className={style.stepEquipment}>
                        <h3>Equipment needed for this step:</h3>
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

export default Image;
