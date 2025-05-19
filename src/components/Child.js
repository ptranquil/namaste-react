import React, { Component } from 'react'
import Child2 from './Child2';

class Child extends Component {

    constructor(props){
        super(props);
        console.log(this.props.name + 'child constructor')
    }

    componentDidMount(){
        console.log(this.props.name + 'child componentDidMount')
    }

    render() {
        console.log(this.props.name + 'child render')
        return (
            <div>
                <Child2 name={this.props.name + ' nested'}/>
            </div>
        )
    }
}


export default Child;