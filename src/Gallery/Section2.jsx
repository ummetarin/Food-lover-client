import Gallery from "./Gallery";


const Section2 = () => {
    return (
        <div className="flex md:flex-row flex-col   md:justify-around justify-center">
            <div className="md:mt-36 md:mb-72">
               <Gallery></Gallery>
            </div>
            <div className="md:mt-36 md:mb-72 mt-56"> 
                <h1 className="text-5xl text-orange-700 text-center font-bold">Speciality in Our Food items</h1>
               <ul className="text-3xl text-green-950 text-center font-bold mt-8">
                  
               <h1> 1...Healty And Hygenic</h1>
               <h1>2...Testy And Yummy</h1>
               <h1>3...Its Not Harmfull For Health</h1>
               <h1>4..Its Safe For Childs</h1>
               <div className="flex flex-row justify-center">
                 <img className="h-36 w-36" src="https://i.ibb.co/mzDyGFM/l1-removebg-preview.png" alt="" />
                 <img className="h-36 w-36" src="https://i.ibb.co/x8TWc7w/l2-removebg-preview.png" alt="" />
                 <img  className="h-36 w-36" src="https://i.ibb.co/RcTxzDf/l3-removebg-preview.png" alt="" />
                 <img className="h-44 w-44" src="https://i.ibb.co/khxj4TB/f-removebg-preview.png" alt="" />            
               </div>
               </ul>
            </div>


        </div>
    );
};

export default Section2;