import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./components/Home";
import Documentation from "./components/Documentation";

import smallLogo from "./assets/smallLogo.png";

function App() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#f8f8f8",
    borderBottom: "1px solid #ccc",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center", 
    gap: "8px", 
  };

  const logoStyle = {
    width: "20px", 
    height: "20px",
  };

  const navLinksStyle = {
    listStyle: "none",
    display: "flex",
    gap: "16px",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  };

  return (
    <Router>
      <nav style={navbarStyle}>
        <div style={logoContainerStyle}>
          <img src={smallLogo} alt="small logo" style={logoStyle} />
          <strong>ProteccAPI</strong>
        </div>
        <ul style={navLinksStyle}>
          <li>
            <Link to="/" className="nav-link" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/documentation" className="nav-link" style={linkStyle}>
              Documentation
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </Router>
  );
}

export default App;
