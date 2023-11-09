import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
          <img className="w-full" src="https://i.ibb.co/rGKMYnf/er.jpg" alt="" />  
         <Link to={'/'}> <button className="btn bg-red-800 text-white">Home Page</button></Link>
        </div>
    );
};

export default Error;