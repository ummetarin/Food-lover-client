

const dltOrder = ({data,handledlt}) => {

    // const {_id,name,image,price}=data||{}

    return (
        <div>
             <div>
         <div className=' font-bold'>
            <div className="card card-compact w-[400px] h-[500px]  shadow-xl">
             <figure><img className='w-[350px]' src={image} alt="Shoes" /></figure>
             <div className="card-body">
            <h1 className='text-xl mt-4 '>{name}</h1>    
            <h1 className='text-xl mt-2'>{price}</h1>
            <div className="card-actions justify-center">
          <div>
            <button onClick={()=>handledlt(_id)} className='bg-red-500  text-2xl text-white rounded-md  btn'>Delete</button>
         </div>
        
       </div>
       </div>
       </div>
    </div>
        </div>
        </div>
    );
};

export default dltOrder;