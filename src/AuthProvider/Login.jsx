

import { useContext } from "react";
import Nav from "../nav/Nav";
import NavLogin from "./NavLogin";
import { AuthContext } from "./AuthProvider";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";



const Login = () => {
    const { googlesignin} = useContext(AuthContext);
  const Location = useLocation();
  const Navigation = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Validate the password directly in the JSX code
    if (password.length <6 || /[A-Z]/.test(password) || /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)) {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Invalid password! Password should have less than 6 characters, no uppercase letters, and no special characters.',
    //   });
      return;
    }

    // Initialize Firebase Authentication
    const auth = getAuth();

    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);

    //   Swal.fire('Logged in!');
      if (Location.state) {
        Navigation(Location.state);
      } else {
        Navigation('/');
      }
    } catch (error) {
      console.error(error);
  
    }
  };
  const handlegogle=()=>{
    googlesignin().then((result)=>{
     console.log(result.user);
    //  Swal.fire({
    //     text: 'Loged in successfully!',
    //   })

    })
  }
     
    return (
        <div>
            <NavLogin></NavLogin>
            <Nav></Nav>
            <div>
        

        <div className="hero mt-8 h-[400px] ">
        <div className="card  w-full max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
             
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-600 text-white">Login</button>
            </div>
    
            <div className="form-control mt-6">
              <button onClick={handlegogle} className="btn bg-red-600 text-white">Google Login</button>
            </div>
          </form>
        </div>
    </div>
    
    
    
            </div>
            
           
        </div>
    );
};

export default Login;