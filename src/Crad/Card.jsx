import { useEffect } from "react";
import { useState } from "react";
import CardDta from "./CardDta";


const Card = () => {
    const[services,setServices]=useState([]);

    useEffect(()=>{
      fetch('http://localhost:5000/topfood')
      .then(res=>res.json())
      .then(data=>setServices(data))
    },[])

    return (
        <div>
           <div className="flex md:flex-row flex-col justify-center  mt-12 ">
           <h1 className="text-5xl mt-12  text-center font-extrabold text-orange-600">Best Selling Food In The Restaurent</h1>
           <img className="flex md:mx-1 mx-auto" src="https://i.ibb.co/ccTbXcF/cofffff-removebg-preview.png" alt="" />
           </div>
            <p className="text-2xl text-center px-14 text-amber-800">Relish the coastal vibes at Sea Breeze Grill. With a menu inspired by the sea, we offer an array of fresh seafood and beachy cocktails, all set against a backdrop of breathtaking ocean views.

Feel free to use these titles and descriptions as inspiration for your own restaurant or for any creative project you have in mind.</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:ml-12 mt-24 grid-cols-1">
           {
            services.map(services=><CardDta key={services.FoodID} services={services}></CardDta>)
           }     
            </div> 
        </div>
        
    );
};

export default Card;