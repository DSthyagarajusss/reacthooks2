import React, { useState } from 'react'

function Iphone() {
let[pName,setpName]=useState('test')

let update_handler=(iphones)=>{
    setpName(iphones)
}

    return<>
    <h2>Iphone Name:{pName}</h2><br />
    <img width={300} onClick={update_handler.bind(null,'iphone 15')} src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIuFPBEnOlUFOPfrkVOOn0l2wM-gFfWcpfuukLhAjFK_asTa6YOa2jHkjVfTafwWdbUl88cXW7CQ8uXpYQPoCGCPTfMNrzJXN4XRPYyWF6IHVv_rvwDffA7am_20Z7yhiHlOOE2A&usqp=CAc" alt="iphone"  />


    <img  onClick={update_handler.bind(null,'iphone 15 pro max')} src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT5UY2U5g3oHwR73d2NYBShglXjFfdJZtMvaQZ9WchxuMtkn5YBBiGvNdv4n5tJGAJZidV8Rq1Nts2U5TCfO5xstoeuUeIIPrj_FYXSJYfzePwY0aeBwesh9p45DXccglDbu47LmQ&usqp=CAc" alt="iphone" width={300} />
    </>
}


export default Iphone