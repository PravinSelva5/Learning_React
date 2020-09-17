import React from 'react'

// Class based approach
class HelloWorld extends React.Component {
    render() {
        return (
        <h1> Hello {this.props.name}</h1>
        )
    }
}

export default HelloWorld;