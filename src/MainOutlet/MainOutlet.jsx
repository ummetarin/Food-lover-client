import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import Navwork from "../nav/Navwork";



const MainOutlet = () => {
    return (
        <div>

            <Navwork></Navwork>
            <Nav></Nav>
          <Outlet></Outlet>  
        </div>
    );
};

export default MainOutlet;