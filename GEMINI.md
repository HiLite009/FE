# Gemini Code Assistant Rules for text2sql-demo

This document outlines the conventions and procedures for using the Gemini code assistant within the `text2sql-demo` project.

## 1. Core Principles

- **Frameworks & Libraries**: This project is built with React, TypeScript, and Vite. All new code must use these technologies.
    - **UI**: Use Material-UI (`@mui/material`) for all UI components.
    - **HTTP Requests**: Use `axios` for all API communication. The existing instance in `src/api/axiosInstance.ts` should be used where applicable.
    - **Routing**: Use `react-router-dom` for all page navigation.
- **Styling**: Use Emotion (`@emotion/styled`) for component styling, following the patterns in existing components.
- **Code Style**: Adhere to the existing code style. Run `npm run lint:fix` to format your code before finalizing changes.
- **File Structure**:
    - **Components**: Place reusable components in `src/components/`.
    - **Pages**: Place page-level components in `src/pages/`.
    - **API Calls**: Keep API-related logic in `src/api/`.
    - **Type Definitions**: Define all data models in `src/models/`.
    - **Hooks**: Place custom React hooks in `src/hooks/`.
- **State Management**: For now, use component-level state (`useState`, `useReducer`). If global state is needed, we can discuss implementing a library like Redux Toolkit or Zustand.
- **Path Aliases**: Use path aliases defined in `tsconfig.json` for cleaner imports.
    - `@api/*`: `src/api/*`
    - `@models/*`: `src/models/*`
    - `@components/*`: `src/components/*`

## 2. Development Workflow

When making changes to the codebase, follow this sequence:

1.  **Understand the Goal**: Clearly identify the task, whether it's a bug fix, a new feature, or a refactor.
2.  **Analyze the Code**: Use `read_file` and `glob` to study the relevant files and understand the existing implementation.
3.  **Implement Changes**: Use `write_file` or `replace` to modify the code, adhering to the principles above.
4.  **Verify Changes**: After making changes, ensure the project still functions correctly by running the following commands:
    - **Linting**: `npm run lint`
    - **Type Checking & Building**: `npm run build`

## 3. Key Project Commands

- **Start Development Server**:
  ```bash
  npm run dev
  ```
- **Create Production Build**:
  ```bash
  npm run build
  ```
- **Run Linter**:
  ```bash
  npm run lint
  ```
- **Fix Linting Issues**:
  ```bash
  npm run lint:fix
  ```

---
*This document is a living guide and should be updated as the project evolves.*
