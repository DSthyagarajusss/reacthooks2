import React from "react";
import Emp from "./Emp"
class User extends React.Component{
 uid=101
 uname='raju' 
render(){
    return<>
    <h2>User comp</h2><hr />
    <Emp uid={this.uid} unames={this.uname} loc={"Thotakanuma"}/> <hr />
    </>
}
}
export default User