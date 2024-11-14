import React, { useEffect, useState } from 'react';
import Style from './recipeList.module.css'
import arrowIcon from './right-arrow.png';



const apiKey = '3544e0a87f98468883e9169172546ac1';
const endpoint = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6`;

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await fetch(endpoint);
                if (!response.ok) throw new Error(`An error has occurred: ${response.status}`);
                const data = await response.json();
                setRecipes(data.recipes);
            } catch (error) {
                setError(error.message);
            }
        }

        fetchRecipes();
    }, []); // Empty dependency array ensures this runs only once

    if (error) return <p>Error: {error}</p>;

    return (
        <div className={Style.topPicksPage}>
         <h1 className={Style.heading}>Today's Top picks
            <img src={arrowIcon} alt="arrow" className={Style.icon} /></h1>
             <div className={Style.recipeContainer}>
                {recipes.map(recipe => (
                    <div key={recipe.id} className={Style.recipeCard}>
                        <img src={recipe.image} alt={recipe.title}  />
                        <h2>{recipe.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeList;
