import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Navworkprofile from '../nav/Navworkprofile';
import Nav from '../nav/Nav';
import SeeData from './SeeData';


const AddWork = () => {
    const { user }=useContext(AuthContext)

    const [data,setData]=useState([])
  
     const url=`https://ass-11-server-side-tau.vercel.app/adddata?email=${user?.email}`;
     useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then(data=>setData(data))
     })

    // console.log(data);
   
     
    return (
        <div>
            <div>
            <Navworkprofile></Navworkprofile>
          </div>
          <div >
            <Nav></Nav>
          </div> 
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:ml-12 mt-24 grid-cols-1'>
                {
                 data.map(da=><SeeData key={da.FoodID} setData={da} ></SeeData>)
                }
            </div>


        </div>
    );
};

export default AddWork;