import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import logo from "../assets/img/logo.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const toRotate = ["React", "React native", "Node.js"];

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    const ticker = setInterval(tick, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated " : ""}>
                  <span className="tagline">
                    Portafolio Web de Erik Guerra{" "}
                  </span>
                  <h1>
                    {`¡Hola! Soy un desarrollador web especializado en tecnologías clave como `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    Soy un apasionado desarrollador web con una sólida formación
                    en ingeniería informática y una amplia experiencia en el
                    diseño y desarrollo de aplicaciones web y móviles. Mi
                    enfoque se centra en crear soluciones innovadoras y
                    eficientes que satisfagan las necesidades de mis clientes y
                    mejoren la experiencia del usuario. Me apasiona explorar
                    nuevas tecnologías y técnicas de programación para
                    mantenerme al tanto de las últimas tendencias y ofrecer
                    resultados de alta calidad. Con un compromiso con la
                    excelencia y la atención al detalle, me esfuerzo por superar
                    las expectativas en cada proyecto en el que trabajo. Además,
                    disfruto colaborar en equipos multidisciplinarios y aprender
                    de mis compañeros para seguir creciendo como profesional en
                    el campo de la tecnología
                  </p>
                  <button onClick={() => console.log("connect")}>
                    {" "}
                    Contactar <ArrowRightCircle size={25} />{" "}
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={logo} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
