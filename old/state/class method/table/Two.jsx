import React from "react";
class Two extends React.Component {

    render(){
        const { Employee1}= this.props;
        return <>
             
            <div className="container">
                <div className="row">
                    <div className="col-6">
                            <table border="3" cellPadding="15" class="mt-5 " >
                <thead>
                <tr>
                    <th>Field</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>EMPCODE </td>  <td> {Employee1.Empcode}</td>
                    </tr>
                    <tr>
                        <td>NAME  </td>  <td> {Employee1.Name}</td>
                    </tr>
                    <tr>
                        <td>AGE  </td>  <td>  {Employee1.Age}</td>
                    </tr>
                    <tr>
                        <td>EMAIL  </td>  <td>  {Employee1.Email}</td>
                    </tr>
                    <tr>
                        <td>LOCATION  </td>  <td>  {Employee1.Location}</td>
                    </tr>
                    <tr>
                        <td>MESSAGE </td>  <td>  {this.props.Message1.Message}</td>
                    </tr>
                    <tr>
                        <td>USER </td>  <td>  {this.props.Message1.User}</td>
                    </tr>
                    <tr>
                        <td>EMAIL </td>  <td>  {this.props.mail1}</td>
                    </tr>
                    <tr>
                        <td>FATER NAME </td>  <td>  {Employee1.Fater_name}</td>
                    </tr>
                    <tr>
                        <td>MOTHER NAME</td>  <td>  {Employee1.Mother_name}</td>
                    </tr>
                    </tbody>
                </table>
                    </div>
                </div>
            </div>
        </>
    }
}
export default Two