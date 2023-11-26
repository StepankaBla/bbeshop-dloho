import React, { useEffect } from "react";
import "./Questions.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Questions = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);
  return (
    <div className="about_container ">
      <div className="contentContainer1 onTop">
        <h2>How is our art being made?</h2>
        <div className="content_box1">
          <p>
            <b>Color Palette Selection:</b>
            Artists choose a color palette to set the tone and mood of the
            painting, selecting primary, secondary, and additional colors.
          </p>
          <p>
            <b>Surface Preparation:</b>
            The chosen surface is prepared, typically by priming with gesso, providing a stable base for the paint.          </p>
          <p>
            <b>Layering and Mixing:</b>
            Paints are layered and mixed to create a variety of hues, employing techniques like blending, glazing, or impasto for depth and texture.          </p>
          <p>
            <b>Application Techniques:</b>
            Artists use various tools such as brushes, palette knives, or even fingers to apply paint, creating unique textures and patterns.
          </p>
          <p>
            <b>Composition and Contrast:</b>
            Attention is given to the overall composition, with artists strategically placing colors to achieve balance, and using contrast to create visual interest.          </p>
        </div>
      </div>
      <div className="contentContainer1">
        <h2>Can I request custom-made artwork or personalized pieces?</h2>
        <div className="content_box1">
          <p>
          The option for personalized paintings is available, providing you with a one-of-a-kind piece, but please be aware that the pricing will reflect the individualized nature of the artwork and the time invested in meeting your specific requirements.
          </p>
        </div>
      </div>
      <div className="contentContainer1">
        <h2>What techniques do we use?</h2>
        <div className="content_box1">
          <p>
            The artist of these amazing colorful paintings is woman called
            <b> Barbora Blažková</b> who uses a vibrant and lively color palette
            in her work to create <b>visually stunning and expressive pieces</b>
            . She is passionate about using color as a primary means of
            communication and expression in their art, and they have a keen eye
            for choosing the right hues, shades, and tones to convey a
            particular mood or message. This talented women is able to create
            art that resonates with others, pushes boundaries, and has a lasting
            impact on the world.
          </p>
        </div>
      </div>
      <div className="contentContainer1">
        <h2>What techniques do we use?</h2>
        <div className="content_box1">
          <p>
            The artist of these amazing colorful paintings is woman called
            <b> Barbora Blažková</b> who uses a vibrant and lively color palette
            in her work to create <b>visually stunning and expressive pieces</b>
            . She is passionate about using color as a primary means of
            communication and expression in their art, and they have a keen eye
            for choosing the right hues, shades, and tones to convey a
            particular mood or message. This talented women is able to create
            art that resonates with others, pushes boundaries, and has a lasting
            impact on the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
