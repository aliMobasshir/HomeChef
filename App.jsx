import React from "react"
import ReactDOM from "react-dom"

import Render from "./components/Render.jsx"
import Navigation from "./components/Navigation.jsx"
import Main from "./components/Main.jsx"
import Body from "./components/Body.jsx"


const App = () => {
  return (
    <>
      {/* <Render /> */}
      <Navigation />
      <Main />
      <Body/>
    </>
  )
}

export default App
