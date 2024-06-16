# use callback
* memoization -
Memoization is an optimization technique used in computer programming, especially in functional programming and dynamic programming. It's essentially a way to store the results of function calls and reuse them for subsequent calls with the same inputs.

Here's how it works:

Function Call: When a function is called with a specific set of inputs, the function performs the necessary calculations and produces an output.
Cache Check: Before computing the output again, the function (or a memoization mechanism) checks if the same inputs have been used before.
Cache Hit: If a matching set of inputs is found in the cache (a data store for previously calculated results), the function retrieves the stored output instead of recomputing it.
Cache Miss: If there's no match in the cache, the function performs the computation as usual, stores the result for the given inputs in the cache, and returns the output.

* use call back hook 
It's a React hook that helps optimize performance by preventing unnecessary re-renders.
It achieves this by memoizing a callback function, essentially caching it.
When you pass a function as a prop to a child component, React normally recreates that function on every render of the parent component, even if the function itself hasn't changed. This can lead to performance issues, especially for expensive functions.
useCallback addresses this by returning a memoized version of the callback function. This memoized function will only be recreated if one of its dependencies changes.
Benefits of Using useCallback:

Improved Performance: By preventing unnecessary re-renders of child components that rely on the same callback function, useCallback can significantly boost performance in React applications.
Reduced Memory Usage: Since the memoized function is reused, it avoids creating new function objects on every render, leading to lower memory consumption.

* useCallback(fn, dependencies)
parameters
* fn: The function value that you want to cache. It can take any arguments and return any values. React will return (not call!) your function back to you during the initial render. On next renders, React will give you the same function again if the dependencies have not changed since the last render. Otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later. React will not call your function. The function is returned to you so you can decide when and whether to call it.
* dp : The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison algorithm.
 
* Returns 
On the initial render, useCallback returns the fn function you have passed.

During subsequent renders, it will either return an already stored fn  function from the last render (if the dependencies haven’t changed), or return the fn function you have passed during this render.

# use effect hook : useEffect is a React Hook that lets you synchronize a component with an external system.
In React, the useEffect hook is a powerful tool for managing "side effects" within functional components. Side effects are actions that can't be directly included in the component's render function because they might interact with external factors like:

Fetching data from APIs
Directly manipulating the DOM (Document Object Model)
Setting up subscriptions or timers
Adding or removing event listeners

syntax : useEffect(setup, dependencies?) 
return : it returns undefined
# use ref hook

# input tag of HTML 
* The <input> HTML element is used to create interactive controls for web-based forms in order to accept data from the user.
* input varies depending on type attribute , the default value of type is text.
* input shows up the value of value attribute.
* attributes of input tag : The <input> element is so powerful because of its attributes; the type attribute, described with examples above, being the most important. Since every <input> element, regardless of type, is based on the HTMLInputElement interface, they technically share the exact same set of attributes. However, in reality, most attributes have an effect on only a specific subset of input types. In addition, the way some attributes impact an input depends on the input type, impacting different input types in different ways.

in core react the code goes into js file and execute on browser so we can use the window object as it is available in browser.
but in nextjs there happens server-side rendering and hence window object not available .