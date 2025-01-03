import React, { useState, useEffect } from 'react'; 
import Style from './recipeList.module.css';
import apiImage from './api_error_image.gif';
import { Link } from 'react-router-dom';

const apiKeys = [
  '834e4826627e40619840c9f299b31f36',
  'f2fbb965309246e7906f64251396be87',
  '5ce733c6c24d4454ab2395b906ae5dc1',
  '5253113cb6ff4e67ad11c72ec6ae2ec0',
  'd2a320ed5a3a463ca1b8dce923cd49dc',
  'af3ad633e574425c90e2c0ef4a4fefc0',
  '3544e0a87f98468883e9169172546ac1',
  '0d0e212f1a904e9cb772072f49167a4b',
  '716d2d891ccc4e788b471c105f5928e8',
  '3036c2facd2447e380f01fd8061794c4'
];

const SearchResult = ({ query }) => {
  const [recipes, setRecipes] = useState([]); // State to store fetched recipes
  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(false); // State to handle loading
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0); // Track the current API key index
  const [usedKeys, setUsedKeys] = useState([]); // Track used keys

  // Fetch recipes when query changes
  useEffect(() => {
    if (query.trim() === '') {
      setRecipes([]); // Clear recipes if query is empty
      return;
    }

    const fetchRecipes = async () => {
      setLoading(true); // Set loading to true at the start of fetch
      setError(null); // Reset error state

      const currentApiKey = apiKeys[currentKeyIndex];
      const endpoint = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${currentApiKey}&number=100`;

      try {
        console.log(`Using API key: ${currentApiKey}`); // Log the current API key being used
        const response = await fetch(endpoint);

        if (!response.ok) {
          console.log(`Error with API key: ${currentApiKey}, Status: ${response.status}`); // Log the error status
          // Rotate API key on 401 or 402 errors
          if (response.status === 401 || response.status === 402) {
            const newIndex = currentKeyIndex + 1;

            if (newIndex < apiKeys.length) {
              setUsedKeys([...usedKeys, currentApiKey]); // Add to used keys
              setCurrentKeyIndex(newIndex); // Rotate to the next key
            } else {
              setError('All API keys are exhausted.');
            }
            return; // Exit to retry with the next key
          }

          throw new Error(`An error occurred: ${response.status}`);
        }

        console.log(`Successful fetch with API key: ${currentApiKey}`); // Log successful fetch
        const data = await response.json();

        if (data.results) {
          setRecipes(data.results); // Set fetched recipes
        } else {
          setRecipes([]); // If no recipes found, clear the results
        }
      } catch (error) {
        setError(error.message); // Handle errors
      } finally {
        setLoading(false); // Ensure loading is false after fetch
      }
    };

    fetchRecipes();
  }, [query, currentKeyIndex]); // Re-run the effect when query or API key index changes

  // Render loading indicator while fetching data
  if (loading) {
    return (
      <div>
        <div className={Style.topPicksPage}>
          <h1 className={Style.heading}>Search Results:</h1>
        </div>
        <div className={Style.loader}></div>
      </div>
    );
  }

  // Render specific error messages based on the error code
  if (error) {
    const errorImage =
      error.includes('402')
        ? apiImage
        : 'https://cdn.dribbble.com/users/19381/screenshots/3471308/dribbble-500-animated.gif';

    const errorMessage =
      error.includes('402')
        ? 'Failed to fetch recipes due to request limit. Please try again later.'
        : 'Failed to fetch recipe data due to a server error. Please try again later.';

    return (
      <div className={Style.errorContainer}>
        <img src={errorImage} alt="error animation" className={Style.icon} />
        <p>{errorMessage}</p>
      </div>
    );
  }

  // Render recipes or "No recipes found" message
  return (
    <div className={Style.topPicksPage}>
      <h1 className={Style.heading}>Search Results:</h1>
      <div className={Style.recipeContainer}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Link to={`/searchIngredientImage/${recipe.id}`} key={recipe.id}>
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
  );
};

export default SearchResult;

