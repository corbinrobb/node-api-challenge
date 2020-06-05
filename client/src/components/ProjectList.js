import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Project from './Project';

const ProjectList = () => {
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/projects')
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="project-list">
      <h2>Projects:</h2>
      {projects.map(project => {
        return <Project key={'project' + project.id} {...project} />;
      })}
    </div>
  );
}

export default ProjectList;