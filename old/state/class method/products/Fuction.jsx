 let Fuction=()=> {
    

state={
    qty:1000
}
incrhandler=()=>{
    this.setState({qty:this.state.qty+1})
}
dechandler=()=>{
    this.setState({qty:this.state.qty-1})
}

    return<>
    <button onClick={this.dechandler}>-</button>{this.state.qty}
    <button onClick={this.incrhandler}>+</button>
    </>
}

export default Fuction