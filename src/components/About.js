import { Component } from "react";
import Users from "./Users";

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <h3>List of our Users</h3>
            <Users name={"Mukhtar"} role={"Developer"}/>
            
            {/* Multiple childs */}
            {/* <Users name={"Kaif"} role={"Developer"}/> */}
            
            {/* <Users /> */}
            {console.log("Prog will finish this code first then goes to Users Component")}
        </div>
    );
}

export default About;