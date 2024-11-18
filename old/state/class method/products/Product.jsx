import React from "react";
class Product extends React.Component{
state={
    qty:1000
}
incrhandler=()=>{
    this.setState({qty:this.state.qty+1})
}
dechandler=()=>{
    this.setState({qty:this.state.qty-1})
}
render(){
    return<>
    <button onClick={this.dechandler} >-</button>{this.state.qty}
    <button onClick={this.incrhandler}>+</button>
    </>
}
}
export default Product