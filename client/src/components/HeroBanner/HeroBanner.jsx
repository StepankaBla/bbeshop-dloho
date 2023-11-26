import React from "react";
import "./HeroBanner.scss";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

export const HeroBanner = () => {
  return (
    <AnimatePresence>
      <motion.div className="heroSection">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.5 }}
          className="heroSection_box"
        >
          <div className="heroSection_box_left">
            <h2>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 90,
                  pauseFor: 3000,
                  strings: ["Want to buy some art?", "Let´s be creative!"],
                }}
              />
            </h2>
            <p>
              Welcome to our <b>art e-shop!</b> Here you will find a wide
              selection of unique and original pieces created by{" "}
              <b>talented artist.</b>
            </p>
            <p>
              Whether you're looking for a painting to brighten up your living
              room, a sculpture to add some interest to your garden, or a print
              to give as a gift, we have something for everyone. Browse our
              collection and discover the perfect piece to suit your style and
              taste.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="heroSection_box_right"
          >
            <img src="/img/art.png" alt="" className="respHero" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8 }}
          />
          <img src="/img/art2.png" alt="" className="respHero1" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
export default HeroBanner;
