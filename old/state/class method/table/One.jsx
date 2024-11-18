import React from "react"
import Two from "./Two"

class One extends React.Component{
     Mail = "ds@gmail.com"
     Message = {
        Message : "good bye",
        User : "Thyagaraju DS",
     }
     constructor(){
        super();
     this.state = {
      Employee : {
        Empcode: 7,
        Name : "Thyagraju DS",
        Age : 22 ,
        Email : 'raju@gmail.com',
        Location : "Bangalore",
        Fater_name: 'Shankar',
        Mother_name:'Chinapapamma'
      }
    }
}
         render(){
        return <div>
            <Two Employee1 = {this.state.Employee}
            Message1 = {this.Message}
            mail1 = {this.Mail} />
        </div>
    }
}

export default One