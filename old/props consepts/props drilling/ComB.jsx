import ComC from "./ComC"

let ComB=(props)=>{

    return<>
    <h2>component--B</h2>
    <pre>{JSON.stringify(props)}</pre>
    <hr />
    
    <ComC />
    </>
}
export default ComB
