import { useContext, useState } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Details = () => {
    const data=useLoaderData();
    const { user }=useContext(AuthContext);
    console.log(user);
    const OrderData={
      Image:data.Image,
      Price:data.Price,
      name:data.FoodName,
      MadeBy:data.MadeBy,
      BuyerName:user?.name,
      Origin:data.Origin,
      FoodID:data.FoodID,
      Email:user?.email,
      Quantity:data.Quantity,
    }
   
  
    let [orderd, setOrder] = useState([])
  
    const handleaddcard=()=>{
      console.log(OrderData);
      // orderd post data
      fetch("http://localhost:5000/orderdata",{
        method: 'POST',     
        headers:{
          'Content-Type': 'application/json',
        } , 
        body: JSON.stringify(OrderData),
    
      })
      .then(response => response.json())
      .then(data => setOrder(data.message))
     }
     console.log(orderd);


    return (
        <div>
        {
          
<div className=' font-bold'>
            <div className="card card-compact lg:w-[1400px] lg:h-[900px]  md:w-[1400px] md:h-[900px]   w-[500px] h-[500px]    shadow-xl mt-14 mx-auto">
             <figure><img className='lg:w-[800px] lg:h-[500px] md:w-[800px] md:h-[500px] w-[300px] h-[400px]  mx-auto' src={data.Image} alt="Shoes" /></figure>
             <div className="card-body">
            <h1 className='text-xl mt-4 '>{data.Name}</h1>    
            <h1 className='text-xl mt-2 '>Price:{data.Price}</h1>
            <h1 className='text-xl mt-2'>{data.Showdes}</h1>
            <div className="card-actions lg:justify-end md:justify-center justify-start font-bold ">
           
            <div>
          <button onClick={handleaddcard} className='bg-red-500  text-1xl rounded-md text-2xl text-white btn'>Order</button>
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