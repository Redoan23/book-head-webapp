import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'



const router= createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,

    children:[
      {
        path:'/',
        loader:()=>fetch('public/books/books.json'),
        element:<Home></Home>
      },
      {
        path:'/:id',
        loader:()=>fetch(`public/books/books.json`) ,
        element:<BookDetails></BookDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
