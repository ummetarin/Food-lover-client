

const SeeData = ({setData}) => {

    const{_id,AddBy,Category,Foodname,Image,Describtion,Origin,Quantity,Price}=setData||{}
    return (
        <div>
          <div>
        <div className="">
    <div className="h-[480px]  bg-base-100 shadow-xl">
    <figure className=""><img className="w-[300px] h-[200px] mx-auto" src={Image} alt="Shoes" /></figure>
   <div className="text-center mb-16 font-bold">
    <p className='mt-2 mb-2  text-lime-950'></p>
     <p className='mt-2 mb-2   text-sky-950'>Food Name:{Foodname}</p>
     <p className='mt-2 mb-2 text-sky-950'>Quantity:{Quantity}</p>
     <p className='mt-2 mb-5 text-sky-950'>Category:{Category}</p>
     <p className='mt-2 mb-2 text-sky-950'>Origin:{Origin}</p>
    <button className="btn bg-orange-700 text-white mt-5 mb-4 w-44">Purchase</button>
   </div>
    </div>
    </div>
    </div>   
        </div>
    );
};

export default SeeData;