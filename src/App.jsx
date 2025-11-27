import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Hero from './pages/Hero'
import Gallery from './pages/Gallery'


function App() {
  const router = createBrowserRouter([
    {
     path: "/",
     element: <Home />,
    },
    {
      path: "hero",
      element: <Hero />,
    },
    {
      path: "gallery",
      element: <Gallery />,
    }
  ])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
