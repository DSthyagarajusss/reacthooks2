import ComC from "./ComC"

let ComB=(props)=>{

    return<>
    <h2>component--B</h2>
    <pre>{JSON.stringify(props)}</pre>
    <hr />
    <h3>Name:{props.data.name}</h3>
    <ComC data={props.data}/>
    </>
}
export default ComB

/* import React from "react";

class ComB extends React.Component{
    render(){
        return<>
        <h1>Componene--B</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        </>
    }
}
export default ComB */