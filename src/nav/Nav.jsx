
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
          <div>
     <div className="navbar bg-base-100 h-44 w-full shadow-lg font-bold md:flex-row flex-col ">

         <div className="flex md:flex-row flex-row gap-5 ml-3">
         <h1>CarDoctor</h1>
         <img className="rounded-lg" src="/car-doctor-resources/assets/icons/deliveryt.svg" alt="" />
         </div>
 
         <div className=" md:flex-row  gap-4 text-2xl md:ml-[500px]  ">
    
         <Link to={'/'}>Home</Link>
         <Link to={'/add'}>AddElement</Link>
         
        <Link to={'/res'}>Resister</Link>
        <Link to={'/up'}>Update</Link>
  
  </div>
  <div className="navbar-end lg:mr-36 md:mr-36 mr-52 md:mt-1 mt-3 gap-4 ">
  {/* {user?.email ? <button onClick={handlelogout}>LogOut</button>:<button><Link to={'/log'}>Login</Link></button> } */}
       <button className="btn btn-warning">SignIn</button>
       <img className="rounded-lg" src="/car-doctor-resources/assets/icons/person.svg" alt="" />
  </div>
   </div>
</div>  
        </div>
    );
};

export default Nav;