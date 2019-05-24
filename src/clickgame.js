import React, { Component } from 'react'

 class Clicker  extends Component {
     state= {
         num: 0
     }

     randomGen(){
this.setState(state=> ({
    num: Math.floor(Math.random() * 10)
}))
}
     
    render() {
        return (
            <div>
               <h1 className="App">Clicker game</h1> 
               {this.state.num === 7 && <h1>You are the winner</h1>}
          <div>  <p>the number is {this.state.num}</p> <button onClick={()=>{this.randomGen()}}>click me</button> 
                </div>
            
            </div>
        )
    }
}


export default Clicker