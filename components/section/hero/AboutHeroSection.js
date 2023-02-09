import MainSkillsAnimated from "./MainSkillsAnimated";
import { motion } from "framer-motion";
import { TextWrapper } from "@/utils/TextWrapper";

const AboutHeroSection = () => {
  return (
    <section>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:py-12 flex justify-center h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mt-9 absolute w-4/6 h-4/6 lg:h-4/12 lg:w-4/12"
            >
              <img
                alt="User"
                src="/assets/img/user.png"
                className="rounded-full"
              />
            </motion.div>
          </div>

          <div className="lg:py-24 my-4">
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span className="text-indigo-900">I'M</span>{" "}
              <span>JOHN DOE</span>
            </h2>
            <h3 className="text-lg font-bold sm:text-3xl my-3">
              <MainSkillsAnimated />
            </h3>
            <TextWrapper>
              <p className="mt-4 text-lg text-black dark:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Libero, quas aliquid ipsa molestiae consectetur assumenda odio
                nihil dolorum voluptate, architecto numquam sapiente voluptatum.
                Maiores, voluptate eum facilis quo distinctio aut corrupti
                perferendis tempora, quae rerum fugit impedit optio dolores
                veritatis sapiente eveniet!
              </p>
            </TextWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
