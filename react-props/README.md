# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# How to use tailwind css with vite
```
1.  npm create vite@latest my-project -- --template react
    cd my-project

2.  npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

3. in tailwind.config.js file, add or overwrite content by below
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

4. in index.css file, add
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

5. start your app by npm run dev

```

# what is props in react

In React, "props" is short for "properties". It's a special keyword in React used to pass data from one component to another or we can say from parent to its child components. Props are essentially a way of making components more dynamic and reusable by allowing them to receive input from their parent component.