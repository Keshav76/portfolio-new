import { motion } from "framer-motion";
import { staggerContainer } from "./motion";

const SectionWrapper = (Component: any) =>
  function HOC() {
    return (
      <motion.div
        variants={staggerContainer("", "") as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Component />
      </motion.div>
    );
  };

export default SectionWrapper;
