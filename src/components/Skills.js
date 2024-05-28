import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
//import meter3 from "../assets/img/meter3.svg";
import ColorShap from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Habilidades</h2>
              <p>
                Como desarrollador frontend, me especializo en la creación de
                interfaces de usuario atractivas y funcionales. Utilizo HTML,
                CSS y JavaScript junto con frameworks como React.js para
                construir experiencias web dinámicas y responsivas. Mi enfoque
                se centra en la usabilidad y el diseño para ofrecer productos
                que sean intuitivos y agradables para el usuario. Estoy
                constantemente explorando nuevas tecnologías y tendencias en el
                mundo del desarrollo frontend para mejorar mis habilidades y
                ofrecer soluciones innovadoras.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Diseño UI/UX</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Responsive Web Design</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Mantenimiento y solución de problemas</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>HTML5 y CSS3</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={ColorShap} alt="imagecolor" />
    </section>
  );
};
