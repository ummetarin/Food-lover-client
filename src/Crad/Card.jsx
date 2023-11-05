

const Card = () => {
    return (
        <div>
           <div className="flex md:flex-row flex-col justify-center ">
           <h1 className="text-5xl mt-12  text-center font-extrabold text-orange-600">Best Selling Food In The Restaurent</h1>
           <img className="flex md:mx-1 mx-auto" src="https://i.ibb.co/ccTbXcF/cofffff-removebg-preview.png" alt="" />
           </div>
            <p className="text-2xl text-center px-14 text-amber-800">Relish the coastal vibes at Sea Breeze Grill. With a menu inspired by the sea, we offer an array of fresh seafood and beachy cocktails, all set against a backdrop of breathtaking ocean views.

Feel free to use these titles and descriptions as inspiration for your own restaurant or for any creative project you have in mind.</p>
        </div>
    );
};

export default Card;