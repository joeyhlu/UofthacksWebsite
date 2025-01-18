import React from "react";
import { Link } from "react-router-dom";
import '../app.css';
import logo from '../assets/logo.png';

import Sample1 from '../assets/Sample1.png';
import Sample2 from '../assets/Sample2.png';
function Home() {
  return (
    <div className="container">
      <img src={logo} alt="My Logo" className="logo-img" />

      <p className="description">
      ProteccAPI is a robust command-line tool designed to scan code repositories for sensitive information. By integrating directly into your workflow, ProteccAPI ensures security and prevents accidental leaks of sensitive data.
      </p>

      <div className="button-group">
        <a href= "https://github.com/aayanrahman/proteccapi" target="_blank"rel="noopener noreferrer" className="button">
          How to Download
        </a>
        <Link to="/documentation" className="button">
          View Documentation
        </Link>
      </div>

      <div className="feature-list">
        <h3>Features:</h3>
        <ul>
          <li> <b>API Key Detection: </b> Automatically scans your code for hardcoded API keys, tokens, and credentials (e.g., AWS, GitHub, Stripe, Twilio, etc.).</li>
          <li> <b>.gitignore Generation: </b> Automatically creates or updates a .gitignore file to exclude sensitive files like .env, certificates, and logs</li>
          <li> <b>Pre-Commit Hook Integration: </b>Integrates with Git pre-commit hooks to block commits if security vulnerabilities are detected.</li>
          <li> <b>Vulnerability Assessment:</b> Scans for known vulnerabilities in project dependencies and detects typosquatting</li>
          <li> <b> Suspicious Script Detection: </b> Flags potentially harmful lifecycle scripts in package.json </li>
          <li> <b> Security Scoring: </b> Provides a comprehensive security score (0.0–10.0) to give an overall assessment of your repository’s security. </li>
        </ul>
      </div>

      <div className="demo-section">
        <h3>ProteccAPI in Action!</h3>

        <img src={Sample1} alt="My Logo" className="sample" />
        <img src={Sample2} alt="My Logo" className="sample" />
      </div>

      <div className="github-links">
        <h4>Check us out on GitHub:</h4>
        <a
          href="https://github.com/username/repo1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo 1
        </a>
        <a
          href="https://github.com/username/repo2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo 2
        </a>
      </div>
    </div>
  );
}

export default Home;
