import React from 'react'
class Messagee extends React.Component{
    state={
        msg:"Hello"
    }
    gmHandler=()=>{
        this.setState({ msg:"Good Morning"})
    }
    gaHandler=()=>{
        this.setState({msg:"Good Afternoon"})
    }
    geHandler=()=>{
        this.setState({msg:"Good Evening"})
    }
    gnHandler=()=>{
        this.setState({msg:"Good Night"})
    }
    render(){
        return <div>
                <h3>Message Component</h3>
                <h3>Value:{this.state.msg}</h3>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gaHandler}>GA</button>
                <button onClick={this.geHandler}>GE</button>
                <button onClick={this.gnHandler}>GN</button>
                </div>
    }
}
export default Messagee