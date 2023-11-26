import React from "react";
import "./Cart.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51Mk1iHDNbdcpmuP5nqbj5Wm14XwFvix3mEfShnIigOof2uAo5yAT2ryw1V6JgDcLKOhM8GGID5SXAt4ypz3tCmJi00i7819spo"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <motion.div
      animate={{ x: -40 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="cart"
    >
      <h3>Products in your cart</h3>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <Link className="link" to={`/product/${item.id}`}>
              {" "}
              <h4>{item.title}</h4>
              <h6>Frame: {item.desc}</h6>
            </Link>
            <div className="price">
              {item.quantity} x {item.price} Czk
            </div>
            <div className="price">
              {item.selectedImg} 
            </div>
           
            <AiOutlineDelete
              className="delete"
              onClick={() => dispatch(removeItem(item.id))}
            />
          </div>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>{totalPrice()} Czk</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset cart
      </span>
    </motion.div>
  );
};

export default Cart;
