import { motion, AnimatePresence } from "framer-motion";

export const TextWrapper = ({ children }) => (
  <>
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);
