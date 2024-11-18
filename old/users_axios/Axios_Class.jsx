import React, { Component } from 'react'
import axios from 'axios'
//import './style.css'
export class Axios_Class extends Component {
     st ate={users:[]}
    componentDidMount=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((respones)=>{
         this.setState({users:respones.data})
          
      })
       .catch(()=>{})
    }

  render() {
    return <>
    <h2>axios Component</h2>
    {/* <pre>{JSON.stringify(this.state.users)}</pre>
    <button onClick={this.getUser}>TATA_BYEBYE</button> */}
    <div className="continer">
      <div className="row">
        <div className="col-4">
        {
  this.state.users.length > 0 ? <>
    <table border={2} className='table table-hover '>
        <thead  class="thead-light table-dark"><tr>
            <th  class="thead-light">id</th>
            <th>name</th>
            <th>email</th>
            </tr>
        </thead>
        <tbody>
{
 this.state.users.map((user)=>{
            return <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
    })
}
</tbody>
    </table>
    
    </>:<>no data</>
}
        </div>
      </div>
    </div>
   
    
    
    </>
  }
}

export default Axios_Class