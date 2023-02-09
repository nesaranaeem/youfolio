import { TextWrapper } from "@/utils/TextWrapper";
import Projects from "./Projects";
import { motion } from "framer-motion";
import Link from "next/link";
const RecentProjects = () => {
  return (
    <section className="my-2">
      <TextWrapper>
        <div className="my-4">
          <h2 className="text-3xl font-bold sm:text-4xl text-center">
            Recent Projects
          </h2>
          <p className="text-center py-4 text-lg text-black dark:text-white">
            Here is the list of some of my recent projects
          </p>
        </div>
        <Projects />
        <motion.div whileHover={{ scale: 1.02 }}>
          <div className="flex flex-col justify-center justify-items-center items-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View All
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
          </div>
        </motion.div>
      </TextWrapper>
    </section>
  );
};

export default RecentProjects;
