import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import About from './components/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import cuisines from './Cuisines.js'
import ShowAll from './components/ShowAll.jsx'
import KnowMoreDiets from './components/KnowMoreDiets.jsx'
import Image from './components/Image.jsx'
console.log(cuisines)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/About',
    element: <About />
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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
