import React from "react";

class Users extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.name + " Component called");
        console.log("props = ", props);

        this.state = {  // state is a big whole object which contains variables
            // State variables (Hooks)
            exp: 0,
            age: 21,
            userInfo: {
                name: "John Doe",
            },
        };
    }
    
    
    async componentDidMount() {
        console.log(this.props.name + " componentDidMount() called");
        const data = await fetch("https://api.github.com/users/MUKHTAR-02");
        const json = await data.json();
        console.log(json);
        
        this.setState({
            userInfo: json,
        });

        this.time = setInterval(() => {         // calling after every 1 sec, (this likhna zruri class comp. mai)
            console.log("Set Interval (Users component)");
        }, 1000);
    }
    
    componentDidUpdate() {                      // idhar bhi likh skte setInterval function ko
        console.log("ComponentDidUpdate() called");
    }

    componentWillUnmount() {
        clearInterval(this.time);               // clearing the setInterval(), (idhar bhi this aega)
        console.log("componentWillUnmount() called");
    }

    render() {
        const {role} = this.props;    // Destructuring on the fly
        const {exp, age} = this.state;
        const {name, avatar_url} = this.state.userInfo;

        return (
            <div className="users-card">
                <img src={avatar_url}></img>
                <h2>{name}</h2>
                <h3>{role}</h3>
                <h3>Experience = {exp}</h3>
                <button onClick={() => {
                    this.setState({
                        exp: this.state.exp + 1,
                    })
                }}>Exp++</button>
                <h3>Age = {age}</h3>
                <h4>m2r</h4>
            </div>
        );
    }
}

export default Users;