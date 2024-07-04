# react router dom
React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.

The major advantage of react-router is that the page does not have to be refreshed when a link to another page is clicked, for example. Moreover, it is fast, very fast compared to traditional page navigation. This means that the user experience is better and the app has overall better performance.
Imagine a big mansion (your React application) with many rooms (components). React Router is like the hallway that helps you move between rooms without going outside (reloading the entire app).

Here's how it works:

Define the Rooms: You tell React Router which component belongs to each URL path (e.g., "/home" shows the home component, "/about" shows the about component).
Navigation: Clicking a link or typing a URL tells React Router which room to go to. It smoothly transitions you between components without reloading everything.
Here are some common use cases:

Multi-page Application: Build an app that feels like multiple webpages (like an online store), but everything runs within the same browser window.
Dynamic Routing: Show different content based on the URL. For example, "/products/:id" could display a specific product page based on the product ID in the URL.
Navigation Control: Decide how users navigate your app. You can control what happens when they click a back button or refresh the page.
React Router makes your React application feel more like a traditional website, with a smooth user experience and clear organization.

# link and navlink in react router dom
The <Link> and <NavLink> are the components for anchor tags replacement provided by react-router-dom to navigate around the react application. Generally, we use anchor tags for this purpose while navigating.

Anchor tags will reload the page and re-render all the components. While <Link> and <NavLink> will only re-render updated components matched with the URL path of the Route without reloading. It helps the Single-Page Applications to work faster while routing.
A <NavLink> is a special kind of <Link> that knows whether or not it is “active”.

# flow of this project 
create vite project and configure the tailwind css.
create the components.
install react router dom from terminal -> npm i react-router-dom
import link and navlink from reactrouterdom.
for rendering component need to do setup in app.jsx for react router
render router provider with prop router , router is created using createBrowsserRouter contain object with key path element and children

here we are keeping footer and header static for every page so we achieve this using layout file in which <outlet /> contain the dynamicly changing content.

# router setup
at first , install react router dom
now keep the app inside the browserrouter component (these are many)
now set the routes using routes and route
now for navigation add the Link tag , see in mission_roter project.
(content inside the routes will only get rerender and not the whole page.)


# key learning
inside the navlink we are using callback function which have parameter and when this parameter true we do some styling if false some other , this help user to know the current page user currently in.