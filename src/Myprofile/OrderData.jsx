import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Nav from "../nav/Nav";
import Table from "./Table";
import Swal from "sweetalert2";


const OrderData = () => {
   
   const { user }=useContext(AuthContext)

  const [ord,setOrd]=useState([])

   const url=`http://localhost:5000/orderdata?email=${user?.email}`;
   useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setOrd(data))
   })
   console.log(ord);
    

    const handledlt=_id=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          .then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            fetch(``,{
                method:"DELETE"
      
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                  const fil = ord.filter(get => get._id != _id)
                  setOrd(fil)
      
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
                }
            })
      
            }
          })
         
       }
      
     // set.map(da=><Carddlt key={da.Id} handledlt={handledlt} data={da}></Carddlt>)

    return (
      
        <div>
          <div >
            <Nav></Nav>
          </div>
          <div className="overflow-x-auto text-2xl font-bold  bg-orange-300 mt-24">
  <table className="table ">
    {/* head */}
    <thead className=" text-2xl font-bold text-yellow-950">
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox bg-orange-950" />
          </label>
        </th>
        <th>Food Name</th>
        <th>Food Image</th>
        <th>Price</th>
        <th>Buyer</th>
        <th>Food Owner</th>
        <th>Delete</th>
       
      </tr>
    </thead>
    
      {/* row 1 */}
      {
        ord.map(da=><Table key={da.FoodID} setOrd={da} handledlt={handledlt}></Table>)
      }
      
    {/* foot */}
    
    
  </table>
</div>
        </div>
    );
};

export default OrderData;