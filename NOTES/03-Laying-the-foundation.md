# JSX - JavaScript XML

- It is used to run html inside javascript
- It is not a part of React
- JSX is HTML or XML like Syntax
- JSX code is transpiled before it reaches to the JS Engine & transpilation is done by parcel + BABEL
- Babel is a javascript compiler which convers JSX to React code or React Element
- Here the JSX => React.createElement() => Object => HTML
- Attributes to the JSX should always be in camelCase
- wrap the code inside () so JSX can understand that where the JSX is starting & ending

# Component
- Class component
- Functional component

# React Functional component
- A React functional component is a normal javascript function which returns a JSX or 
- A function which is returning a React Element as at the end the JSX will be transpiled into a React Element
- A function component should always start with Capital Letter

- React Element:
const heading = <h1>Hello React!</h1>;

- React functional component

const Functionalcomponent = () => {
    return <h1>Hello React!</h1>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Functionalcomponent />) : This is how to render a functional component

# Component Composition
- Using a component inside another component

const Test = () => {
    return (
        <div id="container">
            <Functionalcomponent />
            /** Another way to call is */
            <Functionalcomponent><Functionalcomponent /> 

            /** We can also call the function, it will behave the same */
            {FunctionalComponent()}
            <h1>Component composition</h1>
        </div>
    )
}

- To render a react element
const element = <span>I am React Element</span>
root.render(element)

- To render a functional component
root.render(<Functionalcomponent />)

- To use any js inside functional component use {}
E.g.
const Test = () => {
    return (
        <div id="container">
        {100 + 200} // It will print 300
        </div>
    )
}
- To render a react element 
const Test = () => {
    return (
        <div id="container">
        {element} // It will print 300
        </div>
    )
}

- Also {} -> sanitize the data before executing it