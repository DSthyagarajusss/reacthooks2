const { useState } = require("react")

let Message_fuction=()=>{
let [msg,Setmsg]=useState('hello')
let gmhandler=()=>{
    Setmsg('good morning')
}
let gnhandler=()=>{
    Setmsg('good night')
}

    return<>
    <h2>Message Componet</h2>
    <h3>value:{msg}</h3>
    <button onClick={gmhandler}>gm</button>
    <button onClick={gnhandler}>gn</button>
    </>
}
export default Message_fuction