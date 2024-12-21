import React, { useEffect, useState } from 'react';
import Style from './Popular.module.css';
import PopularIndianData from '../PopularIndian.js';

function Popular({ query }) {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Directly set the `results` from imported data
      const data = PopularIndianData;
      if (data.results && Array.isArray(data.results)) {
        setRecipes(data.results); // Ensure the results array is used
      } else {
        throw new Error("No results found in data.");
      }
    } catch (error) {
      setError("Failed to load data.");
    }
  }, []); // Empty dependency array to mimic componentDidMount behavior

  if (error) return <p>Error: {error}</p>;

  const filteredRecipes = Array.isArray(recipes)
    ? recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div>
      <h1 className={Style.heading}>Popular in Indian</h1>
      <div className={Style.RecommendedPage}>
        <div className={Style.recipeContainer}>
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map(recipe => (
              <div key={recipe.id} className={Style.recipeCard}>
                <img src={recipe.image} alt={recipe.title} />
                <h2>
                  <span>{recipe.title}</span>
                </h2>
              </div>
            ))
          ) : (
            <h1>No recipes found.</h1>
          )}
        </div>
      </div>
      <div className={Style.horizontalline}></div>
    </div>
  );
}

export default Popular;
