import React from "react";
import Child from "./Child";
import UserContext from "../utils/userContext";

class About extends React.Component {

    constructor(props) {
        console.log('Constructor of parent')
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        console.log('componentDidMount of parent')
        this.timer = setInterval(() => {
            console.log('React is super')
        },1000) 
    }

    componentWillUnmount(){
        console.log('componentWillUnmount of parent')
        clearInterval(this.timer);
    }

    render() {
        console.log('Render of parent')
        const {count} = this.state;
        return (
            <div>
                <UserContext.Consumer>
                    {/* {(data) => console.log(data)} */}
                    {({loggedInUser}) => <h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
                <h1>About us: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        // count: this.state.count + 1
                        count: count + 1
                    })
                }}>Increase</button>
                {/* <Child name='first' />
                <Child name='second' />`` */}
            </div>
        )
    }
}
export default About;