import { motion } from "framer-motion";
import { TextWrapper } from "@/utils/TextWrapper";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
const ContactHeroSection = () => {
  return (
    <section>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="py-12 flex justify-center h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="absolute w-4/6 h-4/6 lg:h-4/12 lg:w-4/12"
            >
              <img alt="contact image" src="/assets/img/contact.svg" />
            </motion.div>
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span>Contact Me</span>
            </h2>

            <TextWrapper>
              <p className="mt-4 text-lg text-black dark:text-white">
                If you have a project in mind that you would like to discuss or
                if you have any questions about my work, please feel free to
                reach out to me. I would be more than happy to talk with you and
                see how I can help bring your ideas to life.
              </p>
              <p className="mt-2 font-medium text-lg text-black dark:text-white">
                You can contact me through
              </p>
              <p className="mt-2 font-semibold text-lg text-black dark:text-white">
                Email:{" "}
                <span className="italic font-bold">hello@email.com</span>
              </p>
              <h3 className="text-center text-xl font-bold">Social</h3>
              <div className="py-4 flex flex-row justify-center justify-items-center items-center">
                <a href="https://facebook.com/#" target="_blank">
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <BsFacebook className="mr-2 w-8 h-8 text-blue-600 hover:text-black dark:text-white" />
                  </motion.div>
                </a>
                <a href="https://instagram.com/#" target="_blank">
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <BsInstagram className="mr-2 w-8 h-8 text-blue-600 hover:text-black dark:text-white" />
                  </motion.div>
                </a>
                <a href="https://github.com/#" target="_blank">
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <BsGithub className="mr-2 w-8 h-8 text-blue-600 hover:text-black dark:text-white" />
                  </motion.div>
                </a>
                <a
                  href="https://www.linkedin.com/in/#/"
                  target="_blank"
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <BsLinkedin className="mr-2 w-8 h-8 text-blue-600 hover:text-black dark:text-white" />
                  </motion.div>
                </a>
              </div>
            </TextWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
