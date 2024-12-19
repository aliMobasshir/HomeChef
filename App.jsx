import React from "react"
import ReactDOM from "react-dom"
import { useState } from "react"
import Render from "./components/Render.jsx"
import Navigation from "./components/Navigation.jsx"
import Main from "./components/Main.jsx"
import Body from "./components/Body.jsx"
import RecipeList from "./components/recipeList.jsx"
import ReviewPage from "./components/reviewPage.jsx"
import TrendingList from "./components/trending.jsx"
import FAQ from "./components/FAQ.jsx"
import Footer from "./components/Footer.jsx"


const App = () => {

  // const [query, setQuery] = useState('');
  const [query, setQuery] = useState('');
  console.log(query);
  return (
    <>
      {/* <Render /> */}
      <Navigation setQuery={setQuery}  />
      <Main query={query} />
      <Body query={query}/>
      <RecipeList query={query}/>
      <ReviewPage query={query}/>
      <TrendingList query={query}/>
      <FAQ query={query}/>
      <Footer query={query}/>
    </>
  )

}

export default App
