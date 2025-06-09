# Redux
    - its not mandatory, Use it wisely and only it is really required
    - Redux is not a part of react, it is a separate library which we can use inside our react application to manage the state
    - It works with other libraries as well
    - Zustand is another state management library
    - There re 2 libraries than Redux offer
        1. React-Redux
        2. React-Toolkit (RTK): Standard way of writing redux

# How Redux Works?
    - Redux store everyting in a global object which can be accesible throughout the application
    - It sores the data in the form of slices, rather than storing everything in a big object
    - (WRITIGN DATA TO REDUX) : When an action occur e.g. adding data to cart
    - It dispatches an action which is nothing but a function which update the redux state 
    - The function is called as Reducer
    Flow
        Click on add button --> Dispatch an action --> Calls the Reducer --> Update the state

    - READ THE DATA: Use a selector which will provide the data
    - This selector is nothing but a subscriber
    - Library: @reduxjs/toolkit & react-redux

# Steps to setup Redux
    - Install both the dependencies 
    - Setup the store
    - Connect app with store
    - Create Slicer
    - Action -> Dispatcher -> Selector (Subscriber)

# Creating Store
    - Use ConfigureStore from reduxjs/toolkit to setup the store
    - It comes from the reduxjs because configuring a store is a redux job
    - Connect the store with App using Provider which comes from react-redux, because It is a bridge between the react and the redux to connect out app with  redux
