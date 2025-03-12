import React, { useState, useEffect } from 'react';
import './Projects.css';
import { Card, Button, CardGroup, Row, Col } from 'react-bootstrap';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Replace 'AmitVaranasi' with your actual GitHub username
        const username = 'AmitVaranasi';
        const response = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.statusText}`);
        }

        const repos = await response.json();

        const projectDataPromises = repos.map(async (repo) => {
          const readmeResponse = await fetch(
            `https://raw.githubusercontent.com/${username}/${repo.name}/main/README.md` // Assuming README is in main branch
          );

          let description = '';
          if (readmeResponse.ok) {
            description = await readmeResponse.text();
              // Remove markdown-style headers and lists (can be improved)
             description = description.replace(/^(#+)\s+(.+)$/gm, ''); // Remove headers
             description = description.replace(/^[\-*]\s+(.+)$/gm, ''); // Remove list items
          } else {
            console.warn(`Failed to fetch README for ${repo.name}. Status: ${readmeResponse.status}`);
             description = "No Readme Found"
          }

          return {
            title: repo.name,
            description: description,
            link: repo.html_url,
          };
        });

        const projectData = await Promise.all(projectDataPromises);
        setProjects(projectData);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message || 'An error occurred while fetching projects.');
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return <div style={{textAlign:'center', marginTop:'70px'}}>Error: {error}</div>;
  }

  if (projects.length === 0) {
    return <div style={{textAlign:'center', marginTop:'70px'}}>Loading projects...</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginTop: 70 }}>
        <h1>Projects</h1>
        <h5>
          Those who plan do better than those who do not plan, even though they rarely stick to their plan. – Winston Churchill
        </h5>
      </div>
      <br />
      <hr />
        <Row xs={1} md={2} className="g-4">
          {projects.map((project, index) => (
            <Col key={index}>
             <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>
                  {project.description.substring(0, 150)+"..."}
                  </Card.Text>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">Github link</Button>
                  </a>
                </Card.Body>
              </Card>
             </Col>
            ))}
       </Row>
    </div>
  );
};

export default Projects;
