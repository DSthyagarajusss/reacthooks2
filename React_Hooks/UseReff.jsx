import React, { useEffect, useRef, useState } from 'react'

function UseReff() {
    let [name,setname]=useState('')
    let count =useRef(0)
//case 1 :use to crate amutable variable without coseing re-remder
    useEffect(()=>{
        count.current=count.current+1
    })
//case 2:   its very use full to direct access dom elements
let inputrff=useRef()
let btnHandler =()=>{
    inputrff.current.style.width="300px"
    inputrff.current.focus()
}
  return <>
  <div>
    <div className="container mt-5">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header bg-dark text-white"> <h2> case1:Name:{name}</h2></div>
                    <div className="card-body">
                    <input type="text" onChange={(e)=> setname(e.target.value)} />
                    <h4>count:{count.current }</h4>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-header bg-dark    text-white">case2: <input type="text" ref={inputrff} /></div>
                    <div className="card-body">
                    <button onClick={btnHandler} className='btn btn-primary'>click me</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <h1>UseRef:</h1>
      <h4>
       UseRef allows to access DOM elements for creating mutablue variable which will not re-reder the component
      </h4>
  
  </>
  
}

export default UseReff