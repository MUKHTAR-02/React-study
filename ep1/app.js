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

/*
                            ***NOTE***
    ReactElement(object) => HTML(Browser understands)
    ReactElement is an object and this object becomes an HTML by ".render()" which the Browser understands...
    
    so React.createElement != creating an HTML element
    instead React.createElement == creating an object    
*/
