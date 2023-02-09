/* main layout */

import Footer from "@/components/footer/Footer";
import NavMenu from "@/components/header/NavMenu";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { HeroBgAnimation } from "@/utils/HeroBgAnimation";
export default function Main({ children }) {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <NavMenu />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          <div className="mx-auto max-w-screen-xl px-4 pt-12 sm:px-6 lg:px-8">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={HeroBgAnimation}
            />
            <main>{children}</main>
          </div>
        </motion.div>

        <Footer />
      </ThemeProvider>
    </>
  );
}
