import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formDetails)
      });

      const result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (result.success) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({ success: false, message: "Something went wrong. Try again later." });
      }

    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: "Network error. Please try again." });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact illustration" />
          </Col>

          <Col md={6}>
            <h2>Get In Touch</h2>

            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="mb-3">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    required
                  />
                </Col>

                <Col sm={6} className="mb-3">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    required
                  />
                </Col>

                <Col sm={6} className="mb-3">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  />
                </Col>

                <Col sm={6} className="mb-3">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>

                <Col>
                <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    required
                />

                <div className="contact-actions">
                    <button type="submit">
                    <span>{buttonText}</span>
                    </button>

                    {status.message && (
                    <p className={status.success ? "success" : "danger"}>
                        {status.message}
                    </p>
                    )}
                </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
