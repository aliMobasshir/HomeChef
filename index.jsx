import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import About from './components/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import cuisines from './Cuisines.js'
import ShowAll from './components/ShowAll.jsx'
import KnowMoreDiets from './components/KnowMoreDiets.jsx'
import Image from './components/Image.jsx'
import SearchIngredient from './components/SearchIngredient.jsx'
import SearchIngredientImage from './components/SearchIngredientImage.jsx'
import ExploreCategory from './components/ExploreCategory.jsx'
console.log(cuisines)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/exploreCategory',
    element: <ExploreCategory />
  },

  // {
  //   path: '/about',
  //   element: <About />
  // },
  {
    path: '/SearchIngredient',
    element: <SearchIngredient />
  },
  {
    path: '/ShowAll/:type/:name',
    element: <ShowAll />
  },
  {
    path: '/knowMoreDiets',
    element: <KnowMoreDiets />
  },
  {
    path: '/image/:type/:name/:id',
    element: <Image />
  },
  {
    path : "/searchIngredientImage/:id",
    element : <SearchIngredientImage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
