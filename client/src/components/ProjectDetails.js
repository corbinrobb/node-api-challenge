import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import Action from './Action';

const ProjectDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/projects/${id}`)
      .then(res1 => {
        // Need second axios call for correct completed value on actions
        axios
          .get(`http://localhost:5000/api/projects/${id}/actions`)
          .then(res2 => {
            setDetails({ ...res1.data, actions: res2.data });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));

   
  }, [id])

  if(!details) return <h2>Loading Details ...</h2>;

  return (
    <div className="project-details">
      <h3>{details.name}</h3>
      <p>Completed: {(details.completed.toString())}</p>
      <p>{details.description}</p>
      {details.actions.map(action => {
        return <Action key={'action' + action.id} {...action} />
      })}
      <button onClick={() => push('/')}>Back</button>
    </div>
  );
}

export default ProjectDetails;