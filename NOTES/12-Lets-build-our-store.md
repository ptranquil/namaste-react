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
    - Use ConfigureStore({}) from reduxjs/toolkit to setup the store
    - The ConfigureStore({}) has 3 parts
        - name: The name of the store
        - initialState : The intial state values
        - reducers: All the actions. E.g. addItem, removeItem, clearCart etc
    - It comes from the reduxjs because configuring a store is a redux job
    - Connect the store with App using Provider which comes from react-redux, because It is a bridge between the react and the redux to connect out app with  redux

# Subscribing to the reducer (Get the value from state)
    - We can subscribe to the reducer using useSelector() hook provided by react-redux
    E.g.
        const cartItem = useSelector((store) => store.cart.items) 
        Here store: It is the actual store, cart is the slice and item is the initialValue of cart

# Dispatch an action (Update state value)
    - To update the state value we need to dispatch an action using useDispatch() hook provided by react-redux
    E.g.
        const dispatch = useDispatch()
        dispatch(addItem("pizza"))
    - Here addItem() is the action which we are using in dispatch which we have create during store creation

# Things to be taken care of
    - Subscribe only the part of slice which is required, because if we subscribe to whole store then whole application gets rerendered when the state change so to avoid this and to optimize the app performance we should do that
    - The createSlice function has 3rd parameter named 'reducers', but the store has reducer so keep it in mind
    - Store has 1 reducer for whole app i.e. "reducer"
    - The Slice has multiple small reducer function i.e. "reducers"

# Mutating the state
    - In the older version of redux, it does not allow mutating the state direcltly
    - It was not recommended to mutate the state
    - instaed we should create a new copy of the state and then update it and returning the state was mandatory
        E.g.
            const newState = [...state];
            newState.push({...})
            reutrn newState;
        
    - But in the latest RTK, It is a recommended way to mutate the state and returning is not mandatory
        e.g. state.item.push[{...}]
    - Here when we mutate the state, Redux behind the scene, creates a new value and does all the thing which used to be done earlier in vanilla Redux and return a new copy of the state which is now not required for the developer to do

***Redux BTS use Immer JS library to do this***
        1. Finding the difference between the original state, the mutated state and give the new state which is a mutated state which is a new copy of the state 

    - If we directly mutate the state then it changes its value locally (passbyvalue and passbyreference concept)
    - Thats why it is recommended to mutate the state
    E.g.    state.cart.items = []
            state.cart.items.length = 0
        or return [] or return {items: []}
    - I.e. we can return the mutate value also
    - RTX state that either mutate the value or return the updated state