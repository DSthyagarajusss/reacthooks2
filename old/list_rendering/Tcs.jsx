import React from 'react'

let Tcs=()=>{
    let employee=[{Id:101,Name:'raju',Salary:83033},
        {Id:102,Name:'raju',Salary:83033},
        {Id:103,Name:'ramu',Salary:83033},
        {Id:104,Name:'ramana',Salary:83033},
        {Id:105,Name:'raghava',Salary:83033},
        {Id:106,Name:'ranjith',Salary:83033},
        {Id:107,Name:'ravana',Salary:83033},
        {Id:108,Name:'rakesh',Salary:83033},
        {Id:109,Name:'rayan',Salary:83033},
        {Id:110,Name:'ramthula',Salary:83033},
        {Id:111,Name:'rehmaan',Salary:83033},
    ]
    return<>
    
     <h1>employee_table</h1>
     <table border='2'>
        <thead  ><tr>
            <th >Id</th>
            <th>Name</th>
            <th>Salary</th>
            </tr>
            </thead>


         <tbody>
            {
                employee.map((emp)=>{
                    return <tr key ={emp.Id}>
                        <td>{emp.Id}</td>
                        <td>{emp.Name}</td>
                        <td>{emp.Salary}</td>
                    </tr>
                })
            }
          
            </tbody>   
     </table>
    </>
}
export default Tcs