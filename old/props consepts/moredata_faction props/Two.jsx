
    function Two(props){
        
            return<>
                <pre>{JSON.stringify(props)}</pre>
                <h5>employee id={props.eid}</h5>
                <h5>employee name={props.ename}</h5>
                <h5>employee email={props.email}</h5>
                <h5>employee gender={props.gender}</h5>
                
        </>
    }
    export default Two