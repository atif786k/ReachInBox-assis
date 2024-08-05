<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ReachInBox Web App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
    h1, h2, h3 {
      color: #333;
    }
    pre {
      background: #f4f4f4;
      padding: 10px;
      border: 1px solid #ddd;
    }
    code {
      background: #f4f4f4;
      padding: 2px 4px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <h1>ReachInBox Web App</h1>
  <p>This repository contains the implementation of a functional web application based on the provided designs and APIs for the ReachInBox assignment. The app features Google login, data fetching from an API, keyboard shortcuts, a custom text editor, and theme toggling between light and dark modes.</p>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#setup-instructions">Setup Instructions</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#keyboard-shortcuts">Keyboard Shortcuts</a></li>
    <li><a href="#custom-text-editor">Custom Text Editor</a></li>
    <li><a href="#lightdark-mode">Light/Dark Mode</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ul>

  <h2 id="features">Features</h2>
  <ul>
    <li><strong>Google Login:</strong> Users can log in using their Google account.</li>
    <li><strong>OneBox Screen:</strong> Fetch and display email threads using provided APIs.</li>
    <li><strong>Keyboard Shortcuts:</strong> Implement "D" for delete and "R" for reply actions.</li>
    <li><strong>Custom Text Editor:</strong> Add custom buttons like "SAVE" and "Variables".</li>
    <li><strong>Reply Functionality:</strong> Send email replies using the provided API.</li>
    <li><strong>Light/Dark Mode:</strong> Toggle between light and dark themes.</li>
  </ul>

  <h2 id="technologies-used">Technologies Used</h2>
  <ul>
    <li><strong>Frontend:</strong> React, React Router, Tailwind CSS</li>
    <li><strong>Backend:</strong> Node.js, Express (for local testing)</li>
    <li><strong>Authentication:</strong> Google OAuth</li>
    <li><strong>API:</strong> Axios for making HTTP requests</li>
  </ul>

  <h2 id="setup-instructions">Setup Instructions</h2>

  <h3>Prerequisites</h3>
  <ul>
    <li>Node.js and npm installed</li>
    <li>Google API credentials set up for OAuth</li>
  </ul>

  <h3>Installation</h3>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/your-username/reachinbox-web-app.git
cd reachinbox-web-app</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Create a <code>.env</code> file and add your Google Client ID:
      <pre><code>REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id</code></pre>
    </li>
    <li>Start the development server:
      <pre><code>npm start</code></pre>
    </li>
  </ol>

  <h2 id="api-endpoints">API Endpoints</h2>
  <ul>
    <li><strong>Login with Google:</strong> <code>POST /api/v1/auth/google-login</code></li>
    <li><strong>Fetch OneBox List:</strong> <code>GET /api/v1/onebox/list</code></li>
    <li><strong>Fetch Thread Details:</strong> <code>GET /api/v1/onebox/:thread_id</code></li>
    <li><strong>Delete Thread:</strong> <code>DELETE /api/v1/onebox/:thread_id</code></li>
    <li><strong>Send Reply:</strong> <code>POST /api/v1/reply/:thread_id</code></li>
  </ul>

  <h2 id="keyboard-shortcuts">Keyboard Shortcuts</h2>
  <ul>
    <li><strong>D:</strong> Delete the selected email thread.</li>
    <li><strong>R:</strong> Open the reply box for the selected email thread.</li>
  </ul>

  <h2 id="custom-text-editor">Custom Text Editor</h2>
  <p>The custom text editor includes additional buttons for saving the content and inserting variables.</p>

  <h3>Usage Example:</h3>
  <pre><code>import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CustomEditor = () => {
  const [content, setContent] = useState('');

  const handleSave = () => {
    console.log('Content saved:', content);
  };

  const handleInsertVariable = () => {
    // Insert variable logic
  };

  return (
    <div>
      <ReactQuill value={content} onChange={setContent} />
      <button onClick={handleSave}>SAVE</button>
      <button onClick={handleInsertVariable}>Variables</button>
    </div>
  );
};

export default CustomEditor;</code></pre>

  <h2 id="lightdark-mode">Light/Dark Mode</h2>
  <p>Toggle between light and dark themes using a button. The theme preference is stored and applied to the body of the document.</p>

  <h3>Example:</h3>
  <pre><code>import React, { useState } from 'react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Rest of your app */}
    </div>
  );
};

export default App;</code></pre>

  <h2 id="contributing">Contributing</h2>
  <p>Contributions are welcome! Please fork the repository and create a pull request with your changes.</p>

  <h2 id="license">License</h2>
  <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
</body>
</html>

