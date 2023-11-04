import { Link } from "react-router-dom";


const Cardpart = () => {
    return (
        <div>
            <div className="">
        <div className="  bg-base-100 shadow-xl">
        <figure className=""><img className="w-[300px] h-[200px] mx-auto" src='' alt="Shoes" /></figure>
       <div className="text-center mb-16">
         <p>price</p>
         <p>title</p>
            {/* create  a router path */}
       <Link to={`/`}> <button className="btn btn-warning mb-4 w-44">book</button></Link>
  </div>
</div>
        </div>
        </div>
    );
};

export default Cardpart;