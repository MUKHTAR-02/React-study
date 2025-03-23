# React-study
- for notes and assignment solutions
- `https://github.com/Bharat2044/Namaste-React`

# Things which Parcel do for us 
- Dev build
- Tree shaking (remove unused code)
- Local server
- HMR = Hot module replacement
- File watching algo (written in c++)
- Faster dev experience (by using caching)
- Image optimization (one of the expensive things to do in the browser)
- Minification of file 
- Bundling 
- Compressing
- Consistent hashing
- Code splitting
- Differential bundling (to support old version of browsers as well)
- Diagnostic (errors ko beautifully show krta)
- Error handling
- HTTPs hosting support
- Creates different dev and production bundles

# Things which Babel is doing for us
- Transpiles the JSX code into React object
- Converts ES6 js code into that code which the older versions of browsers can understand
- Compiler of js

# 2 types of routing:
- Server side routing (makes network calls and reloads the page)
- Client side routing (single page application, no reload)

# React life cycle Diagram:
- `https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/`

# To See the Architecture img of Redux toolkit, 
    pls visit these following links: 
    - [file:///C:/Users/Guest%20pc/Downloads/react/img/Redux%20toolkit%20Architecture.jpeg]
    - [file:///C:/Users/Guest%20pc/Downloads/react/img/Redux%20toolkit%20Architecture2.jpeg]

# Redux Toolkit
    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect the store to our app
    - Slice (cartSlice)
    - dispatch (action)
    - Selector

# Types of testing (Developer)
 - Unit Testing: Testing the React components in isolation
 - Integration Testing: Multiple components takes participation in this type of testing
 - End to End Testing - e2e Testing: Testing the whole application 

# Setting up Testing in our application 
 - Installed React Testing Library
 - Installed Jest
 - Installed babel dependencies
 - Configure babel 
 - Configure parcel config file to disable parcel's babel transpilation
 - jest configuration (npx jest --init)
 - install jsdom library
 - install @babel/preset-react (To make JSX work inside test cases)
 - include @babel/preset-react inside babel config 
 - install @testing-library/jest-dom (to get multiple functionalities(methods) in the assertion)