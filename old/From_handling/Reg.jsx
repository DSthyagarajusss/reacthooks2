import React, { useState } from 'react'

function Reg() {
  let[user,setUser]=useState({username:"",password:"",DOB:"",})
  let updateHandler=(event)=>{
    event.preventDefault()
      setUser({...user,[event.target.name]:event.target.value})
      console.log(user)
     

  }
  let checkBoxHandler = (event)=>{
    
    setUser({...user,checked:event.target.checked})
    
}
let subHandler=(event)=>{
  event.preventDefault()
  console.log(user)
}


  return<>
  <pre>{JSON.stringify(user)}</pre>
  <form action="">
   <div className="container">
    <div className="ro">
      <div className="col-md-5">
        <div className="card mt-5">
          <div className="card-header bg-dark text-white">
            <h4>Regetration page</h4>
          </div>
          <div className="card-body">
            <div className="form-group">
              <input type="text" placeholder='User Name' className="form-control mt-2" onChange={updateHandler} name='username'/>
            </div>
            <div className="form-group">
              <input type="password" placeholder='password' className="form-control mt-2" onChange={updateHandler} name='password' />
            </div>
            <div className="form-group">
              <input type="date" placeholder='password' className="form-control mt-2 " onChange={updateHandler} name='DOB'  />
            </div>
            <div class="form-check form-group">
               <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={checkBoxHandler} name='checkbox'/>
               <label class="form-check-label" for="flexCheckDefault">Accepct T&C</label>
            </div>
           < div className="form-group">
           <input type="submit" value="login" className="btn btn-outline-success" onSubmit={subHandler}/>
            </div>
           
          </div>
        </div>
      </div>
    </div>
   </div>
  </form>
  </>
}
export default Reg