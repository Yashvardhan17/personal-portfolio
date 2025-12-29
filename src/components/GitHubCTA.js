import { Container, Row, Col } from "react-bootstrap";
import githubIcon from "../assets/img/github.svg"; // add icon

export const GitHubCTA = () => {
  return (
    <section className="github-cta">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8}>
            <h4>Check out my work on GitHub</h4>
            <p>Open-source projects, experiments, and real-world code.</p>
          </Col>

          <Col xs={12} md={4} className="text-md-end">
            <a
              href="https://github.com/Yashvardhan17"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <img src={githubIcon} alt="GitHub" />
              Visit GitHub
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
