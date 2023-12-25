import React, { useEffect } from "react";
import "./Return.scss";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Return = () => {
  return (
    <div className="about_container ">
      <div className="contentContainer1 onTop">
        <h2>1. Returns</h2>
        <div className="content_box1">
          <p>
            We want you to be completely satisfied with your purchase. If for
            any reason you are not satisfied, we will gladly accept returns
            within [number] days of the purchase date. Please read the following
            guidelines carefully to ensure a smooth return process.
          </p>
        </div>
      </div>
      <div className="contentContainer1">
        <h2>2. Eligibility Criteria</h2>
        <div className="content_box1">
          <p>
            To be eligible for a return, the item must be unused, in the same
            condition as received, and in the original packaging. Any item not
            in its original condition, damaged, or missing parts for reasons not
            due to our error may not be eligible for return.
          </p>
        </div>
      </div>
      <div className="contentContainer1">
        <h2>3. Return Process</h2>

        <div className="content_box1">
          <p>
            <b>To initiate a return, please follow these steps:</b> <br></br>
            a. Contact our customer service team at bbeshop.art@gmail.com within
            [number] days of receiving the product.
          </p>

          <p>
            b. Provide your order number, the name of the item you wish to
            return, and the reason for the return.
          </p>

          <p>
            c. Our customer service team will guide you on the next steps,
            including providing you with a return authorization and the return
            shipping address.
          </p>
        </div>
      </div>
      <div className="contentContainer1">
        <h2>4. Refund</h2>
        <div className="content_box1">
          Upon receiving and inspecting the returned item, we will notify you of
          the approval or rejection of your refund. If approved, your refund
          will be processed, and a credit will automatically be applied to your
          original method of payment within [number] days.
        </div>
      </div>
      <div className="contentContainer1">
        <h2>5. Exchanges</h2>
        <div className="content_box1">
          If you would like to exchange an item for a different one, please
          contact our customer service team. Exchanges are subject to product
          availability.{" "}
        </div>
      </div>
      <div className="contentContainer1">
        <h2>6. Shipping Costs</h2>
        <div className="content_box1">
          Return shipping costs are the responsibility of the customer, unless
          the return is due to our error or a defective product.{" "}
        </div>
      </div>
      <div className="contentContainer1">
        <h2>7. Damaged or Defective Items</h2>
        <div className="content_box1">
          If you receive a damaged or defective item, please contact us
          immediately. We will work with you to replace the item or provide a
          refund, including return shipping costs.{" "}
        </div>
      </div>
      <div className="contentContainer1">
        <h2>8. Contact Us</h2>
        <div className="content_box1">
          If you have any questions or concerns regarding our return policy,
          please contact our customer service team at bbeshop.art@gmail.com .
          Thank you for choosing BBArt. We appreciate your business!
        </div>
      </div>
    </div>
  );
};

export default Return;
