// Hello world in JS---
const heading = document.createElement("h1"); // that's how we create an element in JS...
heading.innerHTML = "Hello World by JS!"; // now putting our msg inside the heading

// now we need to put the heading inside the root id
const root = document.getElementById("root"); // first we created root 
root.appendChild(heading);  // that's how we put by appendChild method...