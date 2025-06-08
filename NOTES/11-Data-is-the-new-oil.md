# Higher Order Component
    - The component that takes a component and enhance it and return the component

# Controlled & Uncontrolled Component
    - When a component is controlled by parent it called as controlled component
    - When a component has its own ability to control its action, its called uncontrolled component
    - It is also known as "Lifting the Statue Up"

# Prop Drilling
    - Passing props from parent component to nested child component

# Context
    - Context is a way to access data from parent to deeply nested child component without prop drilling
    - To create a conext
        import { useContext, createContext } from "react";

        const userContext = createContext({
            loggedInUser: "Robert"
        })
    - to use a context in a component
        const {loggedInUser} = useContext(UserContext)
    - To use it in class based compoenent
        <UserContext.Consumer>
            {(data) => console.log(data)}
        </UserContext.Consumer>

        <UserContext.Consumer>
            {({loggedInUser}) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
    
    - To change the context value, wrap the compoenent with <UserContext.Provider> and pass the value
    - All the component which is wrapper inside the compoenent will have access to the value
    E.g.
        <UserContext.Provider value={{loggedInUser: 'Albert'}}>
            <Header />
        </UserContext.Provider>
        So the Header will have loggedInUser value as 'Albert' and all other component will have default user