import React from "react";
import Cart from "./Cart";
class Products extends React.Component{
    items;
    constructor(props){
    super(props)
    this.items={    pid:10,
                    pname:'realme 9 pro max',
                    price: 22403,
                    color:'red',
         
               }

    }
    
    render(){
        return<>
        <h2>Product Components</h2>
        <Cart  art items={this.items}/>
        </>
    }
}
export default Products