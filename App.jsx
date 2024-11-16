import React from "react"
import ReactDOM from "react-dom"

import Render from "./components/Render.jsx"
import Navigation from "./components/Navigation.jsx"
import Main from "./components/Main.jsx"
import Body from "./components/Body.jsx"
import RecipeList from "./components/recipeList.jsx"
import ReviewPage from "./components/reviewPage.jsx"
import TrendingList from "./components/trending.jsx"

const App = () => {
  return (
    <>
      {/* <Render /> */}
      <Navigation />
      <Main />
      <Body/>
      <RecipeList/>
      <ReviewPage/>
      <TrendingList/>
    </>
  )
}

export default App
