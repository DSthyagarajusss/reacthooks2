
import ComB from "./ComB"

let ComA=()=>{
 let  emp={  id:101,
        name:'raju',
        salary:'450000'
        }
    return<>
                <h1>Component--A</h1>
                <ComB data={emp}/>
         </>
}

export default ComA


// import React from "react";
// import ComB from "./ComB";

// class ComA extends React.Component{
//     emp={
//         eid:101,
//         ename:"Rahul"
//     }
//     render(){
//         return <div>
//             <h1>component--A</h1>
//             <ComB emp_data/>
//         </div>
//     }
// }

//export default ComA