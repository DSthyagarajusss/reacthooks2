import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer, useState } from 'react'


let initialState={count:0}
let reducer=(state,action)=>{
//    return {count:state.count+1}

    switch(action.type){
        case "incr":
            return {count:state.count+1}
        case "decr":
            return{count:state.count-1}
        default:
            return state
    }

}
function UseReduserabc() {
   
   let [state,dispatch]=useReducer(reducer,initialState)
   
   
   let incr=()=>{
    dispatch({type:"incr"})
   }
   let decr=()=>{
    dispatch({type:"decr"})
   }
  return <>
  <div className="container">
    <div className="row">
        <div className="col">
            <div className="card">
                <div className="card-header bg-dark text-white mt-5"><h1>count:{state.count}</h1></div>
                <div className="card-body">
                     
                    <button onClick={incr} className='ml-4 btn btn-success' >INCR</button> 
                    <button onClick={decr} className='ml-3 btn btn-primary'>DECR</button>
                </div>
            </div>
        </div>
    </div>
  </div>
  </>
}

export default UseReduserabc