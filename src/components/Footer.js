import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                  <Col sm={6} >
                    <img src={logo} alt="logo"/>
                  </Col>
                  <Col sm={6} className="text-center text-sm-end">
                   <div className="social-icon">
                    <a href="https://www.linkedin.com/in/erik-alexis-hernandez-guerra-8a4863296/"><img src={navIcon1} alt="Descripción de la imagen 1"></img></a>
                    <a href="https://www.facebook.com/Erik21Guerra/"><img src={navIcon2} alt="Descripción de la imagen 2" ></img></a>
                    <a href="https://www.instagram.com/erik21guerra/"><img src={navIcon3} alt="Descripción de la imagen 3"></img></a>
                   </div>
                   <p>CopyRight 2024 derechos reservados </p>
                  </Col>
                </Row>
            </Container>
        </footer>
    )
}