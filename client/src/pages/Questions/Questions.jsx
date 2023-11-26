import React, { useEffect } from "react";
import "./Questions.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Questions = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);
  return (
    <div className="about_container ">
      <div className="contentContainer1 onTop">
        <h2>What is our shipping and delivery process?</h2>
        <div className="content_box1">
          <p>
            "Once your order is placed, our efficient delivery system swings
            into action, ensuring prompt dispatch and reliable shipping, so you
            can eagerly anticipate the arrival of your unique piece of art."
          </p>
        </div>

        <div className="descPic que">
          <div data-aos="fade-left" className="content_box_left_pic">
            <img src="/img/del.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="contentContainer1">
        <h2>Can I request custom-made artwork or personalized pieces?</h2>
        <div className="content_box1">
          <p>
            The option for personalized paintings is available, providing you
            with a one-of-a-kind piece, but please be aware that the pricing
            will reflect the individualized nature of the artwork and the time
            invested in meeting your specific requirements.
          </p>
        </div>
      </div>
      <div className="contentContainer1">
        <h2>How is our art being made?</h2>

        <div className="content_box1">
          <p>
            <b>Color Palette Selection:</b>
            Artists choose a color palette to set the tone and mood of the
            painting, selecting primary, secondary, and additional colors.
          </p>

          <p>
            <b>Layering and Mixing:</b>
            Paints are layered and mixed to create a variety of hues, employing
            techniques like blending, glazing, or impasto for depth and texture.{" "}
          </p>

          <p>
            <b>Composition and Contrast:</b>
            Attention is given to the overall composition, with artists
            strategically placing colors to achieve balance, and using contrast
            to create visual interest.{" "}
          </p>
        </div>
        <div className="descPic que">
          <div data-aos="fade-left" className="content_box_left_pic">
            <img src="/img/desc.png" alt="" />
          </div>
        </div>
      </div>
      <div className="contentContainer1">
        <h2>What is your return and refund policy?</h2>
        <div className="content_box1">
          <p>
            Information available{" "}
            <Link className="text-black" to="/return">
              <u>here</u>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
