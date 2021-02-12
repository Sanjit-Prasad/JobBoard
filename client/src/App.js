import React from 'react';
import './App.css';
import JobsList from './components/JobsList';

function App() {

  return (
    <div className="App">
      <h1>Jobs</h1>
      <JobsList />
      <br />
      <a href="https://medium.com/better-programming/the-beginners-guide-to-building-apps-with-react-hooks-and-a-rails-api-back-end-a414dade8e28#c6fd">Project_Source</a>
    </div>
  );
}

export default App;