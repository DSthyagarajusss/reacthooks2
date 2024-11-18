import React from "react";
let Cart=(props)=>{
    return<React.Fragment>
     <h3>Cart Component</h3>
            <pre>{JSON.stringify(props)}</pre>
            <p>product name :{props.items.pname}</p>
            <p>product name :{props.items}</p>
    
    <React.Fragment/>
}

export default Cart