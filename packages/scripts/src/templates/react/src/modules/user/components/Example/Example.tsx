import React from 'react';

const Example: React.FC = () => {
  return (
    <div
      style={{
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.7',
        backgroundColor: '#f9f9f9',
        color: '#333',
      }}
    >
      <style>
        {`
          ul {
            list-style-type: none;
            padding-left: 0;
          }
          .command {
            background-color: #2d2d2d;
            color: #f8f8f2;
            padding: 8px 12px;
            border-radius: 5px;
            font-family: 'Courier New', Courier, monospace;
            display: inline-block;
            margin: 10px 0;
          }
          .command-block {
            background-color: #2d2d2d;
            color: #f8f8f2;
            padding: 15px;
            border-radius: 5px;
            font-family: 'Courier New', Courier, monospace;
            white-space: pre-wrap;
            margin: 10px 0;
            display: block;
            overflow-x: auto;
          }
          .section {
            margin-bottom: 30px;
          }
          h1, h2, h3 {
            color: #333;
          }
          code {
            background-color: #f4f4f4;
            padding: 4px;
            border-radius: 3px;
          }
          p {
            margin-bottom: 15px;
          }
          pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
          }
        `}
      </style>

      <h1>React Boilerplate</h1>
      <p>
        This is a React application built using Vite, with ESLint, Prettier, and Husky integrated for a smooth
        development experience. The project is set up with a modular architecture and uses TypeScript.
      </p>

      <div className="section">
        <h2>Getting Started</h2>

        <h3>Prerequisites</h3>
        <p>Ensure you have the following installed:</p>
        <ul>
          <li>Node.js (v22.x or higher)</li>
          <li>Yarn (v1.x or higher)</li>
        </ul>
      </div>

      <div className="section">
        <h3>Installation</h3>
        <p>Follow these steps to get started:</p>
        <p>Clone the repository:</p>
        <div className="command">
          git clone https://AmeriaBank@dev.azure.com/AmeriaBank/DailyBanking/_git/react-spa-boilerplate
        </div>
        <p>Navigate to the project directory:</p>
        <div className="command">cd project-name</div>
        <p>Install dependencies:</p>
        <div className="command">yarn install</div>
      </div>

      <div className="section">
        <h3>Running the Application</h3>
        <p>To run the application in development mode:</p>
        <div className="command">yarn dev</div>
        <p>This will start the Vite development server.</p>
      </div>

      <div className="section">
        <h3>Building the Application</h3>
        <p>To build the application for production:</p>
        <div className="command">yarn build</div>
        <p>
          The production build will be placed in the <code>dist/</code> folder.
        </p>
      </div>

      <div className="section">
        <h3>Previewing the Production Build</h3>
        <p>To preview the production build locally:</p>
        <div className="command">yarn preview</div>
      </div>

      <div className="section">
        <h2>Tools Used</h2>

        <h3>ESLint</h3>
        <p>
          ESLint is used for linting and ensuring code quality. Custom rules and TypeScript-specific rules have been
          added to maintain a clean codebase.
        </p>
        <p>
          Run ESLint manually: <span className="command">yarn lint</span>
        </p>
      </div>

      <div className="section">
        <h3>Prettier</h3>
        <p>Prettier is integrated for code formatting to ensure consistent styling across the project.</p>
        <p>
          Run Prettier manually: <span className="command">yarn format</span>
        </p>
      </div>

      <div className="section">
        <h3>Husky</h3>
        <p>
          Husky is used to enforce pre-commit hooks, ensuring that linting and formatting rules are followed before code
          is committed. Conventional commit messages are also enforced via Husky.
        </p>
      </div>

      <div className="section">
        <h3>Environment Variables</h3>
        <p>
          There are three <code>.env</code> files for managing environment-specific configurations:
        </p>
        <ul>
          <li>
            <code>.env</code> - Default environment variables.
          </li>
          <li>
            <code>.env.development</code> - Development environment variables.
          </li>
          <li>
            <code>.env.production</code> - Production environment variables.
          </li>
        </ul>

        <p>
          Example <code>.env</code> file:
        </p>
        <div className="command-block">VITE_BASE_API_URL=https://api.example.com</div>
      </div>

      <div className="section">
        <h2>Available Scripts</h2>
        <ul>
          <li>
            <span className="command">yarn dev</span>: Starts the development server.
          </li>
          <li>
            <span className="command">yarn build</span>: Builds the application for production.
          </li>
          <li>
            <span className="command">yarn preview</span>: Previews the production build.
          </li>
          <li>
            <span className="command">yarn lint</span>: Runs ESLint to check code quality.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Commit Guidelines</h2>
        <p>
          This project uses a custom commit message format to keep a consistent commit history. Example of the commit
          message format:
        </p>
        <div className="command-block">DBT-123: Fix login issue - Solved the login redirect bug</div>
        <p>or</p>
        <div className="command-block">DBT-456: Add new feature - Implemented user authentication</div>
      </div>
    </div>
  );
};

export default Example;
