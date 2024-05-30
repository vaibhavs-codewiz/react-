
* using utility npx create-react-app , is a bulky bundle set and require good internet speed , for creating react project .
* on creating react project it provide us with some dependencies in json.package
like react, react-dom, web-vitals(used to check performance.)
# react project using vite :-
Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).

A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

# The primary objective of setting up a React project using Vite 
and running the development server (npm run dev) is to establish a robust, efficient, and developer-friendly environment for building modern web applications. Here are the key objectives and benefits:

1. Speed and Performance:
Faster Development: Vite significantly improves development speed by using native ES modules and modern JavaScript features, allowing for quicker loading and hot module replacement (HMR).
Instant Feedback: With Vite’s HMR, any changes you make to your code are instantly reflected in the browser without a full reload, providing immediate feedback and a more efficient development workflow.
2. Simplified Setup:
Boilerplate Code: The initial setup command (npm create vite@latest) generates a project with a predefined structure and boilerplate code, allowing you to focus on development rather than configuration.
Standard Tools: Vite sets up a modern development environment with tools like ESBuild for fast compilation, simplifying the setup process compared to manual configuration.

# objective of react (must read):-

The React library, developed and maintained by Facebook, aims to provide a robust and efficient way to build user interfaces, especially for single-page applications. Here are its primary objectives:

Component-Based Architecture: React encourages the development of applications using reusable components. This modularity allows for easier maintenance and scalability of code.

Declarative UI: React allows developers to describe what the UI should look like for any given state. This declarative approach simplifies the process of developing complex UIs by abstracting away the DOM manipulation and letting React handle the rendering.

Efficient Updates with Virtual DOM: React uses a virtual DOM to optimize updates and rendering. When the state of a component changes, React computes the most efficient way to update the real DOM, minimizing the performance costs associated with direct DOM manipulation.

Unidirectional Data Flow: React promotes a unidirectional data flow, making it easier to understand and debug application data changes. Data flows from parent to child components through props, which helps in maintaining predictable data management.

Ecosystem and Flexibility: React is designed to be flexible and can be used in conjunction with other libraries or frameworks. It provides hooks and context for state management but can also integrate with state management libraries like Redux or MobX.

JSX Syntax: React introduces JSX, a syntax extension that allows writing HTML-like code within JavaScript. This makes the code more readable and easier to write, combining the logic and markup in a single place.

Strong Community and Ecosystem: React has a strong and active community, which means a wealth of third-party libraries, tools, and resources are available to help with development, debugging, testing, and deployment.

In summary, React aims to simplify the process of building dynamic and responsive user interfaces by providing a clear, efficient, and modular approach to UI development.