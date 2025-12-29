import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/img/skill1.png";
import meter2 from "../assets/img/skill2.png";
import meter3 from "../assets/img/skill3.png";
import meter4 from "../assets/img/skill4.png";
import meter5 from "../assets/img/skill5.png";

import colorSharp from "../assets/img/color-sharp.png";

import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                                <p> Technologies and tools I use to build, test, and deliver reliable software.</p>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                 <div className="item">
                  <img src={meter1} alt="Test automation skills" />
                  <h5>Test Automation</h5>
                  <span>Selenium, Playwright, PyTest</span>
                </div>

                <div className="item">
                  <img src={meter2} alt="Backend development skills" />
                  <h5>Backend Development</h5>
                  <span>Python, Java, REST APIs</span>
                </div>

                <div className="item">
                  <img src={meter3} alt="Frontend development basics" />
                  <h5>Frontend Basics</h5>
                  <span>React, HTML, CSS</span>
                </div>

                <div className="item">
                  <img src={meter4} alt="Developer tools and platforms" />
                  <h5>Tools & Platforms</h5>
                  <span>Git, Postman, Docker</span>
                </div>

                <div className="item">
                  <img src={meter5} alt="API testing and quality assurance" />
                  <h5>API & QA</h5>
                  <span>REST Assured, API Testing</span>
                </div>
                                </Carousel>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Skill icon"/>
        </section>
    )
}