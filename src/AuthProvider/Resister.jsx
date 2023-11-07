import { Link } from "react-router-dom";
import Nav from "../nav/Nav";
import Navres from "./Navres";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";


const Resister = () => {

    const{ createUser }=useContext(AuthContext);
  

   const handleresister=e=>{
      e.preventDefault();
   const form=e.target;
   const name=form.name.value;
   const email=form.email.value;
   const password=form.password.value;
   const Image =form.Image.value;
   if (password.length <6 || /[A-Z]/.test(password) || /[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(password)) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid password! Password should have less than 6 characters, no uppercase letters, and no special characters.',
          });
          return;
        }
   console.log(name,email,password,Image);
   
   createUser(email,password,name)
   .then(result=>{
    const user=result.user;
    console.log(user);
   })
   .catch(error=>console.log(error))

   }




    return (
        <div>
          <Navres></Navres>
           <Nav></Nav> 

           <div>
           <div>
   <div className="flex md:flex-row flex-col  justify-around ">
    <div className="mt-24 flex justify-center ">
    <div className="form-container   ">
  <p className="title">Register</p>
  <form  onSubmit={handleresister} className="form  ">
    
    <input type="email" name="email" className="input" placeholder="Email" />
    <input type="text" name="name" className="input" placeholder="Name" />
    <input type="password" name="password" className="input" placeholder="Confirm password" />
    <div className="p-2 w-full ">
<div className="relative ">
 <label htmlFor="price" className="leading-7 text-sm text-gray-600">Image</label>
 <input type="text" name='Image' placeholder="Image"  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"   />
</div>
</div>  
    <div className="mt-10">
  
</div>

    <button className="form-btn">Log in</button>
  <p className="sign-up-label">
    Dont have an account?<Link className="text-red-500 font-bol" to={'/log'}>Login</Link>
  </p>
  <div className="buttons-container">
   
    <div className="google-login-button">
      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} version="1.1" x="0px" y="0px" className="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
      </svg>
      <span>Log in with Google</span>
    </div>
  </div>
  </form>
  
</div>

      </div>
      <div>
        <img className="h-[350px] w-[400px] mt-16" src="https://i.ibb.co/pJK5D54/res.jpg" alt="" />
      </div>
                    </div>
        </div>
        </div>
        </div>
    );
};

export default Resister;