import React from "react";
import Two from "./Two";
class One extends React.Component{
    employee_id=101
    employee_name='Thyagaraju naidu'
    employee_salary=873873
    employee_email_id='ds@gmail.com'
    employee_locaton='Bengaloru'
    render(){
        return<>
        <h1> One class comp</h1>
        <p>employee salary:{this.employee_salary}</p>
        <p>employee email id:{this.employee_email_id}</p>
        <p> employee location:{this.employee_locaton}</p>
        <Two employee_id={this.employee_id} employee_name={this.employee_name} employee_salary={this.employee_salary} employee_email_id={'ds@gmail.com'} employee_locaton={'Bengaloru'}/>
        </>
    }
}
export default One