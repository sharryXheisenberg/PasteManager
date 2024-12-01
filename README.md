# **PasteManager**

A modern React-based application for managing and sharing text snippets with ease. Built with Vite, Tailwind CSS, and Redux Toolkit, this app offers robust functionalities with a better  user interface.

## **Features**
- **Vite**: Ultra-fast development and build tooling.
- **React**: Latest version for building modern UI components.
- **Tailwind CSS**: Utility-first CSS framework for building custom designs without leaving your HTML.
- **ESLint**: A pluggable linter tool for ensuring code quality.
- **Redux Toolkit**: State management with slices and reducers.
- **React Hot Toast**: For elegant notifications in your application.
- **React Router DOM**: Declarative routing for React.

## **Functionalities**
1. **Create**: Add and save new text snippets.
2. **View**: Display saved snippets in a clean and organized manner.
3. **Delete**: Remove unwanted snippets with a simple action.
4. **Copy**: Quickly copy snippets to the clipboard with one click.
5. **Share**: Share your snippets via a unique link.

## **Installation**

### **Step 1: Create a Vite project**
 Install Vite globally (if not already installed):
```bash
npm create vite@latest
```
### **Step 2: Install Tailwind CSS**
1. Install Tailwind CSS and its dependencies:
 ``` bash
npm install -D tailwindcss postcss autoprefixer
 ```
2. Initialize Tailwind configuration:
 ``` bash
 npx tailwindcss init
 ```
3. Update the tailwind.config.js file with the following content to specify which files Tailwind should scan:
  ``` bash
  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
 4. Add the following lines to your src/index.css (or src/main.css if you’re using that):
``` bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
# **Scripts**
### **Step 4: Install Required Packages**
1. Install the project dependencies:
``` bash
npm install
```
2. Start the development server with the following command:
``` bash
npm run dev
```
  Open the app in your browser at http://localhost:5173.

3. Build the Project for Production
``` bash
npm run build
```
4. Preview Production Build
``` bash
npm run preview
```
5. Lint the Code
``` bash
npm run lint
```

# **Packages Used**
- @reduxjs/toolkit: A powerful library for managing application state with Redux.
- react-icons/fi: Icon set for React that provides various UI icons.
- react: The core React library for building user interfaces.
- react-dom: DOM bindings for React.
- react-hot-toast: Notifications system for React.
- react-redux: Official React bindings for Redux.
- react-router-dom: Provides routing functionalities in React apps.

# **Project structure**
Here is the basic structure of the project:
``` bash
paste/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .eslintrc.js
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```
## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any queries or suggestions, feel free to reach out via [GitHub Issues](https://github.com/sharryXheisenberg/PasteManager/issues).

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux toolkit](https://redux-toolkit.js.org/)
- [React hot toast](https://www.npmjs.com/package/react-hot-toast)
    
