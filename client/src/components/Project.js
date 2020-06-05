import React from 'react';
import { useHistory } from 'react-router-dom';

const Project = (props) => {
  const { push } = useHistory();

  const showDetails = () => {
    push(`/${props.id}`);
  }

  return (
    <div onClick={showDetails} className="project">
      <h3>{props.name}</h3>
      <p>Completed: {(props.completed.toString())}</p>
    </div>
  );
}

export default Project;