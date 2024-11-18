import ComD from "./ComD"

let ComC=(props)=>{

    return<>
    <h2>component--C</h2>
    <pre>{JSON.stringify(props)}</pre>
    <ComD/>
    </>
}
export default ComC