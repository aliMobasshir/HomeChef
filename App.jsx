import React from "react"
import ReactDOM from "react-dom"
import { useState } from "react"
import Render from "./components/Render.jsx"
import Navigation from "./components/Navigation.jsx"
import Main from "./components/Main.jsx"
import Body from "./components/Body.jsx"
import RecipeList from "./components/recipeList.jsx"


const App = () => {

  // const [query, setQuery] = useState('');
  // console.log(query);
  return (
    <>
      {/* <Render /> */}
      <Navigation  />
      <Main />
<<<<<<< HEAD
      <Body/>
      <RecipeList/>
=======
      <Body  />
>>>>>>> bfa4686694aa5ddbab7f6e642793bd31d520ac9e
    </>
  )
}

export default App
