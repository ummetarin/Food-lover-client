import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";





const MainOutlet = () => {
    return (
        <div>

          
          <Outlet></Outlet> 
          <Footer></Footer> 
        </div>
    );
};

export default MainOutlet;