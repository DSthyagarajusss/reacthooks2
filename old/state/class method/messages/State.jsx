import React from "react";
class State extends React.Component{
    state={
        masg:'heloo'
    }
    gm=()=>{
      this.SetState({
        msg:'good morning'
        })
    }
    render(){
        return<>
        <h1>wish masssege:{this.state.masg}</h1>
        <button onClick={this.gm}>hhhh</button>
        </>
    }
}
export default State