/* homepage hero section */

import MainSkillsAnimated from "./MainSkillsAnimated";
import styles from "../../../styles/HeroSection.module.css";
import { motion } from "framer-motion";
import { TextWrapper } from "@/utils/TextWrapper";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:py-12 flex justify-center h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="absolute w-4/6 h-4/6 lg:h-4/12 lg:w-4/12"
            >
              <img alt="hero image" src="/assets/img/hero-img.svg" />
            </motion.div>
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Hello!{" "}
              <span className={styles.wave} role="img">
                👋🏻
              </span>
            </h2>
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span className="text-indigo-900">I'M</span>{" "}
              <span>JOHN DOE</span>
            </h2>
            <div className="text-lg font-bold sm:text-3xl my-3">
              <MainSkillsAnimated />
            </div>
            <TextWrapper>
              <p className="mt-4 text-lg text-black dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in interdum est. Duis elementum tempor nulla sed maximus. Nullam vel rutrum neque. Pellentesque nunc libero, porta in eros eu, imperdiet congue diam. Aliquam tristique eros vel mi cursus, non maximus.
              </p>
            </TextWrapper>

            <Link href="/about">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                <span className="text-sm font-medium"> About Me </span>

                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
