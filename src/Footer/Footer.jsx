import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { motion } from "framer-motion";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mt-44 font-bold">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        {/* Add animations to the navigation items */}
      </footer>
      <div className="bg-base-200 flex md:flex-row flex-col justify-center md:gap-44">
        <div>
          <img
            className="w-[350px] h-[300px]"
            src="https://i.ibb.co/jbzXjKz/resfood.jpg"
            alt=""
          />
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-red-950 md:mb-8"
          >
            24 Hour Available For Everyone
          </motion.h1>
          <img className="h-36 w-36" src="https://i.ibb.co/vBdgs8T/logo.jpg" alt="" />
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-red-950 md:mb-6"
          >
            Address: Chittagong, Khilgao city, Beside the EMC Road
          </motion.h1>
          <u>
            <a href="">Contact us with Facebook, Instagram, Whatsapp</a>
          </u>
          <h1>Email of user: {user?.email}</h1>
          <img
            className="h-36 md:mt-8 w-36"
            src="https://i.ibb.co/n74WGBn/loggggg.jpg"
            alt=""
          />
        </div>
      </div>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <motion.svg
            whileHover={{ scale: 1.1 }}
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your SVG path here */}
          </motion.svg>
          <p>ACME Industries Ltd. <br /> Providing reliable tech since 1992</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Your SVG path here */}
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Your SVG path here */}
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Your SVG path here */}
              </svg>
            </motion.a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
