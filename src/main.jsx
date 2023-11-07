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
import AuthProvider from './AuthProvider/AuthProvider'
import Details from './Details/Details'
import OrderData from './Myprofile/OrderData'
import AddAFoodItems from './Myprofile/AddAFoodItems'
import AddWork from './Addwork/AddWork'


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
      element:<AllFood></AllFood>,
      loader:()=>fetch('http://localhost:5000/count')
    },{
      path:'/res',
      element:<Resister></Resister>
    },{
      path:"/log",
      element:<Login></Login>,
    },{
      path:"/myP",
      element:<MyProf></MyProf>,
    },{
     path:"/allresfood/:id",
     element:<Details></Details>,
     loader:({params})=>fetch(`http://localhost:5000/allresfood/${params.id}`)
    },{
      path:"/orpage",
      element:<OrderData></OrderData>,
    },{
      path:"/addele",
      element:<AddAFoodItems></AddAFoodItems>
    },{
      path:"/seeadddata",
      element:<AddWork></AddWork>
    }]
  },


])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </React.StrictMode>,
)
