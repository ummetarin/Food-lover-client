
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Nav = () => {
    const {user,LogOut}=useContext(AuthContext)
  const handllogout=()=>{
     LogOut()
     .then(()=>{})
     .catch(err=>console.log(err))
  }

    return (
        <div>
          <div>
     <div className="navbar bg-base-100 md:h-44 h-[600px] w-full shadow-lg font-bold md:flex-row flex-col ">

         <div className="flex md:flex-row flex-row  ml-3">
         <img className="h-36 w-44" src="https://i.ibb.co/6Pg2ZZ8/logod-removebg-preview.png" alt="" />
         <h1 className='text-3xl text-orange-800 font-extrabold'>RESTAURENT</h1>
         </div>
 
         <div className=" md:flex-row flex-col  gap-10 text-md md:ml-[500px] text-orange-700  ">
    
         <Link to={'/'}>Home</Link>
         <Link to={'/allfood'}>ALLFoodItems</Link>
         
        <Link to={'/res'}>Register</Link>
        <Link to={'/blog'}>Blog</Link>
        {/* <Link to={'/myP'}>MyProfile</Link> */}
        <div className="dropdown">
       <label tabIndex={0} className=" m-1">MyProfile</label>
       <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
       <Link><li><a>My Added Food Items</a></li></Link>
       <Link to={'/addele'}> <li><a>Add a Food Items</a></li></Link>
       <Link to={'/orpage'}><li><a>Orderd Food Items</a></li></Link>
       </ul>
       </div>

  
  </div>
  <div className="navbar-end lg:mr-36 md:mr-36 mr-52 md:mt-1 mt-3 gap-4 ">
   {
    user?.email ? <button onClick={handllogout} className="btn bg-orange-500 font-bold">LogOut</button>:<Link to={'/log'}>  <button className="btn bg-orange-500 font-bold">LOGIN</button></Link>
   }
   
   
  
       <img className="rounded-lg" src="/car-doctor-resources/assets/icons/person.svg" alt="" />
  </div>
   </div>
</div>  
        </div>
    );
};

export default Nav;