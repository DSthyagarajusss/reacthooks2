
import { useState } from "react"

let Login_Copy=()=>{
    let[user,setUser]=useState({email:"",password:""})
    let updateHandler=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
  
  let submitHandler=(event)=>{
    event.preventDefault()
  //axios.post().then().catch()
  console.log(user)
}
    return <div>
        <div className="container">
        <div className="row">
            <div className="col-5">
         <form action="" className="mt-5" onSubmit={submitHandler}>
          
        <pre>{JSON.stringify(user)}</pre>
        <div className="form-group mt-4 ">
        <label>Email</label>
        <input type='email' onChange={updateHandler}name="email" className="form-control"/>
        </div>
        <div className="form-group">
        <label>Password</label>
        <input onChange={updateHandler} name="password" type='password' className="form-control"/>
        </div>
        <input type="submit" value="login" className="btn btn-outline-success"/>
    </form>  
                </div>
            </div>
        </div>
    </div>
}
export default Login_Copy