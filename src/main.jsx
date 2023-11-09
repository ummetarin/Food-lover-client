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
import Update from './UPDATEDATA/Update'
import PrivateRepo from './AuthProvider/PrivateRepo'
import FoodPurchase from './foodpurchse/FoodPurchase'



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
      loader:()=>fetch('https://ass-11-server-side-tau.vercel.app/count')
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
     element:<PrivateRepo><Details></Details></PrivateRepo>,
     loader:({params})=>fetch(`https://ass-11-server-side-tau.vercel.app/allresfood/${params.id}`)
    },{
      path:"/orpage",
      element:<PrivateRepo><OrderData></OrderData></PrivateRepo>,
    },{
      path:"/addele",
      element:<PrivateRepo><AddAFoodItems></AddAFoodItems></PrivateRepo>
    },{
      path:"/seeadddata",
      element:<PrivateRepo><AddWork></AddWork></PrivateRepo>
    },
      {
        path:'/foodpurchase/:id',
        element:<FoodPurchase></FoodPurchase>,
        loader:({params})=>fetch(`https://ass-11-server-side-tau.vercel.app/allresfood/${params.id}`)
      },

    
    {
      path:"/update/:id",
      element:<PrivateRepo><Update></Update></PrivateRepo>,
      loader:({params})=>fetch(`https://ass-11-server-side-tau.vercel.app/adddata/${params?.id}`)
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
