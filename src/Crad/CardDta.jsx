import { Link } from "react-router-dom";


const CardDta = ({services}) => {
    const{FoodName,Image,Price,Category} = services||{};
    return (
        <div>
        <div className="">
    <div className="  bg-base-100 shadow-xl">
    <figure className=""><img className="w-[300px] h-[200px] mx-auto" src={Image} alt="Shoes" /></figure>
   <div className="text-center mb-16 font-bold">
    <p>{FoodName}</p>
     <p>Price:{Price}</p>
     <p>Category:{Category}</p>
   <Link to={`/`}> <button className="btn btn-secondary mb-4 w-44">Details</button></Link>
   </div>
    </div>
    </div>
    </div>
    );
};

export default CardDta;