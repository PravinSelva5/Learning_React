import React from 'react'

// Class based approach
class HelloWorld extends React.Component {
    render() {
        return (
        <h1> Hello {this.props.name}</h1>
        )
    }
}
/*
Function Based Approach:

function HelloWorld1(props){
    return(
        <h1>Hello {props.name}</h1>
    )
}
*/
export default HelloWorld;