import { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import NavWorkAll from "../nav/NavWorkAll";
import AllFoodData from "./AllFoodData";
import { useLoaderData } from "react-router-dom";

const AllFood = () => {

    const[services,setServices]=useState([]);
    const[currPage,setCurrpage]=useState(0)
    const [searchQuery, setSearchQuery] = useState("");

    const {count}=useLoaderData();
    console.log(count);
    const itempage=5;
    const numberpage=Math.ceil(count/itempage);
    console.log(numberpage);
    

    const pages=[...Array(numberpage).keys()];
    console.log(pages);

    useEffect(()=>{
      fetch(`http://localhost:5000/allresfood?pages=${currPage}&size=${itempage}`)
      .then(res=>res.json())
      .then(data=>setServices(data))
    },[currPage,itempage])

    return (
        <div>
            <NavWorkAll></NavWorkAll>
            <Nav></Nav>

          <div className="mt-16 mb-5 flex flex-col md:flex-row justify-center gap-8">
            <div>
                <h1 className="text-xl font-bold text-orange-700 mt-3">Search Your Food:</h1>
            </div>
            <div>
            <input className="w-[520px] h-[50px] text-center text-black  border-stone-900 bg-orange-100"
                type="text"
                placeholder="Search by Food Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
           />
            </div>
          </div>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:ml-12 mt-24 grid-cols-1">
           {
            services
            .filter((service) =>
            service.FoodName.toLowerCase().includes(searchQuery.toLowerCase())
             )
            .map(services=><AllFoodData key={services.FoodID} services={services}></AllFoodData>)
           }     
            </div> 
            <div className=" flex justify-center border-black mt-36">
                <p className="text-2xl font-bold mr-10 text-orange-950">Current Page is:{currPage}</p>
               
   {
      pages.map(page=><button className="btn bg-red-600 text-white ml-3"     
      onClick={()=>setCurrpage(page)}
      key={page.FoodID}>{page}</button>)
   }    
  
   </div>

        </div>
    );
};

export default AllFood;