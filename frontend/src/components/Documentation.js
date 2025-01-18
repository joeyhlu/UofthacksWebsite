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
      <li>
        <strong>Security Check: </strong> Runs a check on your code to reduce the amount of possible malicious code and provides a rating on how safe the code is:
        <div class="command-block">secure-scan secure-check</div>
      </li>
      <li>
        <strong>Create .gitIgnore and .env: </strong> Automatically creates a git ignore and and an .env with necessary elements:
        <div class="command-block">secure-scan -e</div>
      </li>
      <li>
        <strong> List of commands: </strong> Creates a list of all commands:
        <div class="command-block">secure-scan -help</div>
      </li>
    </ul>
  </li>
</ul>


    </div>
  );
}

export default Documentation;
