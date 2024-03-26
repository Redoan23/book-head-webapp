import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'
import PagesToRead from './components/PagesToRead/PagesToRead.jsx'
import ListedBooks from './components/ListedBooks/ListedBooks.jsx'



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
      },
      {
        path:"/pagestoread",
        loader:()=>fetch(`public/books/books.json`),
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'/listedbooks',
        loader:()=> fetch(`public/books/books.json`),
        element:<ListedBooks></ListedBooks>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
