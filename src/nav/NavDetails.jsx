import { motion } from 'framer-motion';

const NavDetails = () => {
    return (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-orange-100"
    >
      <div className="md:justify-around justify-center flex md:flex-row flex-col">
        <div className="flex md:flex-row flex-col">
          <div>
            <img
              className="h-24 w-44 md:ml-1 ml-64"
              src="https://i.ibb.co/WkFWRxd/images-removebg-preview.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-extrabold mt-8 md:ml-1 ml-64 text-3xl text-black">
              W<span className="text-orange-900">E</span>LCO
              <span className="text-orange-900">M</span>E
            </h1>
          </div>
        </div>
        <div>
          <h1 className="font-extrabold mt-8 md:ml-1 ml-56 md:mb-1 mb-4 text-3xl text-orange-600">
            RESTAURANT || FOOD PURCHASE PAGE
          </h1>
        </div>
      </div>
    </motion.div>
    );
};

export default NavDetails;