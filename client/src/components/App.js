import React from 'react';
import { Route } from 'react-router-dom';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';

const App = () => {
  return (
    <div className="app">
      <Route exact path="/">
        <ProjectList />
      </Route>
      <Route path="/:id">
        <ProjectDetails />
      </Route>
    </div>
  );
}

export default App;