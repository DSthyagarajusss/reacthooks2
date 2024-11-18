import React from "react";
class Massege extends React.Component{
    massege ='heloo world'
    gn=()=> {
       //    console.log('gn')
       this.massege='good morning' 
       console.log(this.massege)
       this.forceUpdate()
    }
    gb=()=>{
        //console.log('gb')
           this.massege='good bye bye'
           console.log(this.massege)
           this.forceUpdate()
    }
    add(){

    }
    render(){
    console.log('render_method')
        return<>
        <h5>massege Component</h5>
        <h5>wish massege:{this.massege} </h5>
        <button onClick={this.gn} >good morning</button>
        <button onClick={this.gb}>good bye</button>
        </>
    }
}
export default Massege