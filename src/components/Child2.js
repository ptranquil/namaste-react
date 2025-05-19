import React, { Component } from 'react'

class Child2 extends Component {

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
            <div>child2</div>
        )
    }
}


export default Child2;