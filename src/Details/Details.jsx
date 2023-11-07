import { useLoaderData } from "react-router-dom";

const Details = () => {
    const data=useLoaderData();
    console.log(data);
  



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
            <button  className='bg-red-500  text-1xl rounded-md text-2xl text-white btn'>Add to cart</button>
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