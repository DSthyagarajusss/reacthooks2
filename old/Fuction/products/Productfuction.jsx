import { useState } from "react"


let Productfuction=()=>{
  let [qty,setqty]=useState(1)
  let inchandler=()=>{
    setqty(qty+1)
  }
  
  return<>
    <h1>products</h1><br /><br />
    <button onClick={()=>{setqty(qty-1)}}>-</button>
    
    {qty}
    <button onClick={inchandler}>+</button>
    </>
}
export default Productfuction