import React from "react";
class Message extends React.Component{
    State={
        msg:"helooworld" 
    }
    gm=()=>{
        this.setState({msg:'good morning'})
    }
    gn=()=>{

       this.setState({msg:'good night'})
    }
    render(){
        return<>
        <h2>value:{this.State.msg}</h2>
        <button onClick={this.gm}>gm</button>
        <button onClick={this.gn}>gn</button>
        
        </>
    }
}
export default Message