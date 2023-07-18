import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/inventory.png";
import projImg2 from "../assets/img/ERP.PNG";
import projImg3 from "../assets/img/react-library.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Inventory Management Tools",
      description:
        "A Software that helps businesses track and manage their inventory",
      imgUrl: projImg1,
    },
    {
      title: "SERPENT 'Small ERP For Enterprises'",
      description: "A Web-Application ERP for micro and small enterprises",
      imgUrl: projImg2,
    },
    {
      title: "React UI Library",
      description:
        "A Collection of reusable user interface components designed specifically for scientific research applications at Formulatrix.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {() => (
                <div>
                  <h2>Projects</h2>
                  <p>
                    Below are some projects that I have built, either
                    individually or in collaboration with a team of experts with
                    diverse backgrounds. These projects showcase my technical
                    abilities and my experience working on challenging problems.
                    Each project represents a unique problem-solving
                    opportunity, and I am proud of the results achieved.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web-Based</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mini-Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mobile-App</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>None</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>None</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg-img-side"></img>
    </section>
  );
};
