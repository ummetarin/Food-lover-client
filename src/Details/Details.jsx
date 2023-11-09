import { useContext, useState } from "react";
import {  Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Nav from "../nav/Nav";
import Navdes from "./Navdes";
import Swal from "sweetalert2";

const Details = () => {
    const data=useLoaderData();
    console.log(
      data
    );
    const { user }=useContext(AuthContext);
    
  


    return (
        <div>
          <div>
            <Navdes></Navdes>
          </div>
          <div>
            <Nav></Nav>
          </div>

        {
          
<div className=' font-bold'>
                 

            <div className=" bg-amber-100 card card-compact lg:w-[1400px] lg:h-[900px]  md:w-[1400px] md:h-[900px]   w-[500px] h-[500px]    shadow-xl mt-14 mx-auto">
             <figure><img className='lg:w-[800px] mt-8 lg:h-[500px] md:w-[800px] md:h-[500px] w-[300px] h-[400px]  mx-auto' src={data.Image} alt="Shoes" /></figure>
             <div className="card-body ml-6 ">
            <h1 className='text-2xl  mt-4 '>Food Name:{data.FoodName}</h1>    
            <h1 className='text-2xl mt-2 '>Price:{data.Price}</h1>
            <h1 className='text-2xl mt-2'>Category:{data.Category}</h1>
            <h1 className='text-2xl mt-2'>Origin:{data.Origin}</h1>
            <h1 className='text-2xl mt-2'>{data.Description}</h1>

            <div className="card-actions lg:justify-center md:justify-center justify-start font-bold ">
           
            <div>
            <Link to={`/foodpurchase/${data.FoodID}}`}><button className="Btn btn">
                        Order Food </button></Link>
           
  
           </div>
           
         
    </div>
  </div>
</div>
        </div>
        }


        </div>
    );
};

export default Details;