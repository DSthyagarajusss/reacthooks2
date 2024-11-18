import { useState } from "react"

let Messagee_fuction_bind=()=> {
    let [msg,setmsg]=useState('jai bhalayaaa')
     let updateHandler=(Value)=>{
 
        setmsg(Value)
    }
    
 
        return <>
           
           
           <h3>Message Component</h3>
                <h3>Value:{msg}</h3>
                <button class='btn btn-primary mt'  onClick={updateHandler.bind(null,'good morning')}>GM</button>
                <button class='btn btn-warning' onClick={updateHandler.bind(null,'good Afternoon')}>GA</button>
                <button class='btn btn-danger' onClick={updateHandler.bind(null,'good evening')}>GE</button>
                <button class='btn btn-dark'  onClick={updateHandler.bind(null,'good nigth')}>GN</button>
           
            
                
           
                
                
                </>

    }

export default Messagee_fuction_bind