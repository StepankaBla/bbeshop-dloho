import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import "./Cookies.scss";

const Cookies = (name, ...props) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <div className="cookies">
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="bottom"
        {...props}
        scroll="true"
      >
        <Offcanvas.Header closeButton>
          <div></div>
          <Offcanvas.Title>Cookkies on BBshop</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          We use cookies on our e-shop to enhance your shopping experience and
          improve our website. Cookies are small data files that are placed on
          your device when you visit our website. They help us remember your
          preferences, analyze our website traffic, and personalize your
          shopping experience. We use both session cookies, which expire when
          you close your browser, and persistent cookies, which remain on your
          device until they expire or you delete them. We also use third-party
          cookies from trusted partners to provide you with relevant
          advertisements and analyze our marketing efforts. By using our e-shop,
          you consent to our use of cookies as described in this Cookie Policy.
          You can manage your cookie preferences at any time by adjusting the
          settings in your browser. However, please note that disabling cookies
          may limit your ability to use certain features of our e-shop. If you
          have any questions or concerns about our use of cookies, please
          contact us.
        </Offcanvas.Body>
        <Offcanvas.Header>
          <div></div>
          <Button
            onClick={handleClose}
            className="cook"
            variant="outline-secondary"
          >
            Accept cookies
          </Button>
          <div></div>
        </Offcanvas.Header>
      </Offcanvas>
    </div>
  );
};

export default Cookies;
