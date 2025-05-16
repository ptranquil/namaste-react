import React from "react";
import ReactDOM from "react-dom/client";

// REACT ELEMENT => Object => HTMLElement(render)

const heading = React.createElement("h1", {id: 'heading'}, "Hello World")

/** 
 * As the above code is very clumpsy 
 * JSX (javascript XML)
 * JSX is HTML like Syntax 
 */

// This jsxHeading is also an object and both the heading & jsxHeading is same
/**
 * Javascript code is a code that JS engine understand 
 * So the below jsxHeading is not a pure javadscript code as it cannot be understand by JSEngine
 * The browser will not understand the code as this is not a valid pure javascript
 */

/**
 * This JSX code is transpiled before it reaches to the JS Engine
 * transpiling is done by parcel + BABEL
 * Babel is a javascript compiler which convers JSX to React code or React Element
 * Here the JSX => React.createElement() => Object => HTML
 * 
 * Attributes to the JSX should always be in camelCase
 * */

/**
 * REACT COMPONENT
 * Types: Class based compoenent & Functional component
 * 
 */
const jsxHeading = <h1 id="heading">Hello World with JSX</h1>;

const FunctionalComponent = () => {
    return <h1>Hello React!</h1>
}

const element = <span>Hello I am a React Element</span>

const ComponentComposition = () => {
    return (
        <div id="container">
            {element}
            <FunctionalComponent />
            {FunctionalComponent()}
            <h1> Component Composition </h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComponentComposition/>)

// root.render(<Functionalcomponent />) // This is how to render a functional component
