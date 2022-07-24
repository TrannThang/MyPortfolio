// import projImg1 from "../assets/img/project-img1.png";
import projImg1 from "../assets/img/project11.PNG";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project2.1.png";
import projImg5 from "../assets/img/project2.2.png";
import projImg6 from "../assets/img/project2.3.png";
import projImg7 from "../assets/img/project.PNG";
import projImg8 from "../assets/img/project3.1.png";
import projImg9 from "../assets/img/project3.2.png";




import { Container, Row, Col, TabContent } from "react-bootstrap";
import { Nav,Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Project = () => {
  const projects = [
    {
      title: "Music mood list",
      description: "Show music and automatically switch songs",
      imgUrl: projImg1,
    },
    {
      title: "Music mood list",
      description: "Show music and automatically switch songs",
      imgUrl: projImg2,
    },
    {
      title: "Music mood list",
      description: "Show music and automatically switch songs",
      imgUrl: projImg3,
    },
   
  ];
  const projects1 = [
    {
      title: "News Page ",
      description: "Login,logout by token",
      imgUrl: projImg4,
    },
    {
      title: "News Page ",
      description: " Show list news, detail in news, list books",
      imgUrl: projImg5,
    },
    {
      title: "News Page ",
      description: "Create, update, delete,hide news by admin page",
      imgUrl: projImg6,
    },
   
  ];
  const projects2 = [
    {
      title: "My Portfolio ",
      description: "React JS",
      imgUrl: projImg7,
    },
    {
      title: "My Portfolio ",
      description: "React JS",
      imgUrl: projImg8,
    },
    {
      title: "My Portfolio ",
      description: "React JS",
      imgUrl: projImg9,
    },
   
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey = "first" href="#!">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tav Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" >
                 Tab Three
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <TabContent>
              <Tab.Pane eventKey="first"> 
                      <Row>
                        {
                          projects1.map((project,index)=>{
                            return (
                              <ProjectCard
                              key={index}
                              {...project}
                              />
                            )
                          })
                        }
                      </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <Row>
                        {
                          projects.map((project,index)=>{
                            return (
                              <ProjectCard
                              key={index}
                              {...project}
                              />
                            )
                          })
                        }
                      </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
              <Row>
                        {
                          projects2.map((project,index)=>{
                            return (
                              <ProjectCard
                              key={index}
                              {...project}
                              />
                            )
                          })
                        }
                      </Row>
              </Tab.Pane>

            </TabContent>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  );
};
