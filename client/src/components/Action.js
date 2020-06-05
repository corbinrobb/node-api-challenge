import React from 'react';

const Action = (props) => {
  return (
    <div className="action">
      <p>{props.description}</p>
      <p>{props.notes}</p>
      <p>Completed: {(props.completed.toString())}</p>
    </div>
  );
}

export default Action;