import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent"}, React.createElement("div", { id: "child"}, [
//     React.createElement("h1", {}, "Hello World from React!!!!!"),
//     React.createElement("h2", {
//         id: 'heading'
//     }, "Hello World from React")    
// ]))

// const h1 = React.createElement("h1", {
//     id: 'heading'
// }, "Hello World from React");

// const h2 = React.createElement("h2", {}, "hello wordld from Recat")

const Title = () => {
    return <h3>Hello World from React!!!!!</h3>
}
const Heading = () => (
    <div className="hello">
        <h1>I am main component</h1>
        <Title />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(< Heading />)