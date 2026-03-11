import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router'
import RootLayout from '../components/RootLayout'
import Home from '../components/Home'
import Product from '../components/Product'
import ProductList from '../components/ProductList'
import ContactUS from '../components/ContactUS'


function App() {
  const routerObj = createBrowserRouter([
    {
      path : "/",
      element : <RootLayout />,
      children: [
        {
          path : "",
          element: <Home />
        },
        {
          path : "products",
          element : <ProductList />
        },
        {
          path : "contact",
          element : <ContactUS />
        },
        {
          path : "product",
          element : <Product />
        }
      ]
    }
  ])


  return (
    <RouterProvider router = {routerObj} />
  )
}

export default App