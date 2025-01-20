import React from "react";
import ReactDOM from "react-dom/client";

const heading2 = React.createElement("h1", {id: "heading2"}, "Hello World from React!");

console.log(heading2);  //object is displaying on the console of browser, which proves that ` heading2 ` was an object...

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading2);

// Nested React Objects---
const parent = React.createElement(
    "div", {id: "parent"}, 
    React.createElement(
        "div", {id: "child"}, 
        React.createElement(
            "h1", {}, "Congrats, You've learnt creation of nested elements in React" 
        )
    )
);
console.log(parent);
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(parent);

// Nested React Objects---
const parent2 = React.createElement(
    "div", {id: "parent2"}, 
    React.createElement("div", {id: "child2"}, [ // array bna diya
        React.createElement("h1", {}, "Sibling 1"), 
        React.createElement("h2", {}, "Sibling 2"),
    ])
);
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(parent2);

// Complex mamla
const parent3 = React.createElement("div", {id: "parent3"}, 
    [
        React.createElement("div", {id: "childOne"}, 
            [
                React.createElement("h1", {}, "Sibling One"),
                React.createElement("h2", {}, "Sibling Two"),
            ]
        ), 
        React.createElement("div", {id: "childTwo"}, 
            [
                React.createElement("h1", {}, "Sibling One"),
                React.createElement("h2", {}, "Sibling Two"),
            ]
        )
    ]
)
const root5 = ReactDOM.createRoot(document.getElementById("root5"));
root5.render(parent3);

// JSX
const jsxHeading = <h1 id="heading2">Hello World, using JSX</h1>;
const root6 = ReactDOM.createRoot(document.getElementById("root6"));
root6.render(jsxHeading);

// Functional Component
const Heading = () => (
    <div id="container">
        <Jasus/>
        {javascriptCode}
        <h1>Hello Functional Component</h1>
    </div>
);

// Rendering Functional comp inside another Functional component...
const Jasus = () => (
    <h1>Ye lo chicha ghus gye apn to</h1>
);

// Rendering Javascript code inside another Functional component...
const javascriptCode = (
    <h1>
        Normal javascript Code bhi ghus gya
    </h1>
);

const root7 = ReactDOM.createRoot(document.getElementById("root7"));
root7.render(<Heading/>);
// or
// root7.render(Heading());

// Normal function
const NormalHeading = function () {
    return (
        <div> 
            <h1> Hello from normal function </h1>
        </div>
    )
};

const root8 = ReactDOM.createRoot(document.getElementById("root8"));
root8.render(<NormalHeading/>)

/*
                            ***NOTE***
    ReactElement(object) => HTML(Browser understands)
    ReactElement is an object and this object becomes an HTML by ".render()" which the Browser understands...
    
    so React.createElement != creating an HTML element
    instead React.createElement == creating an object    
*/

