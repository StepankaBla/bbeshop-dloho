import React, { useEffect } from "react";
import "./About.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);
  return (
      <div className="about_container">
        <div className="contentContainer">
          <h1>Who is behind all of this?</h1>
          <div className="content_box">
            <div data-aos="fade-right" className="content_box_right">
              <p>
                The artist of these amazing colorful paintings is woman called
                <b> Barbora Blažková</b> who uses a vibrant and lively color palette in
                her work to create <b>visually stunning and expressive pieces</b>. She
                is passionate about using color as a primary means of
                communication and expression in their art, and they have a keen
                eye for choosing the right hues, shades, and tones to convey a
                particular mood or message.
              </p>
              <p>
                This talented women is able to create art that resonates with
                others, pushes boundaries, and has a lasting impact on the
                world.
              </p>
            </div>
            <div className="descPic">
              <div data-aos="fade-left" className="content_box_left_pic">
                <img src="/img/profile.jpeg" alt="" />
              </div>
              <span>Artist Barbora Blažková</span>
            </div>
          </div>
        </div>
        <div className="contentContainer">
          <h1>How our art is being made?</h1>
          <div className="content_box">
            <div data-aos="fade-right" className="content_box_left">
              <img src="/img/drawing.jpg" alt="" className="draw" />
            </div>
            <div data-aos="fade-left" className="content_box_right">
              <p>
                Painting pictures is the process of creating a{" "}
                <b>visual representation</b> using pigments (color) on a
                surface, typically canvas or paper. There are many different
                styles and techniques of painting, and artists can use a variety
                of mediums, including{" "}
                <b>oil paint, acrylic paint, watercolor, and gouache.</b>
              </p>
              <p>
                The final painting is the result of the artist's skill,
                creativity, and vision. It can be realistic or abstract,
                representational or non-representational, and can convey a wide
                range of emotions and ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
