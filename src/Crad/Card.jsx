import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion"; // Import the motion component
import CardDta from "./CardDta";
import { Link } from "react-router-dom";

const Card = () => {
  const [services, setServices] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://ass-11-server-side-tau.vercel.app/topfood")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

   const handleBookFood = (foodId) => {
    const updatedServices = services.map((service) => {
      if (service.FoodID === foodId) {
        return {
          ...service,
          count: service.count + 1, // Increment the count for the selected food
        };
      }
      return service;
    });
    setServices(updatedServices);
  };

  const topSellingServices = services.slice().sort((a, b) => b.count - a.count);
  const topSellingProduct = topSellingServices[0];


  return (
    <div>
      <div className="flex md:flex-row flex-col justify-center mt-12 ">
        <h1 className="text-5xl mt-12 text-center font-extrabold text-orange-600">
          Best Selling Food In The Restaurent
        </h1>
        <img
          className="flex md:mx-1 mx-auto"
          src="https://i.ibb.co/ccTbXcF/cofffff-removebg-preview.png"
          alt=""
        />
      </div>
      <p className="text-2xl text-center px-14 text-amber-800">
        Relish the coastal vibes at Sea Breeze Grill. With a menu inspired by the
        sea, we offer an array of fresh seafood and beachy cocktails, all set
        against a backdrop of breathtaking ocean views.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:ml-12 mt-24 grid-cols-1">
        {services.map((service) => (
          <motion.div
            key={service.FoodID}
            whileHover={{ scale: 1.1 }} // Scale up when hovering
            whileTap={{ scale: 0.9 }} // Scale down when clicking
          >
            <CardDta services={service}></CardDta>
          </motion.div>
        ))}
      </div>

      {services.length < 6 ? (
        <div className="text-center mt-4">
          <motion.button
            whileHover={{ scale: 1.1 }} // Scale up when hovering
            whileTap={{ scale: 0.9 }} // Scale down when clicking
            className="bg-orange-600 text-white px-4 py-2 rounded-md"
            onClick={toggleShowAll}
          >
          <Link to={'/allfood'}>See More</Link>
          </motion.button>
        </div>
      ) : null}

<div className="text-center mt-4">
  {topSellingProduct ? (
    <p>Top Selling Food: {topSellingProduct.name}</p>
  ) : (
    <p>No top-selling food available</p>
  )}
</div>

    </div>
  );
};

export default Card;
