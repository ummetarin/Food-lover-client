import Gallery from "./Gallery";


const Section2 = () => {
    return (
        <div className="" >
              <div className="md:mb-6 mb-24 md:mt-[600px]">
              <div className="flex md:flex-row flex-col justify-center  mt-12 ">
           <h1 className="text-5xl mt-12  text-center font-extrabold text-orange-600">Specialty of Our Restaurents</h1>
           <img className="flex md:mx-1 mx-auto" src="https://i.ibb.co/FXNMKD2/bb-removebg-preview.png" alt="" />
           </div>
            <p className="text-2xl text-center px-14 text-amber-800">specialty restaurant means a retail establishment which primarily sells food of a single or limited variety, that may normally be consumed at, or soon after, the time of purchase irrespective of whether the establishment provides an area for on-site consumption.it serves specialty dishes that are its strength &add to the brand image. The ambiance & décor of the restaurant reflect the topic of the specialty restaurant. The dishes of a specific area of a state or a certain setof individuals are also termed as cultural cuisine.</p>
              </div>

          <div className="flex md:flex-row flex-col   md:justify-center gap-36 justify-center">
          <div className="md:mt-10 md:mb-24">
               <Gallery></Gallery>
            </div>
            <div className="md:mt-10 md:mb-24 mt-36"> 
                <h1 className="text-5xl text-orange-700 text-center font-bold md:mt-1 mt-44 ">Some Of Sprciality:</h1>
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


        </div>
    );
};

export default Section2;