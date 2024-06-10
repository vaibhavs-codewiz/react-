# fibre
* it is the core algorithm in react to update the virtual dom.
* createroot method is responsible to structure the virtual dom tree
reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.
* in browser even for a songle change in tree the whole tree is structured this is called page loading but in react only the change part in tree is updated.
* Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called reconciliation.

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.
# all about fibre
In React, Fiber refers to a significant change introduced in React 16. It's a complete rewrite of React's core algorithm, specifically the reconciler. The reconciler is responsible for comparing the virtual DOM (a lightweight representation of the UI) with the actual DOM (the browser's Document Object Model) and figuring out what needs to be updated on the screen.

Here's how Fiber improves upon the previous reconciler:

Incremental Rendering: Fiber allows React to split rendering work into smaller chunks and spread it out over multiple frames. This is particularly beneficial for complex UIs or when dealing with slow user interactions like scrolling. The user experience feels smoother because the browser isn't blocked by a large rendering task.

Prioritization and Pausing: React can prioritize updates based on their importance. Critical updates for the current viewport are handled first. Additionally, rendering can be paused if new updates come in, ensuring that the UI reflects the latest information.

Better Performance for Complex UIs: Fiber's ability to break down work and prioritize updates makes React more efficient at handling large or frequently changing UIs. This allows for smoother animations, faster scrolling, and a more responsive user experience.

While you likely won't interact with Fiber directly as a developer, it plays a crucial role behind the scenes in enhancing the performance and responsiveness of React applications.