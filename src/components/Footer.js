import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

export const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  const currentYear = getCurrentYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-text align-items-center">
          <Col size={12} sm={6}>
            <div className="footer-img">
              <img style={{ width: "30%" }} src={logo} alt="Logo" />
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="footer-right">
              <div className="social-icon">
                <a href="https://github.com/muhammad-avicena">
                  <BsGithub />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-avicena/">
                  <BsLinkedin />
                </a>
                <a href="https://www.youtube.com/@MuhammadAvicena">
                  <BsYoutube />
                </a>
              </div>
              <p>© {currentYear} Muhammad Avicena. All Rights Reserved. </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
