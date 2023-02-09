import { TextWrapper } from "@/utils/TextWrapper";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiWordpress,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiBootstrap,
  DiGit,
} from "react-icons/di";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbDeviceAnalytics,
  TbShield,
} from "react-icons/tb";
import {
  SiFirebase,
  SiExpress,
  SiVisualstudiocode,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { AiFillWindows, AiFillCodepenCircle } from "react-icons/ai";

import { motion } from "framer-motion";

const AllSkills = () => {
  return (
    <section id="skills">
      <TextWrapper>
        <div className="my-4">
          <h2 className="text-3xl font-bold sm:text-4xl text-center">
            Professional Skills
          </h2>
        </div>
        <div className="py-6 flex flex-col justify-center justify-items-center items-center">
          <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <DiHtml5 className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                HTML
              </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <DiCss3 className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                CSS
              </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <DiJavascript1 className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                Java Script
              </h2>
            </motion.div>

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
              <TbBrandNextjs className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                NextJS
              </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <TbBrandTailwind className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                Tailwind CSS
              </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <DiBootstrap className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                Bootstrap
              </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <SiExpress className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                Express JS
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
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <SiFirebase className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                Firebase
              </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <DiGit className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                Git
              </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <TbDeviceAnalytics className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                Digital Marketing
              </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <TbShield className="w-16 h-16 text-green-600 dark:text-white" />
              <h2 className="text-center text-lg font-extrabold dark:text-white">
                App Testing
              </h2>
            </motion.div>
          </div>
        </div>
        <div className="my-2">
          <div className="my-4">
            <h2 className="text-3xl font-bold sm:text-4xl text-center">
              Tools I Use
            </h2>
          </div>
          <div className="py-6 flex flex-col justify-center justify-items-center items-center">
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <AiFillWindows className="w-16 h-16 text-green-600 dark:text-white" />
                <h2 className="text-center text-lg font-extrabold dark:text-white">
                  Windows
                </h2>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <SiVisualstudiocode className="w-16 h-16 text-green-600 dark:text-white" />
                <h2 className="text-center text-lg font-extrabold dark:text-white">
                  VS Code
                </h2>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <AiFillCodepenCircle className="w-16 h-16 text-green-600 dark:text-white" />
                <h2 className="text-center text-lg font-extrabold dark:text-white">
                  Codepen
                </h2>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <SiVercel className="w-16 h-16 text-green-600 dark:text-white" />
                <h2 className="text-center text-lg font-extrabold dark:text-white">
                  Vercel
                </h2>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col justify-center justify-items-center items-center w-48 h-48 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <SiNetlify className="w-16 h-16 text-green-600 dark:text-white" />
                <h2 className="text-center text-lg font-extrabold dark:text-white">
                  Netlify
                </h2>
              </motion.div>
            </div>
          </div>
        </div>
      </TextWrapper>
    </section>
  );
};

export default AllSkills;
