
import Card from "../Crad/Card";
import Section2 from "../Gallery/Section2";
import Section3 from "../Gallery/Section3";
import TabSection from "../Gallery/TabSection";
import Nav from "../nav/Nav";
import Navwork from "../nav/Navwork";
import Banner from "./Banner";



const Home = () => {
    return (
        <div>
            <Navwork></Navwork>
            <Nav></Nav>
            <Banner></Banner>
            <Section2></Section2>
            <Card></Card>
            <TabSection></TabSection>
            <Section3></Section3>
        
        </div>
    );
};

export default Home;