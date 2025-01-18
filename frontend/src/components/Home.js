import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Documentation</h1>
      <p>
        Our project is a robust CLI tool designed to scan code repositories for 
        sensitive API keys and credentials before committing code, ensuring 
        security and preventing accidental leaks. By leveraging Auth0, we provide 
        secure user authentication and role-based access to manage scanner 
        configurations and usage.
      </p>
      <p>
        The tool intelligently parses staged files, adheres to <code>.gitignore</code> rules, 
        and avoids false positives by using precise regex patterns. It integrates 
        seamlessly with Git workflows, blocking commits containing potential secrets 
        while guiding users to resolve issues.
      </p>
      <p>
        With features like dynamic file filtering, compatibility with modern CI/CD 
        pipelines, and customizable options, our CLI is a must-have for developers 
        prioritizing code security.
      </p>
    </div>
  );
};

export default Home;
