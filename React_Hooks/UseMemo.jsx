import React, { useState , useMemo} from 'react'

function UseMemo1() {
    let [number,setnumber]=useState(0)
    let [dark,setdark]=useState(false)
    
    useMemo(()=>{
         expensiveFunction(number)
    },[number])
    

    let calculation =expensiveFunction(number)
    let cssStyle={
        backgroundColor: dark ? "black" :"white",
        color: dark?"white":"black"
    }
  return <>
  <div className="container mt-5">
    <div className="row">
        <div className="col">
        <div style={cssStyle}>
    <input 
    type="number"
    onChange={(e)=> setnumber(e.target.valueAsNumber)}
    value={number}
    />
    <h1>calculation:{calculation}</h1>
    <button onClick={()=>setdark(!dark)} className='btn btn-warning'>click </button>
  </div>
        </div>
    </div>
  </div>
 
  </>
}
let expensiveFunction=(num)=>{
    console.log("loop stated")
   for (let i=0; i<100000000;i++){}
   return num     
}

export default UseMemo1