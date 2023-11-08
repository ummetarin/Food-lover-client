import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";


const Update = () => {

const{ user }=useContext(AuthContext)
const data=useLoaderData()
console.log(data);

const {_id, Quantity,Category,Image,description,Foodname,Price,quantity,Origin} = data||{}

    const handleupdate=event=>{
        event.preventDefault();
        const form=event.target;
        const quantity=form.quantity.value;
        const foodname=form.foodname.value;
        const category=form.category.value;
        const origin=form.origin.value;
        const price=form.price.value;
        const description=form.description.value;
        const Image=form.Image.value;
        const Order={
            Foodname:foodname,
            Quantity:quantity,
            Category:category,
            Origin:origin,
            Price:price,
            Describtion:description,
            Image:Image
       }
         console.log(Order);

    
     fetch(`http://localhost:5000/updateddata/${_id}`,{
         method:'PUT',
         headers:{
          'content-type':'application/json'
         },
         body:JSON.stringify(Order),
  
     }
     )
     .then(res=>res.json())
     .then(data=>{
      console.log(data);
      if(data.modifiedCount>0){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'The Product is Updated',
          showConfirmButton: false,
          timer: 1500
        })
      }
     })
  
  
      }

      

    return (
        <div>
           <div>
           </div>

        <section className="text-gray-900 body-font relative">
<div className="container px-5 py-24 mx-auto">
<div className="flex flex-col text-center w-full mb-12">
<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Update Your Food</h1>

</div>
<div className="lg:w-1/2 md:w-2/3 mx-auto">
<form onSubmit={handleupdate}>
<div className="flex flex-wrap -m-2">

<div className="p-2 w-1/2">
<div className="relative">
 <label htmlFor="text" className="leading-7 text-sm text-gray-600">Quantity</label>
 <input type="text" defaultValue={Quantity} name="quantity" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
</div>
</div>
<div className="p-2 w-1/2">
<div className="relative">
 <label htmlFor="text" className="leading-7 text-sm text-gray-600">FoodName</label>
 <input type="text" defaultValue={Foodname}  name="foodname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
</div>
</div>

<div className="p-2 w-1/2">
<div className="relative">
 <label htmlFor="text" className="leading-7 text-sm text-gray-600">Category</label>
 <input type="text" defaultValue={Category}   name="category" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
</div>
</div>
<div className="p-2 w-1/2">
<div className="relative">
 <label htmlFor="text" className="leading-7 text-sm text-gray-600">Origin</label>
 <input type="text" defaultValue={Origin}  name="origin" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
</div>
</div>
<div className="p-2 w-1/2">
<div className="relative">
 <label htmlFor="price" className="leading-7 text-sm text-gray-600">Price</label>
 <input type="text" defaultValue={Price} name="price" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
</div>
</div>
<div className="p-2 w-full ">
<div className="relative">
 <label htmlFor="price" className="leading-7 text-sm text-gray-600">Description</label>
 <input type="text" defaultValue={description} name="description"  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
</div>
</div>
<div className="p-2 w-full ">
<div className="relative">
 <label htmlFor="price" className="leading-7 text-sm text-gray-600">Image</label>
 <input type="text" defaultValue={Image} name='Image' placeholder="Image"  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"   />
</div>
</div>


<div className="p-2 w-full">

<input  className="flex mx-auto text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" value="Add Food" />     
</div>
<div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
<a className="text-indigo-500">example@email.com</a>
<p className="leading-normal my-5">49 Smith St.
 <br />Saint Cloud, MN 56301
</p>
<span className="inline-flex">
 <a className="text-gray-500">
   <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
   </svg>
 </a>
 <a className="ml-4 text-gray-500">
   <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
   </svg>
 </a>
 <a className="ml-4 text-gray-500">
   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
     <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
     <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
   </svg>
 </a>
 <a className="ml-4 text-gray-500">
   <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
   </svg>
 </a>
</span>
</div>
</div>
</form>
</div>

</div>
</section>
        </div>
    );
};

export default Update;