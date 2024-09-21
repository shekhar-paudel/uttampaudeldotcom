import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This is necessary for lightbox styling

export const Projects = () => {
  const [photoIndex, setPhotoIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    {
      title: "AllSky Latest",
      description: "",
      imgUrl: "https://allsky.paudel.family/current/tmp/image.jpg", // Replace with your image URL
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>All Sky</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">AllSky Latest</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">AllSky Live</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">AllSky Other</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center">
                        {
                          projects.map((project, index) => (
                            <Col key={index} md={4} className="mb-4">
                              <div className="project-img-container">
                                <img
                                  src={project.imgUrl}
                                  alt={project.title}
                                  className="project-img"
                                  onClick={() => {
                                    setPhotoIndex(index);
                                    setIsOpen(true);
                                  }}
                                />
                              </div>
                            </Col>
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="iframe-container">
                        <iframe
                          src="https://allsky.paudel.family/allsky/" // Replace with the URL you want to embed
                          title="AllSky Live"
                          width="100%"
                          height="600px"
                          frameBorder="0"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                {isOpen && (
                  <Lightbox
                    mainSrc={projects[photoIndex].imgUrl}
                    onCloseRequest={() => setIsOpen(false)}
                    imageCaption={projects[photoIndex].description}
                  />
                )}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}
