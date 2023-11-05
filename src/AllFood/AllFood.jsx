import { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import NavWorkAll from "../nav/NavWorkAll";
import AllFoodData from "./AllFoodData";

const AllFood = () => {

    const[services,setServices]=useState([]);

    useEffect(()=>{
      fetch('http://localhost:5000/allresfood')
      .then(res=>res.json())
      .then(data=>setServices(data))
    },[])
    return (
        <div>
            <NavWorkAll></NavWorkAll>
            <Nav></Nav>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:ml-12 mt-24 grid-cols-1">
           {
            services.map(services=><AllFoodData key={services.FoodID} services={services}></AllFoodData>)
           }     
            </div> 
            

        </div>
    );
};

export default AllFood;