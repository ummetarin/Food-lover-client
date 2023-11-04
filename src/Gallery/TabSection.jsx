import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabSection = () => {
    return (
        <div className=''>
             <h1 className=' mt-16 mb-12 text-5xl text-center font-bold  text-lime-950'>RESTRURENT REVIEWS</h1>
        <p className='mb-24 text-center text-2xl font-bold t text-red-900'>Of course! I would be happy to help you with restaurant reviews. Please provide me with the name of the restaurant youre interested in, and if you have specific questions or aspects youd like me to cover in the review (e.g., food quality, service, ambiance), let me know. If youre looking for a general restaurant review template, heres one you can use as a starting point:</p>   
    <Tabs>
    <TabList className='text-2xl text-purple-800 font-bold'>
      <Tab>Food Review One</Tab>
      <Tab>Food Review Two</Tab>
      <Tab>Food Review Three</Tab>
    </TabList>

    <TabPanel>
     <div>
        <div className='mb-36 mt-24'>
        
          <div className='flex md:flex-row flex-col justify-center gap-36 font-bold '>
            <div>
                <img className='w-[320px] ' src="https://i.ibb.co/2Y3VPfF/card-5.jpg" alt="" />
            </div>
            <div>
               <h1 className='text-4xl text-green-700 mb-4'>This is Suchii...</h1>
               <p className='text-3xl text-amber-950'>Thats my Favourite food from ur Resturent</p>
               <p className='text-3xl  text-amber-950'>Its test is quite good for me</p>
               <p className='text-3xl  text-amber-950'>Specially its flavour</p>
               <img className='h-20' src="https://i.ibb.co/q0q0Tqt/rate.png" alt="" />
               <p className='text-3xl  text-amber-950'>Please try everyone this food</p>
            </div>
          </div>
        </div>
        <div>

        </div>
     </div>
    </TabPanel>

    <TabPanel>
     <div>
        <div className='mb-36 mt-24'>
      
          <div className='flex md:flex-row flex-col justify-center gap-36 font-bold'>
            <div>
                <img className='w-[350px] h-[300px] ' src="https://i.ibb.co/4Z79ypc/burg.jpg" alt="" />
            </div>
            <div>
               <h1 className='text-4xl text-orange-600 mb-4'>This is Burger...</h1>
               <p className='text-3xl text-amber-950'>Thats my Favourite food from ur Resturent</p>
               <p className='text-3xl  text-amber-950'>Its test is quite good for me</p>
               <p className='text-3xl  text-amber-950'>Specially its flavour</p>
               <img className='h-20' src="https://i.ibb.co/q0q0Tqt/rate.png" alt="" />
               <p className='text-3xl  text-amber-950'>Please try everyone this food</p>
            </div>
          </div>
        </div>
        <div>

        </div>
     </div>
    </TabPanel>
    <TabPanel>
    <div className='mb-36 mt-24'>
         
          <div className='flex md:flex-row flex-col justify-center gap-36 font-bold'>
            <div>
                <img className='w-[320px] ' src="https://i.ibb.co/sPVpCBR/ice.jpg" alt="" />
            </div>
            <div>
               <h1 className='text-4xl  text-fuchsia-950 mb-4'>This is icecream dessert...</h1>
               <p className='text-3xl text-amber-950'>Thats my Favourite food from ur Resturent</p>
               <p className='text-3xl  text-amber-950'>Its test is quite good for me</p>
               <p className='text-3xl  text-amber-950'>Specially its flavour</p>
               <img className='h-20' src="https://i.ibb.co/q0q0Tqt/rate.png" alt="" />
               <p className='text-3xl  text-amber-950'>Please try everyone this food</p>
            </div>
          </div>
        </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default TabSection;