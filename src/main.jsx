import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home'
import MainOutlet from './MainOutlet/MainOutlet'
import Blog from './Blog/Blog'

const router=createBrowserRouter([
  {
    path:"/",
    element:<MainOutlet></MainOutlet>,
    children:[{
      path:"/",
      element:<Home></Home>
    },{
      path:"/blog",
      element:<Blog></Blog>
    }]
  },


])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
