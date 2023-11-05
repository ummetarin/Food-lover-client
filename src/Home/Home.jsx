
import Gallery from "../Gallery/Gallery";
import Section3 from "../Gallery/Section3";
import TabSection from "../Gallery/TabSection";
import Nav from "../nav/Nav";
import Navwork from "../nav/Navwork";
import Banner from "./Banner";
import Foood from "./Foood";


const Home = () => {
    return (
        <div>
            <Navwork></Navwork>
            <Nav></Nav>
            <Banner></Banner>
             <Foood></Foood>
            <TabSection></TabSection>
            <Gallery></Gallery>
            <Section3></Section3>
        
        </div>
    );
};

export default Home;