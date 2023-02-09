import { TextWrapper } from "@/utils/TextWrapper";
import { DiReact, DiNodejs, DiMongodb, DiWordpress } from "react-icons/di";
import { motion } from "framer-motion";
import Link from "next/link";
const MainSkills = () => {
  return (
    <section className="my-2">
      <TextWrapper>
        <div className="my-4">
          <h2 className="text-3xl font-bold sm:text-4xl text-center">
            Main Skills
          </h2>
          <p className="text-center py-4 text-lg text-black dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in interdum est. Duis elementum tempor nulla sed maximus. Nullam vel rutrum neque. Pellentesque nunc libero, porta in eros eu, imperdiet congue diam. Aliquam tristique eros vel mi cursus, non maximus.
          </p>
        </div>
        <div className="py-6 flex flex-col justify-center justify-items-center items-center">
          <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <DiReact className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                React JS
              </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <DiNodejs className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                Node JS
              </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <DiMongodb className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                MongoDB
              </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <DiWordpress className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                Wordpress
              </h2>
            </motion.div>
          </div>
          <motion.div whileHover={{ scale: 1.2 }} className="my-7">
            <Link
              href="/about/#skills"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View All Skills
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </TextWrapper>
    </section>
  );
};

export default MainSkills;
