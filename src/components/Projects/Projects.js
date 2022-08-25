import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import { PROJECTS } from '../../Constants';

import { TITLE } from '../../config/projects/project';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Container>
        <h1 className='project-heading'>{TITLE}</h1>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {PROJECTS.map((project, index) => (
            <Col md={4} className='project-card' key={index}>
              <ProjectCard
                imgPath={project.image}
                title={project.name}
                description={project.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
