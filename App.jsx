import React, { useState } from "react";
import Render from "./components/Render.jsx";
import Navigation from "./components/Navigation.jsx";
import Main from "./components/Main.jsx";
import Body from "./components/Body.jsx";
import RecipeList from "./components/recipeList.jsx";
import ReviewPage from "./components/reviewPage.jsx";
import TrendingList from "./components/trending.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import SearchResult from "./components/SearchResult.jsx";

const App = () => {
  const [query, setQuery] = useState(""); // Query state that will be passed down to components

  return (
    <>
      {/* Pass setQuery to Navigation component */}
      <Navigation setQuery={setQuery} />

      {/* Conditionally render based on query */}
      {query ? (
        // If there is a query, show SearchResult
        <SearchResult query={query} />
      ) : (
        // If there is no query, show other components
        <>
          <Main query={query} />
          <Body query={query} />
          <RecipeList query={query} />
          <ReviewPage query={query} />
          <TrendingList query={query} />
          <FAQ query={query} />
          <Footer query={query} />
        </>
      )}
    </>
  );
};

export default App;
