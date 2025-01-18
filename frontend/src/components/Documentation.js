import React from "react";

function Documentation() {
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",
  };

  return (
    <div style={containerStyle}>
      <h2>Documentation</h2>
<ul>
  <li>
    <strong>Commands</strong>
    <ul>
      <li>
        <strong>Scan Staged Files:</strong> To scan only staged files:
        <div class="command-block">secure-scan</div>
      </li>
      <li>
        <strong>Scan All Files:</strong> To scan all files in the project:
        <div class="command-block">secure-scan --all</div>
      </li>
      <li>
        <strong>Generate/Update .env File:</strong> To automatically add detected keys to a `.env` file:
        <div class="command-block">secure-scan --env</div>
      </li>
      <li>
        <strong>Custom .env Path:</strong> Specify a custom path for the `.env` file:
        <div class="command-block">secure-scan --env --env-path ./config/.env</div>
      </li>
      <li>
        <strong>Debug Mode:</strong> Enable debug logs to troubleshoot issues:
        <div class="command-block">secure-scan --debug</div>
      </li>
    </ul>
  </li>
</ul>


    </div>
  );
}

export default Documentation;
