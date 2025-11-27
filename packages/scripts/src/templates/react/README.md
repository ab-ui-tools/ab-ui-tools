# React Boilerplate

This is a React application built using Vite, with ESLint, Prettier, and Husky integrated for a smooth development experience. The project is set up with a modular architecture and uses TypeScript.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v22.x or higher)
- Yarn (v1.x or higher)

### Installation

1. Clone the repository:

   `git clone https://github.com/your-repo/project-name.git`
2. Navigate to the project directory:

   `cd project-name`
3. Install dependencies:

   `yarn install`

### Running the Application

To run the application in development mode:

`yarn dev`

This will start the Vite development server.

### Building the Application

To build the application for production:

`yarn build`

The production build will be placed in the `dist/` folder.

### Previewing the Production Build

To preview the production build locally:

`yarn preview`

## Tools Used

### ESLint

ESLint is used for linting and ensuring code quality. Custom rules and TypeScript-specific rules have been added to maintain a clean codebase.

- Run ESLint manually: `yarn lint`

### Prettier

Prettier is integrated for code formatting to ensure consistent styling across the project.

- Run Prettier manually: `yarn format`

### Husky

Husky is used to enforce pre-commit hooks, ensuring that linting and formatting rules are followed before code is committed. Conventional commit messages are also enforced via Husky.

### Environment Variables

There are three `.env` files for managing environment-specific configurations:

- `.env` - Default environment variables.
- `.env.development` - Development environment variables.
- `.env.production` - Production environment variables.

#### Example `.env` file:

`VITE_BASE_API_URL=https://api.example.com`

## Available Scripts

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the application for production.
- `yarn preview`: Previews the production build.
- `yarn lint`: Runs ESLint to check code quality.

## Commit Guidelines

This project uses a custom commit message format to keep a consistent commit history. Example of the commit message format:

`DBT-123: Fix login issue - Solved the login redirect bug` or `DBT-456: Add new feature - Implemented user authentication`
