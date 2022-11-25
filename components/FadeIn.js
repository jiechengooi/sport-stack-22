import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function FadeIn({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ delay: 0.4, type: "spring", stiffness: 40 }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 1, y: 20 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
