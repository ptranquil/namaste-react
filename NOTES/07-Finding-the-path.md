# UseEffect
    - A useEffect will be called on every component render when there is no dependency array is passed
    - If the dependency array is empty, useEffect will be called on initial render when the component render
    - If we pass anything in dependecy array then the useEffect will be called eveytime the dependecy change

# useState
    - Always call useState inside a functional component and at higher level inside the function
    - As it is used to maintain the local variable of a component
    - Dont call it ouside the function or inside if/else etc, it will create inconsistency in the application

# React  Rputer
    - Use library react-router-dom
    - Create the routing configuration using createBrowserRouter in App.js
    - pass the create appRouter as a provider to the render function
    - E.g. root.render(<RouterProvider router={appRouter}/>)

# useRouteError Hook
    - This hook contain the meta data about the error page if the invalid url is entered
    - This hook is provided by react-router-dom