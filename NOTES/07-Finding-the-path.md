# UseEffect
    - A useEffect will be called on every component render when there is no dependency array is passed
    - If the dependency array is empty, useEffect will be called on initial render when the component render
    - If we pass anything in dependecy array then the useEffect will be called eveytime the dependecy change
    - Always make the async operation outside a function and direclty call that function inside useEffect

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

# Routing to child (<Outlet />)
    - To create routes to the child
    E.g. / - parent
        /about-us - child
        /contact-us - child
    - Here for the child routes we still need the header to be display
    - For that we can make use of <Outlets /> which will load the component based on the child routes
    - So when the page is contact-us, Heaeder and contact detaills will be displayed
    - when the page is about-us, Heaeder and about detaills will be displayed

# Linking pages (<Link />)
    - To link pages in react we make use of <Link to="/about-us">About us</Link>
    - This removes the full page rendering and reredner only the required component
    - If we make use of <a> tag then the whole page gets rerender
    - Behind the scene Link use anchor (<a><a/>) tag
    - Its a wrapper around anchor tag

# Types of Routing in Web Applications
    1. Client Side Routing
        - In case of about us or contact page, it already has data so it just redners the data 
    2. Server Side Routing
        - When the page reload, it send the request to the api (Network call), gets the data and reloads the page

- Always use a key when using a map function