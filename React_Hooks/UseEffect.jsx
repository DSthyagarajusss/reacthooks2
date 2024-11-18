
import React, { useEffect, useState } from 'react'

function UseEffect() {
    let [count,setcount]=useState(0);
    let [othercount,setothercount]=useState(0);
    let [time,setTime]=useState(0);
    //useeffect with dependency
    // useEffect(()=>{
    //     document.title=`${othercount} new messages!!`
    // },[])//useeffect with an emptyarray  
    useEffect(()=>{
        document.title=`${othercount} new messages!!`
    },[othercount])


    //useeffect clen up function
    useEffect(()=>{
    let timer=setTimeout(() => {
            setTime(time+1)
        }, 1000);
        return()=>{
            clearInterval(timer) // the clenup function will be called the component is unmountetd
        }
    }) 
  return <>
  <div> 
    
    <div className="container mt-5">
        <div className="row">
            <div className="col-4">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                    <h2>{count} new Message!!</h2>
                    </div>
                    <div className="card-body "> 
                    <button className='btn btn-warning' onClick={()=>setcount(count+1)}>click</button>
                    </div>
                </div>
            </div>
            <div className="card">
                    <div className="card-header bg-dark text-white">
                    <h2>{othercount} new Message!!</h2>
                    </div>
                    <div className="card-body "> 
                    <button className='btn btn-warning' onClick={()=>setothercount(othercount+5)}>othercount</button>
                    </div>
                </div>
                </div>
            <div className="card">

             {/* useeffct clenup function */}
                    <div className="card-header bg-dark text-white mt-5">
                        <h3>{time} in seconds</h3>
                    </div>
                </div>
        </div>
    </div>
    <h1>useEffect:</h1>
      <h4>
        
      useEffect used ot perfrom a side effects in fuctional components,side effects are action which are perfromed with the "out side world!"  </h4>

      <h1>sude effcts of React</h1>
      <ul>
        <li> Fetching data from Apl</li>
        <li> updating the Dom document, & window.</li>
        <li> Timer function:</li>
        <ol>
            <li>setInterval</li>
            <li>setTimeOut</li>
        </ol>
      </ul>
    
  
  </>
}

export default UseEffect