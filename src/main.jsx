import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home'
import MainOutlet from './MainOutlet/MainOutlet'
import Blog from './Blog/Blog'
import Error from './Error/Error'
import AllFood from './AllFood/AllFood'
import Resister from './AuthProvider/Resister'
import Login from './AuthProvider/Login'
import MyProf from './Myprofile/MyProf'


const router=createBrowserRouter([
  {
    path:"/",
    element:<MainOutlet></MainOutlet>,
    errorElement:<Error></Error>,
    children:[{
      path:"/",
      element:<Home></Home>
    },{
      path:"/blog",
      element:<Blog></Blog>
    },{
      path:'/allfood',
      element:<AllFood></AllFood>
    },{
      path:'/res',
      element:<Resister></Resister>
    },{
      path:"/log",
      element:<Login></Login>,
    },{
      path:"/myP",
      element:<MyProf></MyProf>,
    }]
  },


])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
