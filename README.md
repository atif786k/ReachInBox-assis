# ReachInBox-assis
ReachInBox Web App
This repository contains the implementation of a functional web application based on the provided designs and APIs for the ReachInBox assignment. The app features Google login, data fetching from an API, keyboard shortcuts, a custom text editor, and theme toggling between light and dark modes.

Table of Contents
Features
Technologies Used
Setup Instructions
API Endpoints
Keyboard Shortcuts
Custom Text Editor
Light/Dark Mode
Contributing
License
Features
Google Login: Users can log in using their Google account.
OneBox Screen: Fetch and display email threads using provided APIs.
Keyboard Shortcuts: Implement "D" for delete and "R" for reply actions.
Custom Text Editor: Add custom buttons like "SAVE" and "Variables".
Reply Functionality: Send email replies using the provided API.
Light/Dark Mode: Toggle between light and dark themes.
Technologies Used
Frontend: React, React Router, Tailwind CSS
Backend: Node.js, Express (for local testing)
Authentication: Google OAuth
API: Axios for making HTTP requests
Setup Instructions
Prerequisites
Node.js and npm installed
Google API credentials set up for OAuth
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/reachinbox-web-app.git
cd reachinbox-web-app
Install dependencies:

bash
Copy code
npm install
Create a .env file and add your Google Client ID:

env
Copy code
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
Start the development server:

bash
Copy code
npm start
API Endpoints
Login with Google: POST /api/v1/auth/google-login
Fetch OneBox List: GET /api/v1/onebox/list
Fetch Thread Details: GET /api/v1/onebox/:thread_id
Delete Thread: DELETE /api/v1/onebox/:thread_id
Send Reply: POST /api/v1/reply/:thread_id
Keyboard Shortcuts
D: Delete the selected email thread.
R: Open the reply box for the selected email thread.
Custom Text Editor
The custom text editor includes additional buttons for saving the content and inserting variables.

Usage Example:
jsx
Copy code
import React, { useState } from 'react';
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

export default CustomEditor;
Light/Dark Mode
Toggle between light and dark themes using a button. The theme preference is stored and applied to the body of the document.

Example:
jsx
Copy code
import React, { useState } from 'react';

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

export default App;
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.
