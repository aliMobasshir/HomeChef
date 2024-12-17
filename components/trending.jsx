import React, { useEffect, useState } from 'react';
import Style from './recipeList.module.css';
import flameIcon from './fire-flame.png';

// API configuration
const apiKey = '3544e0a87f98468883e9169172546ac1';
const endpoint = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6`;

function RecipeList({ query }) {
  const [recipes, setRecipes] = useState([]); // State to store recipes
  const [error, setError] = useState(null); // State to store errors
  const [loading, setLoading] = useState(true); // State to indicate loading

  useEffect(() => {
    async function fetchRecipes() {
      setLoading(true); // Start loading
      try {
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`An error occurred: ${response.status}`);
        }

        const data = await response.json();
        setRecipes(data?.recipes || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Stop loading
      }
    }

    fetchRecipes();
  }, []);

  // Filter recipes based on the query
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={Style.topPicksPage}>
      {/* Page Title */}
      <h1 className={Style.heading}>
        Trending Dishes
        <img src={flameIcon} alt="flame" className={Style.icon} />
      </h1>

      {/* Loading State */}
      {loading ? (
        <p className={Style.loading}>Loading recipes...</p>
      ) : error ? (
        <p className={Style.error}>Error: {error}</p>
      ) : filteredRecipes.length > 0 ? (
        <div className={Style.recipeContainer}>
          {filteredRecipes.map(recipe => (
            <div key={recipe.id} className={Style.recipeCard}>
              <img src={recipe.image} alt={recipe.title} />
              <h2>
                <span>{recipe.title}</span>
              </h2>
            </div>
          ))}
        </div>
      ) : (
        <h1 className={Style.noRecipes}>No recipes found.</h1>
      )}
    </div>
  );
}

export default RecipeList;
