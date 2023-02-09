/* footer */
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 Nesar Ahmed Naeem . All Rights Reserved.
      </span>
      <div className="py-4 flex flex-row justify-center justify-items-center items-center">
        <a href="https://facebook.com/nesaranaeem" target="_blank">
          <motion.div whileHover={{ scale: 1.2 }}>
            <BsFacebook className="mr-2 w-5 h-5  dark:text-white" />
          </motion.div>
        </a>
        <a href="https://instagram.com/nesaranaeem" target="_blank">
          <motion.div whileHover={{ scale: 1.2 }}>
            <BsInstagram className="mr-2 w-5 h-5   dark:text-white" />
          </motion.div>
        </a>
        <a href="https://github.com/nesaranaeem" target="_blank">
          <motion.div whileHover={{ scale: 1.2 }}>
            <BsGithub className="mr-2 w-5 h-5  dark:text-white" />
          </motion.div>
        </a>
        <a href="https://www.linkedin.com/in/nesaranaeem/" target="_blank">
          <motion.div whileHover={{ scale: 1.2 }}>
            <BsLinkedin className="mr-2 w-5 h-5  dark:text-white" />
          </motion.div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
