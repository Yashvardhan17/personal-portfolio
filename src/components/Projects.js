import { Container, Row, Col, Nav, Tab} from "react-bootstrap";

import TrackVisibility from "react-on-screen";

import 'animate.css';

import { ProjectCard } from "./ProjectCard";

import IBA from "../assets/img/InstagramBackendAPI.png"; 
import CPA from "../assets/img/CryptoPriceAlert.png";
import TRS from "../assets/img/TransactionReconciliation.png";
import BMTS from "../assets/img/BankDD.png";
import PM from "../assets/img/PassMan.png";


import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

const backendProjects = [
  {
    title: "Instagram Backend API",
    description: "GoLang • MongoDB • REST APIs",
    imgUrl: IBA,
    githubUrl: "https://github.com/Yashvardhan17/InstagramBackendAPI",
  },
  {
    title: "Crypto Price Alert System",
    description: "Python • Flask • PostgreSQL • Email Alerts",
    imgUrl: CPA,
    githubUrl: "https://github.com/Yashvardhan17/Crypto-Price-Alert",
  },
  {
    title: "Transaction Reconciliation Service",
    description: "Python • Django • Financial Backend APIs",
    imgUrl: TRS,
    githubUrl: "https://github.com/Yashvardhan17/transaction-reconciliation-service",
  },
];

const financeProjects = [
  {
    title: "BankDD – Bank Money Transfer System",
    description: "Java • MySQL • Transaction Handling",
    imgUrl: BMTS,
    githubUrl: "https://github.com/Yashvardhan17/BankDD",
  },
  {
    title: "Transaction Reconciliation Service",
    description: "Python • Django • Financial Backend APIs",
    imgUrl: TRS,
    githubUrl: "https://github.com/Yashvardhan17/transaction-reconciliation-service",
  },
];

const securityProjects = [
  {
    title: "PassMan – Password Manager",
    description: "PHP • MySQL • Secure Credential Storage",
    imgUrl: PM,
    githubUrl: "https://github.com/Yashvardhan17/PassMan"
  },
];
    
return (
    <section className ="project" id="projects">

    <Container>
    <Row>
    <Col>
     <TrackVisibility>
                            {( { isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
        <h2>Projects</h2>
        <p>Here are a few projects I've worked on recently. Want to see more?</p>
        </div>}
        </TrackVisibility>
        <div className="projects-tabs">
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Backend APIs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Finance & Banking</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Security & Utilities</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                         <Row>
                          {backendProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                          {financeProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Row>
                          {securityProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
        </Tab.Container>
        </div>
    </Col>
    </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2} alt=""/>
    </section>
)

}