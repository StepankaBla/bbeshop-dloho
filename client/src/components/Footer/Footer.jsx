import React from "react";
import "./Footer.scss";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FaPhoneVolume, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <MDBFooter className="text-center bg" color="white" bgColor="none">
      <MDBContainer className="p-4">
        <section className="pt-5 pb-4">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sing up for newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  label="Email address"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Sing up
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="4" md="6" className="mt-3 mb-8 mb-md-8">
              <h5 className="text-uppercase ">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link className="text-white" to="/">
                    home
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to="/about">
                    about
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to="/products/1">
                    painting
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to="/contact">
                    contact
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="6" className="mt-3 mb-8 mb-md-8">
              <h5 className="text-uppercase">Do you need help?</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    <FaPhoneVolume /> +420 156 897 689
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    <FaMailBulk /> bbeshop.art@gmail.com
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mt-3 mb-8 mb-md-8">
              <h5 className="text-uppercase ">Q&A</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link className="text-white" to="/questions">
                    Questions
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to="/return">
                    Returned goods
                  </Link>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
        <section className="mb-4">
          <a href="https://github.com/StepankaBla" >
            {" "}
            <MDBIcon fab icon="github ic" color="black" />
          </a>

          <a href=" https://www.instagram.com/bb__art/">
            {" "}
            <MDBIcon fab icon="instagram ic" color="black"/>
          </a>

          <a href="https://www.linkedin.com/in/%C5%A1t%C4%9Bp%C3%A1nka-bla%C5%BEkov%C3%A1-3b9733262/">
            {" "}
            <MDBIcon fab icon="linkedin-in ic"color="black" />
          </a>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 BBArt
      </div>
    </MDBFooter>
  );
};

export default Footer;
