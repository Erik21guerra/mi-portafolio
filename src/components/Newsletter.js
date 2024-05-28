import { Col, Form, Row, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";

export const Newsletter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({
        EMAIL: email
      });
    }
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Suscríbete a nuestro boletín</h3>
            {status === "sending" && <Alert>Enviando...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <Form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo Electrónico"
                ></input>
                <button type="submit">Enviar</button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
