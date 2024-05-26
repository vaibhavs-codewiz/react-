# react understanding
What is React?
React is a JavaScript library for building user interfaces. It was developed by Facebook and is maintained by Facebook and a community of individual developers and companies. React makes it easy to create interactive UIs by breaking them into components.

Key Concepts in React
Components:

The building blocks of a React application. A component is a self-contained module that renders some output. You can think of components as custom, reusable HTML elements.
There are two types of components:
Functional Components: These are JavaScript functions that accept props as an argument and return React elements.
Class Components: These are ES6 classes that extend from React.Component and include a render method.
JSX (JavaScript XML):

A syntax extension that looks similar to HTML. JSX makes it easy to write React components by allowing you to mix HTML-like syntax directly with JavaScript.
Props (Properties):

Read-only inputs to components. They are used to pass data from parent components to child components.
State:

A special object that holds data that may change over the lifetime of the component. State is managed within the component (unlike props, which are passed down from the parent).
Virtual DOM:

React maintains a lightweight representation of the DOM in memory, known as the virtual DOM. When a component's state changes, React updates this virtual DOM first, then it efficiently updates the real DOM to match.