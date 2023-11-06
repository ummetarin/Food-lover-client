import React from 'react';
import { Link } from 'react-router-dom';

const AllFoodData = ({ services}) => {
    
const{FoodName,FoodID,Image,Price,Category,MadeBy,Origin,Quantity} = services||{};
    return (
        <div>
        <div className="">
    <div className="h-[480px]  bg-base-100 shadow-xl">
    <figure className=""><img className="w-[300px] h-[200px] mx-auto" src={Image} alt="Shoes" /></figure>
   <div className="text-center mb-16 font-bold">
    <p className='mt-2 mb-2 text-red-800'>{FoodName}</p>
     <p className='mt-2 mb-2 text-red-800'>Price:{Price}</p>
     <p className='mt-2 mb-2 text-red-800'>Quantity:{Quantity}</p>
     <p className='mt-2 mb-5 text-red-800'>Category:{Category}</p>
   <Link to={`/`}> <button className="btn  btn-neutral mb-4 w-44">Details</button></Link>
   </div>
    </div>
    </div>
    </div>
    );
    
};

export default AllFoodData;