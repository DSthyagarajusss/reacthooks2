import React from "react";
class Emp extends React.Component{
 render(){
 return<>
    <h2>Employees comp</h2>
    <pre>{JSON.stringify(this.props)}</pre>
    <h3 class='mt-5'>  user id :{this.props.uid}</h3><hr />
    <h4>user name: {this.props.unames}</h4><hr />
    <h4>user Location:{this.props.loc}</h4><hr />
    </>
}
}
export default Emp
