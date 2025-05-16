import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: 'heading'}, "Hello World");
/**
 * React.createElement take 3 parameter
 * 1: The element type: e.g. h1, div, a etc....
 * 2. The attributes of element: id, class
 * 3. The content
 * */
console.log(heading)
/**
This will print a React Element which is nothing but an object
{
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "id": "heading",
        "children": "Hello World"
    },
    "_owner": null,
    "_store": {}
}

So the React.createElement create the object
Render method is converting that object to the HTML and rendering it in the root
 */

/**
 * To render a nested structure 
E.g.
<div id = "parent">
    <div id = "child">
        <h1 id='child-heading-1'>I am child Heading 1</h1>
        <h2 id='child-heading-2'>I am child Heading 2</h1>
    </div>
</div>
 */


const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, 
        [
            React.createElement("h1",{id: "child-heading-1"}, "I am child Heading 1"),
            React.createElement("h1",{id: "child-heading-2"}, "I am child Heading 2")
        ]
    )
)

/**
 * As the above structure is untidy and messy and to create a large html pages it will be inefficient 
 * to make as there will be lot of messy code 
 * So for the JSX introduced
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
/**
 * If there is already something present in the root then it will replace it with the rendered content 
 */