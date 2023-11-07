
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';



const PrivateRepo = ({children}) => {

    const {user,loading}=useContext(AuthContext);
    console.log(user);

    if(loading){
        return(
         <div>
            <span className="loading loading-ball loading-lg"></span>
         </div>
        )
    }

    if(user){
        return children;
    }

    return  <Navigate to={'/res'} ></Navigate>;
};

export default PrivateRepo;