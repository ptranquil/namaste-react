# Single Responsibility Principal (SRP)
    - It states that a component should have a single responsibility
    - E.g. A Restaurant card should only focus on the displaying the restaurant card
    - Distributing the code into smaller pieces and keeping it modular make our code maintainable, testable, Reuseable

# Custom Hooks
    - Always create a new file for a hook and name should start with "use" e.g. useCustomHookName
    - Thought process behind writing custom hooks
        - Think about the contract (Input and the output of the hook)

# Optimization
    - Converting our only index.js file (which we gets after bundling by Parcel in build) to multiple file based on the component
    - So the the index.js file will be small because at the end of the day everthing will become a part of single index.js file and for a large scale application it will grow exponentially as the fetaures grows
    - So to avoid that problem we will create multiple file by component or features to reduce the bundle size and only call it when required
    - This is also known as 
        - Chunking
        - Code Splitting
        - Dynamic Bundling
        - Lazy loading
        - On Demand Loading
        - Dynamic Import
    - So we will not load the page untill it is required
    - To implement it on React we make use of Lazy & Suspense from React
        - They are named export available via React
        - To use that we need to import the component using Lazy
                const Grocery = lazy(() => import("../components/Grocery"))
            and use it in Routers as:
                {
                    path: '/grocery',
                    element: <Suspense fallback={<h1>Loading</h1>}><Grocery /></Suspense>
                }
        - Suspense is like what we need to show to the user untill the component finish loading. As the component will take time to laad and here we are showing a loading screen. We can show Shimmer UI or something to enhance the UX and we need to pass that Component inside fallback
