import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Style from './recipeList.module.css';
import Navigation from './Navigation';
import apiImage from './api_error_image.gif';

const apiKeys = [
  '834e4826627e40619840c9f299b31f36',
  'cb830b43603108a2e1b0d922bac475a945a8404a',
  'f2fbb965309246e7906f64251396be87',
  '25a0399599c74ee1bf6d2193351c8ec6',
];

const ShowAll = () => {
  const { type, name } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0); // Added offset for pagination
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0); // Track the current API key index
  const [usedKeys, setUsedKeys] = useState([]); // Track used keys
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);

    const currentApiKey = apiKeys[currentKeyIndex];
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?${type}=${name}&apiKey=${currentApiKey}&number=100&offset=${offset}`;

    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        // Rotate API key on 401 or 402 errors
        if (response.status === 401 || response.status === 402) {
          const newIndex = currentKeyIndex + 1;

          if (newIndex < apiKeys.length) {
            console.log('Api', apiKeys[currentKeyIndex])
            setUsedKeys([...usedKeys, currentApiKey]); // Add to used keys
            setCurrentKeyIndex(newIndex); // Rotate to the next key
          } else {
            setError('All API keys are exhausted.');
          }
          return; // Exit to retry with the next key
        }

        throw new Error(`An error has occurred: ${response.status}`);
      }

      const data = await response.json();
      setRecipes(data.results || []);
      console.log('Api', apiKeys[currentKeyIndex])
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [type, name, offset, currentKeyIndex]); // Re-fetch when offset or API key index changes

  const handleNextPage = () => {
    setOffset(prevOffset => prevOffset + 100);
  };

  const handlePreviousPage = () => {
    if (offset > 0) setOffset(prevOffset => prevOffset - 100);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading)
    return (
      <div className={Style.loaderContainer}>
        <p className={Style.loader}></p>
      </div>
    );

  if (error?.includes('All API keys are exhausted.'))
    return (
      <div>
        <div className={Style.errorContainer}>
          <img src={apiImage} alt="Error" className={Style.icon} />
          <p>All API keys are exhausted. Please try again later.</p>
        </div>
        <div className={Style.btnContainer}>
          <button className={Style.btn} onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    );

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
                <Link to={`/image/${type}/${name}/${recipe.id}`} key={recipe.id}>
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
        )}

        <div className={Style.paginationContainer}>
          <button
            className={Style.paginationBtn}
            onClick={handlePreviousPage}
            disabled={offset === 0}
          >
            Previous Page
          </button>
          <button className={Style.paginationBtn} onClick={handleNextPage}>
            Next Page
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowAll;
