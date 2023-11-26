import React from "react";
import "./Order.scss";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Order = () => {
  return (
    <motion.div
      animate={{ y: 100 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="orderSection"
    >
      <div className="left">
        <h1>THANK YOU FOR ORDER!</h1>
        <motion.div
          animate={{
            scale: [1, 1.2, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          {" "}
          <Link className="link" to="/">
            Go back shopping
          </Link>
        </motion.div>
      </div>
      <div className="right">
        <img src="/img/order.png" alt="" />
      </div>
    </motion.div>
  );
};

export default Order;
