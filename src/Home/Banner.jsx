import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
const Banner = () => {
    return (
        <div className="md:mb-96">
      {/* Use the motion.div component for animations */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial animation properties
        animate={{ opacity: 1, y: 0 }} // Animation when the component mounts
        exit={{ opacity: 0, y: -50 }} // Animation when the component unmounts
        transition={{ duration: 1 }} // Animation duration
        className="banner-container"
      >
        <img
          className="mx-auto w-full absolute "
          src="https://i.ibb.co/DLZ6RWF/ba.jpg"
          alt=""
        />
        <h1 className="md:pt-72 md:text-7xl px-10 text-4xl md:font-extrabold font-bold relative text-start text-red-800 mb-5">
          Flavors of the Orient
        </h1>
        <p className="md:text-xl text-sm px-10 font-extrabold relative text-green-800 text-start">
          Transport your taste buds to the shores of the Mediterranean. At
          Mediterranean Sunsets, we serve fresh seafood, aromatic spices, and
          sun-kissed flavors that evoke the essence of the Mediterranean coastline.
          For the ultimate steak experience, look no further than Sizzle & Swirl
          Steakhouse. Our perfectly aged cuts of meat are expertly grilled to your
          preference, ensuring a sizzling and satisfying meal.
        </p>
        <p className="md:text-xl text-sm px-10 font-extrabold relative text-orange-600 text-start">
          Organization your taste buds to the shores of the Mediterranean. At
          Mediterranean Sunsets, we serve fresh seafood, aromatic spices, and
          sun-kissed flavors that evoke the essence of the Mediterranean coastline.
          For the ultimate steak experience, look no further than Sizzle & Swirl
          Steakhouse. Our perfectly aged cuts of meat are expertly grilled to your
          preference, ensuring a sizzling and satisfying meal.
        </p>
        <Link to="/allfood">
          <motion.button
            whileHover={{ scale: 1.05 }} // Scale up when hovering
            whileTap={{ scale: 0.95 }} // Scale down when clicking
            className="ml-10 relative text-3xl font-bold bg-red-800 mx-auto md:mt-[50px] mb-[200px] text-white btn"
          >
            All the Food
          </motion.button>
        </Link>
      </motion.div>
    </div>
    );
};

export default Banner;