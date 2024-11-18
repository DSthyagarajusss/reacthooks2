import React from "react";
class Two extends React.Component{
    render(){
        return<>
        <h1>two class comp</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <p>employee ID:{this.props.employee_id}</p>
        <p>employee Name:{this.props.employee_name}</p>
        <p>employee salary:{this.props.employee_salary}</p>
        <p>employee email id:{this.props.employee_email_id}</p>
        <p> employee location:{this.props.employee_locaton}</p>
        </>
    }
}
export default Two